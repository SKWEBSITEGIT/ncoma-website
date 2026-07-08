#!/usr/bin/env python3
"""
Copy Review Workbook Builder — NCOMA / WIYO! (two-step approval workflow)
=========================================================================

Crawls the live NCOMA site, screenshots each section, extracts copy,
and builds an Excel workbook for collaborative copy review.

Layout per row:
  | Preview | Section | Current copy | Suggested edit | Edit type
  | Proposed by | Approval | Approved by | Notes |

Run:  python3 tools/build_copy_review.py
Env:  SKIP_CAPTURE=1  →  reuse cached screenshots (faster re-runs)
      BASE_URL=http://localhost:3000  →  use local dev server instead of prod
"""

import os, sys, re
from pathlib import Path
from datetime import datetime

# ── Config ────────────────────────────────────────────────────────────
PROJECT_ROOT = Path(__file__).resolve().parent.parent
LIVE_BASE_URL = os.environ.get("BASE_URL", "https://www.whatisinyouroil.com")
OUT_DIR = PROJECT_ROOT / "copy-review"
OUT_XLSX = OUT_DIR / "NCOMA-copy-review.xlsx"
SHOTS_DIR = OUT_DIR / "screenshots"

REVIEWERS = ["Pablo", "Matt", "Conrad", "_"]

EDIT_TYPES = ["Copy improvement", "Typo fix", "Fact correction",
              "Tone change", "Cut entirely", "Add content", "Other"]

APPROVAL_OPTIONS = ["Awaiting review", "Approved", "Rejected",
                    "Needs discussion", "Applied"]

PAGES_TO_PROCESS = [
    {"url": "/",                  "label": "Homepage"},
    {"url": "/seal",              "label": "The WIYO! Seal"},
    {"url": "/operators",         "label": "For Operators"},
    {"url": "/consumers",         "label": "For Consumers"},
    {"url": "/about",             "label": "About NCOMA"},
    {"url": "/contact",           "label": "Contact"},
    {"url": "/find",              "label": "Find Certified"},
    {"url": "/field-notes",       "label": "Field Notes Index"},
    {"url": "/reports",           "label": "Reports Index"},
    {"url": "/tools/cost-calculator", "label": "Cost Calculator"},
]

# Thumbnail sizing
THUMB_TARGET_WIDTH = 880
THUMB_MAX_HEIGHT = 500
COLUMN_A_WIDTH_CHARS = 128
VIEWPORT_WIDTH = 1440

# Brand colors
AMBER = "C8841A"
CHARCOAL = "1F1F1F"
OFFWHITE = "FAF6F0"

# CSS to disable animations so screenshots are clean
DISABLE_ANIM_CSS = """
*, *::before, *::after {
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    transition: none !important;
}
[style*="opacity"] { opacity: 1 !important; }
.animate-hero-1, .animate-hero-2, .animate-hero-3 {
    opacity: 1 !important;
    transform: none !important;
}
"""

try:
    from bs4 import BeautifulSoup
except ImportError:
    print("Missing: pip3 install beautifulsoup4 lxml"); sys.exit(1)
try:
    import openpyxl
    from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
    from openpyxl.utils import get_column_letter
    from openpyxl.worksheet.datavalidation import DataValidation
    from openpyxl.formatting.rule import FormulaRule
    from openpyxl.drawing.image import Image as XLImage
except ImportError:
    print("Missing: pip3 install openpyxl"); sys.exit(1)


# ──────────────────────────────────────────────────────────────────────
# Live page parsing via Playwright — extract sections + copy from rendered HTML
# ──────────────────────────────────────────────────────────────────────

SKIP_TAGS = {"script", "style", "noscript", "svg", "video", "source", "link", "meta"}


def clean_text(s):
    return re.sub(r"\s+", " ", s or "").strip()


def is_text_meaningful(s):
    if not s: return False
    s = s.strip()
    if len(s) < 2: return False
    if s.isdigit() and len(s) <= 3: return False
    return True


