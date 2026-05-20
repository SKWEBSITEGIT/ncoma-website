# NCOMA / WIYO! Website

Marketing and content website for the **National Cooking Oil Management Association** (NCOMA) and its consumer-facing certification brand **WIYO!** ("What Is Your Oil?").

## Stack

- **Framework**: Next.js 16 with App Router, TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX for Field Notes and Reports
- **Maps**: Mapbox GL JS (certified operator map)
- **Charts**: Recharts (Oil Atlas visualizations)
- **Icons**: Lucide React

## Getting started

```bash
pnpm install
cp .env.local.example .env.local
# Add your Mapbox token to .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                  # Next.js App Router pages
components/
  ui/                 # Base design system components
content/
  field-notes/        # MDX articles
  reports/            # MDX report summaries
data/                 # JSON data (oils, operators, board, authors)
docs/                 # Reference materials (not deployed)
lib/                  # Utilities, content helpers
public/images/        # Static assets
```

## Editing content

### Field Notes (blog posts)

Create a new `.mdx` file in `content/field-notes/` with this frontmatter:

```mdx
---
title: "Your Title"
slug: "your-slug"
date: "2026-01-15"
author: "author-slug"
category: "oil-science"
excerpt: "One-line summary."
heroImage: "/images/field-notes/your-image.jpg"
---

Your content here.
```

### Reports

Same pattern in `content/reports/` with additional fields for `type` (e.g., "annual-report"), `summary`, and `pdfLink`.

### Data files

- `data/oils.json` — Oil Atlas profiles (20 oils with fatty acid data, sourced)
- `data/operators.json` — Certified operator directory (placeholder entries)
- `data/board.json` — Board of Directors and Advisory Committee
- `data/authors.json` — Content author profiles

## Brand reference

- **NCOMA**: Institutional voice. Serif wordmark. Deep amber + charcoal.
- **WIYO!**: Consumer seal. Bold sans. Amber badge.
- **Colors**: Amber `#C8841A`, Charcoal `#1F1F1F`, Off-white `#FAF6F0`, Olive `#5C6A3E`
- **Type**: Source Serif 4 (body/headlines), Inter (UI/labels)

## Outstanding items

See `NEEDS.md` at project root for all placeholder markers requiring real content.