def extract_section_copy(section_el):
    items, seen = [], set()
    def collect(node):
        for ch in node.children:
            if not hasattr(ch, "name") or ch.name is None:
                continue
            if ch.name in SKIP_TAGS:
                continue
            if ch.name in ("h1","h2","h3","h4","h5","h6","p","blockquote",
                           "figcaption","button","li","label"):
                txt = clean_text(ch.get_text(separator=" "))
                if is_text_meaningful(txt):
                    type_label = {
                        "h1":"H1","h2":"H2","h3":"H3","h4":"H4","h5":"H5","h6":"H6",
                        "p":"Paragraph","blockquote":"Pull quote",
                        "figcaption":"Caption","button":"Button","li":"List item",
                        "label":"Label",
                    }[ch.name]
                    key = (type_label, txt[:80])
                    if key not in seen:
                        seen.add(key)
                        items.append((type_label, txt))
                    continue
            collect(ch)
            if ch.name == "a":
                txt = clean_text(ch.get_text(separator=" "))
                if is_text_meaningful(txt) and len(txt) > 3 and not txt.isdigit():
                    key = ("Link/CTA", txt[:80])
                    if key not in seen:
                        seen.add(key)
                        items.append(("Link/CTA", txt))
    collect(section_el)
    return items


def section_label(el, idx):
    """Generate a human-readable name for a section element."""
    # Check for heading inside
    for tag in ("h1", "h2", "h3"):
        h = el.find(tag)
        if h:
            txt = clean_text(h.get_text())
            if txt and len(txt) < 60:
                return txt
    # Check for eyebrow text
    eyebrow = el.find("p", class_=lambda c: c and "uppercase" in str(c))
    if eyebrow:
        txt = clean_text(eyebrow.get_text())
        if txt and len(txt) < 40:
            return txt
    # Fallback
    if el.name == "header": return "Header"
    if el.name == "footer": return "Footer"
    if el.name == "nav": return "Navigation"
    if el.get("id"): return f"#{el['id']}"
    return f"Section {idx + 1}"


def build_css_selector(el, idx):
    """Build a CSS selector that Playwright can use to find this element."""
    if el.get("id"):
        return f"#{el['id']}"
    # Use nth-of-type on main > section
    return f"main > :nth-child({idx + 1})"


def parse_rendered_page(html_content):
    """Parse rendered HTML into sections with copy items."""
    soup = BeautifulSoup(html_content, "lxml")
    sections = []

    # SEO meta
    title = soup.find("title")
    meta_desc = soup.find("meta", attrs={"name": "description"})
    head_items = []
    if title:
        head_items.append(("Page <title>", clean_text(title.get_text())))
    if meta_desc and meta_desc.get("content"):
        head_items.append(("Meta description", clean_text(meta_desc["content"])))
    if head_items:
        sections.append({
            "label": "SEO - Title & meta",
            "selector": None,
            "copy_items": head_items,
        })

    # Find main content
    main = soup.find("main")
    if not main:
        return sections

    # Get direct children of main (sections)
    direct_children = [c for c in main.children if hasattr(c, "name") and c.name]
    for idx, child in enumerate(direct_children):
        if child.name in SKIP_TAGS:
            continue
        copy = extract_section_copy(child)
        if not copy:
            continue
        sections.append({
            "label": section_label(child, idx),
            "selector": build_css_selector(child, idx),
            "child_index": idx,
            "copy_items": copy,
        })

    # Also get header/nav and footer
    header = soup.find("header")
    if header:
        copy = extract_section_copy(header)
        if copy:
            sections.insert(1 if head_items else 0, {
                "label": "Navigation",
                "selector": "header",
                "copy_items": copy,
            })

    footer = soup.find("footer")
    if footer:
        copy = extract_section_copy(footer)
        if copy:
            sections.append({
                "label": "Footer",
                "selector": "footer",
                "copy_items": copy,
            })

    return sections


# ──────────────────────────────────────────────────────────────────────
# Screenshots
# ──────────────────────────────────────────────────────────────────────

def crawl_and_capture(url, out_dir):
    """Visit page, extract HTML + screenshot each section."""
    from playwright.sync_api import sync_playwright

    out_dir.mkdir(parents=True, exist_ok=True)

    skip = os.environ.get("SKIP_CAPTURE") == "1"

    print(f"  Opening {url}")
    with sync_playwright() as p:
        browser = p.chromium.launch()
        ctx = browser.new_context(
            viewport={"width": VIEWPORT_WIDTH, "height": 900},
            device_scale_factor=1
        )
        page = ctx.new_page()
        page.goto(url, wait_until="domcontentloaded", timeout=60000)
        page.add_style_tag(content=DISABLE_ANIM_CSS)

        # Wait for fonts and scroll to trigger lazy content
        page.evaluate("() => document.fonts && document.fonts.ready")
        page.evaluate("""
          async () => {
            await new Promise(r => setTimeout(r, 800));
            const h = document.body.scrollHeight;
            for (let y = 0; y <= h; y += 600) {
              window.scrollTo(0, y);
              await new Promise(r => setTimeout(r, 100));
            }
            window.scrollTo(0, 0);
            await new Promise(r => setTimeout(r, 800));
          }
        """)
        try:
            page.wait_for_load_state("networkidle", timeout=8000)
        except Exception:
            pass

        # Get rendered HTML for parsing
        html = page.content()
        sections = parse_rendered_page(html)
        print(f"  Parsed {len(sections)} sections")

        # Screenshot each section
        screenshots = {}
        if skip:
            for i in range(len(sections)):
                shot = out_dir / f"section-{i:02d}.png"
                screenshots[i] = shot if shot.exists() else None
            cached = sum(1 for v in screenshots.values() if v)
            print(f"  SKIP_CAPTURE=1 -- reusing {cached} cached screenshots")
        else:
            for i, sec in enumerate(sections):
                sel = sec.get("selector")
                if not sel:
                    screenshots[i] = None
                    continue
                try:
                    el = page.query_selector(sel)
                    if el is None:
                        screenshots[i] = None
                        continue
                    el.scroll_into_view_if_needed(timeout=3000)
                    page.wait_for_timeout(200)
                    shot = out_dir / f"section-{i:02d}.png"
                    el.screenshot(path=str(shot), timeout=10000)
                    screenshots[i] = shot
                    print(f"    [{i:02d}] {sec['label'][:48]:48s} -> {shot.name}")
                except Exception as e:
                    print(f"    [{i:02d}] {sec['label'][:48]:48s} -> FAILED ({e})")
                    screenshots[i] = None

        browser.close()

    return sections, screenshots


def resize_for_excel(img_path, target_width, max_height):
    try:
        from PIL import Image
    except ImportError:
        return img_path, 0, 0
    img = Image.open(img_path)
    w, h = img.size
    if w > target_width:
        ratio = target_width / w
        w, h = target_width, int(h * ratio)
    if h > max_height:
        ratio = max_height / h
        w, h = int(w * ratio), max_height
    img = img.resize((w, h), Image.LANCZOS)
    out = img_path.with_suffix(".small.png")
    img.save(out, optimize=True)
    return out, w, h


# ──────────────────────────────────────────────────────────────────────
# Excel workbook
# ──────────────────────────────────────────────────────────────────────

def build_page_sheet(wb, page_meta, sections, screenshot_paths):
    name = page_meta["label"][:31]
    ws = wb.create_sheet(title=name)

    # Header band
    ws["A1"] = page_meta["label"]
    ws["A1"].font = Font(name="Arial", size=20, bold=True, color="FFFFFF")
    ws["A1"].fill = PatternFill("solid", fgColor=AMBER)
    ws["A1"].alignment = Alignment(vertical="center", indent=1)
    ws.row_dimensions[1].height = 36
    ws.merge_cells("A1:I1")

    ws["A2"] = (f"{page_meta['url']}  |  {LIVE_BASE_URL}{page_meta['url']}"
                f"  |  {datetime.now().strftime('%Y-%m-%d %H:%M')}"
                f"  |  {len(sections)} sections")
    ws["A2"].font = Font(name="Arial", size=10, italic=True, color="555555")
    ws["A2"].alignment = Alignment(vertical="center", indent=1)
    ws.merge_cells("A2:I2")
    ws.row_dimensions[2].height = 22

    ws["A3"] = "Open live page"
    ws["A3"].hyperlink = f"{LIVE_BASE_URL}{page_meta['url']}"
    ws["A3"].font = Font(name="Arial", size=11, color=AMBER, underline="single")
    ws["A3"].alignment = Alignment(vertical="center", indent=1)
    ws.merge_cells("A3:I3")

    # Column headers
    headers = [
        ("Section preview",   COLUMN_A_WIDTH_CHARS),
        ("Section",           22),
        ("Current copy",      60),
        ("Suggested edit",    50),
        ("Edit type",         18),
        ("Proposed by",       14),
        ("Approval",          18),
        ("Approved by",       14),
        ("Notes",             32),
    ]
    header_row = 5
    for col_idx, (label, width) in enumerate(headers, start=1):
        cell = ws.cell(row=header_row, column=col_idx, value=label)
        cell.font = Font(name="Arial", size=11, bold=True, color="FFFFFF")
        cell.fill = PatternFill("solid", fgColor=CHARCOAL)
        cell.alignment = Alignment(vertical="center", horizontal="left", indent=1, wrap_text=True)
        cell.border = Border(bottom=Side(style="medium", color=AMBER))
        ws.column_dimensions[get_column_letter(col_idx)].width = width
    ws.row_dimensions[header_row].height = 32

    # Data rows
    current_row = header_row + 1
    for i, sec in enumerate(sections):
        copy_text = "\n".join([f"[{t}] {x}" for t, x in sec["copy_items"]])

        # Screenshot
        shot_path = screenshot_paths.get(i)
        embedded_h = 130
        if shot_path and Path(shot_path).exists():
            try:
                small, w, h = resize_for_excel(Path(shot_path), THUMB_TARGET_WIDTH, THUMB_MAX_HEIGHT)
                img = XLImage(str(small))
                img.anchor = f"A{current_row}"
                ws.add_image(img)
                embedded_h = max(150, min(405, int(h * 0.78) + 14))
            except Exception as e:
                ws.cell(row=current_row, column=1, value=f"(screenshot failed: {e})")

        # Section name
        cell = ws.cell(row=current_row, column=2, value=sec["label"])
        cell.font = Font(name="Arial", size=11, bold=True, color=AMBER)
        cell.alignment = Alignment(vertical="top", wrap_text=True, indent=1)

        # Current copy
        cell = ws.cell(row=current_row, column=3, value=copy_text)
        cell.font = Font(name="Arial", size=10)
        cell.alignment = Alignment(vertical="top", wrap_text=True, indent=1)

        # Suggested edit
        cell = ws.cell(row=current_row, column=4, value="")
        cell.alignment = Alignment(vertical="top", wrap_text=True, indent=1)
        cell.fill = PatternFill("solid", fgColor="FFFBF0")

        # Edit type
        cell = ws.cell(row=current_row, column=5, value="")
        cell.alignment = Alignment(vertical="center", horizontal="center", wrap_text=True)

        # Proposed by
        cell = ws.cell(row=current_row, column=6, value="")
        cell.alignment = Alignment(vertical="center", horizontal="center")

        # Approval
        cell = ws.cell(row=current_row, column=7, value="Awaiting review")
        cell.alignment = Alignment(vertical="center", horizontal="center", wrap_text=True)
        cell.font = Font(name="Arial", size=11, bold=True)

        # Approved by
        cell = ws.cell(row=current_row, column=8, value="")
        cell.alignment = Alignment(vertical="center", horizontal="center")

        # Notes
        cell = ws.cell(row=current_row, column=9, value="")
        cell.alignment = Alignment(vertical="top", wrap_text=True, indent=1)

        # Borders
        thin = Side(style="thin", color="DDDDDD")
        for c in range(1, 10):
            ws.cell(row=current_row, column=c).border = Border(
                left=thin, right=thin, top=thin, bottom=thin)

        ws.row_dimensions[current_row].height = embedded_h
        current_row += 1

    last_row = current_row - 1

    # Freeze panes
    ws.freeze_panes = ws.cell(row=header_row + 1, column=2)

    # Data validations
    dv_et = DataValidation(type="list", formula1=f'"{",".join(EDIT_TYPES)}"', allow_blank=True)
    ws.add_data_validation(dv_et)
    dv_et.add(f"E{header_row+1}:E{last_row}")

    dv_rev = DataValidation(type="list", formula1=f'"{",".join(REVIEWERS)}"', allow_blank=True)
    ws.add_data_validation(dv_rev)
    dv_rev.add(f"F{header_row+1}:F{last_row}")
    dv_rev.add(f"H{header_row+1}:H{last_row}")

    dv_ap = DataValidation(type="list", formula1=f'"{",".join(APPROVAL_OPTIONS)}"', allow_blank=True)
    ws.add_data_validation(dv_ap)
    dv_ap.add(f"G{header_row+1}:G{last_row}")

    # Conditional formatting on Approval column
    approval_colors = {
        "Awaiting review":  ("E0E0E0", CHARCOAL, False),
        "Approved":         (AMBER,    "FFFFFF", True),
        "Rejected":         ("F5B49E", CHARCOAL, True),
        "Needs discussion": ("FFE08A", CHARCOAL, True),
        "Applied":          ("C7E4D4", CHARCOAL, False),
    }
    for status, (bg, fg, bold) in approval_colors.items():
        rule = FormulaRule(
            formula=[f'$G{header_row+1}="{status}"'],
            fill=PatternFill("solid", fgColor=bg),
            font=Font(name="Arial", size=11, bold=bold, color=fg)
        )
        ws.conditional_formatting.add(f"G{header_row+1}:G{last_row}", rule)

    return len(sections)


def build_overview(wb, page_summaries):
    ws = wb.create_sheet(title="Overview", index=0)

    # Title
    ws["A1"] = "NCOMA / WIYO! - Copy Review"
    ws["A1"].font = Font(name="Arial", size=22, bold=True, color="FFFFFF")
    ws["A1"].fill = PatternFill("solid", fgColor=AMBER)
    ws["A1"].alignment = Alignment(vertical="center", indent=1)
    ws.row_dimensions[1].height = 44
    ws.merge_cells("A1:J1")

    ws["A2"] = (f"Generated {datetime.now().strftime('%B %d, %Y  |  %H:%M')}"
                f"    |    Reviewers: {' | '.join(REVIEWERS)}"
                f"    |    Counts auto-update as you change Approval values")
    ws["A2"].font = Font(name="Arial", size=10, italic=True, color="666666")
    ws["A2"].alignment = Alignment(indent=1)
    ws.merge_cells("A2:J2")

    # Instructions
    ws["A4"] = "How the two-step review works"
    ws["A4"].font = Font(name="Arial", size=13, bold=True, color=AMBER)
    steps = [
        "1. Open the tab for the page you're reviewing (tabs at bottom).",
        "2. Each row = one section. Screenshot on the left, copy in the middle, edit columns on the right.",
        "3. PROPOSE: paste your edit in 'Suggested edit', pick 'Edit type' + your name in 'Proposed by'.",
        "4. APPROVE: another reviewer sets 'Approval' and picks their name in 'Approved by'.",
        "5. APPLIED: once the edit is live, set Approval to 'Applied'.",
        "6. The dashboard below updates automatically from each page tab.",
    ]
    for i, line in enumerate(steps, start=5):
        ws[f"A{i}"] = line
        ws[f"A{i}"].alignment = Alignment(indent=1, wrap_text=True)
        ws.merge_cells(f"A{i}:J{i}")
        ws.row_dimensions[i].height = 22

    # Approval legend
    leg_start = 13
    ws[f"A{leg_start}"] = "Approval colors"
    ws[f"A{leg_start}"].font = Font(name="Arial", size=13, bold=True, color=AMBER)
    legend = [
        ("Awaiting review",  "E0E0E0", "Edit proposed but not yet reviewed"),
        ("Approved",         AMBER,    "Edit accepted — will be applied"),
        ("Rejected",         "F5B49E", "Edit declined — current copy stays"),
        ("Needs discussion", "FFE08A", "Team conversation needed"),
        ("Applied",          "C7E4D4", "Edit has been applied to the live site"),
    ]
    for i, (s, c, d) in enumerate(legend, start=leg_start + 1):
        ws[f"A{i}"] = s
        ws[f"A{i}"].fill = PatternFill("solid", fgColor=c)
        is_approved = s == "Approved"
        ws[f"A{i}"].font = Font(name="Arial", size=11, bold=True,
                                color="FFFFFF" if is_approved else CHARCOAL)
        ws[f"A{i}"].alignment = Alignment(horizontal="center", vertical="center")
        ws[f"B{i}"] = d
        ws.merge_cells(f"B{i}:J{i}")

    # Dashboard
    dash_start = leg_start + len(legend) + 3
    ws[f"A{dash_start}"] = "Live page dashboard"
    ws[f"A{dash_start}"].font = Font(name="Arial", size=14, bold=True, color=AMBER)
    ws[f"B{dash_start}"] = "(counts update automatically)"
    ws[f"B{dash_start}"].font = Font(name="Arial", size=10, italic=True, color="666666")
    ws.merge_cells(f"B{dash_start}:J{dash_start}")
    dash_start += 1

    dash_headers = [
        ("Page", 24), ("Sections", 11), ("Awaiting", 11), ("Approved", 11),
        ("Rejected", 11), ("Needs disc.", 13), ("Applied", 11),
        ("Progress", 14), ("Status", 17), ("Live link", 12),
    ]
    for col_idx, (label, width) in enumerate(dash_headers, start=1):
        cell = ws.cell(row=dash_start, column=col_idx, value=label)
        cell.font = Font(name="Arial", size=11, bold=True, color="FFFFFF")
        cell.fill = PatternFill("solid", fgColor=CHARCOAL)
        cell.alignment = Alignment(horizontal="center", vertical="center")
        ws.column_dimensions[get_column_letter(col_idx)].width = width
    ws.row_dimensions[dash_start].height = 30

    first_data_row = dash_start + 1
    for i, ps in enumerate(page_summaries):
        r = first_data_row + i
        sheet_name = ps["label"][:31]
        sn_quoted = f"'{sheet_name}'"
        range_ref = f"{sn_quoted}!G6:G200"

        page_cell = ws.cell(row=r, column=1, value=ps["label"])
        page_cell.font = Font(name="Arial", size=11, bold=True, color=AMBER, underline="single")
        page_cell.hyperlink = f"#{sn_quoted}!A1"
        page_cell.alignment = Alignment(vertical="center", indent=1)

        ws.cell(row=r, column=2, value=f"=COUNTA({range_ref})").alignment = Alignment(horizontal="center")

        statuses = ["Awaiting review", "Approved", "Rejected", "Needs discussion", "Applied"]
        for j, status in enumerate(statuses):
            c = ws.cell(row=r, column=3 + j, value=f'=COUNTIF({range_ref},"{status}")')
            c.alignment = Alignment(horizontal="center")
            c.font = Font(name="Arial", size=11, bold=(status in ("Approved", "Applied")))

        prog_cell = ws.cell(row=r, column=8, value=f'=IFERROR((D{r}+G{r})/B{r},0)')
        prog_cell.number_format = "0%"
        prog_cell.alignment = Alignment(horizontal="center")
        prog_cell.font = Font(name="Arial", size=11, bold=True)

        status_cell = ws.cell(row=r, column=9,
            value=f'=IF(B{r}=0,"--",IF((D{r}+G{r})=B{r},"Complete",IF((D{r}+G{r})=0,"To review","In progress")))')
        status_cell.alignment = Alignment(horizontal="center")
        status_cell.font = Font(name="Arial", size=10, bold=True)

        lk = ws.cell(row=r, column=10, value="Open")
        lk.hyperlink = f"{LIVE_BASE_URL}{ps['url']}"
        lk.font = Font(color=AMBER, underline="single")
        lk.alignment = Alignment(horizontal="center")

        if i % 2 == 1:
            for c in range(1, 11):
                ws.cell(row=r, column=c).fill = PatternFill("solid", fgColor=OFFWHITE)

        thin = Side(style="thin", color="DDDDDD")
        for c in range(1, 11):
            ws.cell(row=r, column=c).border = Border(left=thin, right=thin, top=thin, bottom=thin)
        ws.row_dimensions[r].height = 24

    last_data_row = first_data_row + len(page_summaries) - 1

    # Totals row
    totals_row = last_data_row + 1
    ws.cell(row=totals_row, column=1, value="TOTALS").font = Font(
        name="Arial", size=12, bold=True, color="FFFFFF")
    ws.cell(row=totals_row, column=1).fill = PatternFill("solid", fgColor=AMBER)
    ws.cell(row=totals_row, column=1).alignment = Alignment(vertical="center", indent=1)

    for col in range(2, 8):
        col_letter = get_column_letter(col)
        cell = ws.cell(row=totals_row, column=col,
                       value=f"=SUM({col_letter}{first_data_row}:{col_letter}{last_data_row})")
        cell.font = Font(name="Arial", size=12, bold=True, color="FFFFFF")
        cell.fill = PatternFill("solid", fgColor=AMBER)
        cell.alignment = Alignment(horizontal="center", vertical="center")

    prog = ws.cell(row=totals_row, column=8,
                   value=f'=IFERROR((D{totals_row}+G{totals_row})/B{totals_row},0)')
    prog.number_format = "0%"
    prog.font = Font(name="Arial", size=12, bold=True, color="FFFFFF")
    prog.fill = PatternFill("solid", fgColor=AMBER)
    prog.alignment = Alignment(horizontal="center", vertical="center")

    stat = ws.cell(row=totals_row, column=9,
        value=f'=IF((D{totals_row}+G{totals_row})=B{totals_row},"ALL DONE",IF((D{totals_row}+G{totals_row})=0,"NOT STARTED","IN PROGRESS"))')
    stat.font = Font(name="Arial", size=11, bold=True, color="FFFFFF")
    stat.fill = PatternFill("solid", fgColor=AMBER)
    stat.alignment = Alignment(horizontal="center", vertical="center")

    ws.cell(row=totals_row, column=10).fill = PatternFill("solid", fgColor=AMBER)
    ws.row_dimensions[totals_row].height = 32

    # Color scale on progress
    from openpyxl.formatting.rule import ColorScaleRule
    cs_rule = ColorScaleRule(
        start_type="num", start_value=0, start_color="E0E0E0",
        mid_type="num", mid_value=0.5, mid_color="FFE08A",
        end_type="num", end_value=1, end_color=AMBER,
    )
    ws.conditional_formatting.add(f"H{first_data_row}:H{last_data_row}", cs_rule)

    ws.freeze_panes = ws.cell(row=first_data_row, column=1)


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    wb = openpyxl.Workbook()
    if "Sheet" in wb.sheetnames:
        wb.remove(wb["Sheet"])

    summaries = []
    for page_meta in PAGES_TO_PROCESS:
        print(f"\n-> {page_meta['label']} ({page_meta['url']})")
        url = f"{LIVE_BASE_URL}{page_meta['url']}"
        shots_dir = SHOTS_DIR / page_meta["url"].strip("/").replace("/", "-") or "home"
        try:
            sections, shots = crawl_and_capture(url, shots_dir)
        except Exception as e:
            print(f"  FAILED: {e}")
            sections, shots = [], {}
        count = build_page_sheet(wb, page_meta, sections, shots)
        summaries.append({**page_meta, "count": count})

    build_overview(wb, summaries)
    wb.save(OUT_XLSX)
    print(f"\nDone! Wrote: {OUT_XLSX}  ({OUT_XLSX.stat().st_size // 1024} KB)")
    print(f"Sheets: {wb.sheetnames}")


if __name__ == "__main__":
    main()
