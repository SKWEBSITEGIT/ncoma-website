import Link from 'next/link'
import type { Metadata } from 'next'
import { Container, Section, Eyebrow, Button, Card, Callout, Badge } from '@/components/ui'
import { FadeIn, FadeInStagger, FadeInItem, SlideIn } from '@/components/AnimatedSection'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { HeroImage, InlineImage } from '@/components/HeroImage'
import { IMAGES } from '@/lib/images'
import {
  PerformanceRankingsChart,
  PUFAScatterChart,
  SunflowerComparisonChart,
  ChartLegend,
} from './charts'

export const metadata: Metadata = {
  title: 'Frying Oil Performance Rankings — NCOMA',
  description:
    'Comprehensive ranking of 21 frying oils by durability, oxidative stability, and cost-per-cycle. Data-driven analysis of why PUFA content — not smoke point — determines fry life.',
}

export default function CostPerCycleAnalysis() {
  return (
    <main>
      {/* ════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] overflow-hidden">
        <HeroImage src={IMAGES.oilPouring} alt="Golden oil pouring into a fryer" />
        <div className="relative z-10 flex min-h-[75vh] flex-col justify-end pb-16 pt-32 md:pb-24">
          <Container size="lg">
            <div className="max-w-2xl">
              <p className="animate-hero-1 font-sans text-sm font-medium uppercase tracking-widest text-amber-light">
                NCOMA Research Report
              </p>
              <h1 className="animate-hero-2 mt-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Frying Oil Performance Rankings
              </h1>
              <p className="animate-hero-3 mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
                21 oils ranked by the metric that actually matters: how many fry
                cycles each delivers before reaching 25% Total Polar Materials.
              </p>
            </div>
            <div className="animate-hero-3 mt-10 flex items-center gap-3 font-sans text-sm text-white/50">
              <span>NCOMA Research Division</span>
              <span>·</span>
              <time>May 2026</time>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </Container>
        </div>
      </section>

      {/* ── Key Stats Bar ── */}
      <section className="bg-charcoal py-12 md:py-16">
        <Container size="lg">
          <FadeInStagger className="grid gap-8 sm:grid-cols-3">
            <FadeInItem>
              <AnimatedCounter
                value="355"
                label="Best-in-class fry cycles (HO Palm Olein)"
                source="Composite lab testing at 25% TPM endpoint"
              />
            </FadeInItem>
            <FadeInItem>
              <AnimatedCounter
                value="6x"
                label="Performance gap between best and worst oil"
                source="355 cycles (HO Palm Olein) vs 60 cycles (Grapeseed)"
              />
            </FadeInItem>
            <FadeInItem>
              <AnimatedCounter
                value="10–40x"
                label="Faster oxidation rate: linoleic vs oleic acid"
                source="Choe & Min, 2007"
              />
            </FadeInItem>
          </FadeInStagger>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 1 — THE WRONG METRIC
      ════════════════════════════════════════════════════ */}
      <Section>
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <Eyebrow>The Wrong Metric</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Cost per gallon is a lie
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
                The foodservice industry buys frying oil by price per gallon. But
                a cheap oil that degrades in 60 fry cycles costs far more than a
                premium oil that lasts 355 cycles. The real economics are measured
                in <em>cost per fry cycle</em> — how much each batch of food
                actually costs to produce.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
                A $3.50/gallon soybean oil lasting 72 cycles costs
                $0.049 per cycle. A $5.00/gallon high-oleic palm olein lasting
                355 cycles costs $0.014 per cycle — less than a third the price,
                despite looking more expensive on the invoice.
              </p>
              <Callout className="mt-8">
                <p className="font-sans text-sm font-semibold text-charcoal">
                  71% of U.S. foodservice operators choose frying oil based on
                  price per gallon alone.
                </p>
                <p className="mt-1 font-sans text-xs text-charcoal/50">
                  NCOMA / State of the Fryer Report, 2026
                </p>
              </Callout>
            </FadeIn>
            <SlideIn direction="right">
              <InlineImage
                src={IMAGES.commercialKitchen}
                alt="Commercial kitchen fryer station"
                className="aspect-[4/3]"
              />
            </SlideIn>
          </div>
        </Container>
      </Section>

      {/* ════════════════════════════════════════════════════
          SECTION 2 — THE PERFORMANCE CHART (Centerpiece)
      ════════════════════════════════════════════════════ */}
      <Section className="bg-white" id="rankings">
        <Container size="xl">
          <FadeIn>
            <div className="text-center">
              <Eyebrow>The Data</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                21 Oils Ranked by Frying Performance
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal/60">
                Fry cycles to 25% Total Polar Materials — the international
                standard for oil degradation. Colors indicate PUFA content,
                the single strongest predictor of fry life.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="mt-12 overflow-hidden rounded-lg p-4 md:p-8">
              <PerformanceRankingsChart />
              <ChartLegend />
              <p className="mt-4 font-sans text-xs text-charcoal/40">
                Data synthesized from peer-reviewed frying studies. Actual cycle
                counts vary with food type, fryer volume, filtration practices,
                and replenishment rate. Rankings reflect relative durability
                under standardized conditions.
              </p>
            </Card>
          </FadeIn>

          <FadeInStagger className="mt-10 grid gap-6 sm:grid-cols-3">
            <FadeInItem>
              <Card className="rounded-lg">
                <Badge variant="olive">Top 5 Oils</Badge>
                <p className="mt-3 text-2xl font-bold">All under 15% PUFA</p>
                <p className="mt-2 font-sans text-sm text-charcoal/60">
                  Palm olein, tallow, coconut, ghee, and HO sunflower share one
                  trait: minimal polyunsaturated fat.
                </p>
              </Card>
            </FadeInItem>
            <FadeInItem>
              <Card className="rounded-lg">
                <Badge variant="amber">Bottom 5 Oils</Badge>
                <p className="mt-3 text-2xl font-bold">All above 50% PUFA</p>
                <p className="mt-2 font-sans text-sm text-charcoal/60">
                  Sunflower, cottonseed, corn, soybean, and grapeseed — the most
                  common U.S. frying oils — all degrade rapidly.
                </p>
              </Card>
            </FadeInItem>
            <FadeInItem>
              <Card className="rounded-lg">
                <Badge variant="default">Fruit Oils Lead</Badge>
                <p className="mt-3 text-2xl font-bold">#1 and #2 are palm</p>
                <p className="mt-2 font-sans text-sm text-charcoal/60">
                  Palm oil comes from a fruit, not a seed. Its natural balance of
                  saturated and monounsaturated fats gives it exceptional
                  frying stability.
                </p>
              </Card>
            </FadeInItem>
          </FadeInStagger>
        </Container>
      </Section>

      {/* ════════════════════════════════════════════════════
          SECTION 3 — THE PUFA PATTERN
      ════════════════════════════════════════════════════ */}
      <Section>
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <Eyebrow>The PUFA Pattern</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Polyunsaturated fat is the enemy of fry life
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
                The correlation is stark. Oils with high polyunsaturated fatty
                acid (PUFA) content degrade faster because their double bonds are
                vulnerable to oxidative attack under heat. Linoleic acid — the
                dominant PUFA in most seed oils — oxidizes 10 to 40 times faster
                than oleic acid.
              </p>
              <Callout variant="info" className="mt-6">
                <p className="font-sans text-sm text-charcoal">
                  Every dot on this scatter plot represents one of the 21 oils.
                  The pattern is unmistakable: higher PUFA means shorter fry life.
                  The 15% PUFA line cleanly separates high-performers from the
                  rest.
                </p>
              </Callout>
              <p className="mt-4 font-sans text-xs text-charcoal/40">
                Choe, E. & Min, D.B. (2007). Chemistry of Deep-Fat Frying Oils.
                Journal of Food Science.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Card className="rounded-lg p-4 md:p-6">
                <PUFAScatterChart />
                <p className="mt-2 text-center font-sans text-xs text-charcoal/40">
                  Bubble size reflects Oxidative Stability Index (OSI, hours)
                </p>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ════════════════════════════════════════════════════
          SECTION 4 — SAME PLANT, DIFFERENT OIL
      ════════════════════════════════════════════════════ */}
      <Section className="bg-white">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SlideIn>
              <InlineImage
                src={IMAGES.scientificResearch}
                alt="Laboratory oil analysis"
                className="aspect-[4/3]"
              />
            </SlideIn>
            <FadeIn>
              <Eyebrow>Same Plant, Different Oil</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                The sunflower proof
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
                Nothing demonstrates the PUFA effect more clearly than comparing
                two sunflower oils. Conventional sunflower — 66% PUFA — lasts
                107 fry cycles. High-oleic sunflower — just 9% PUFA — lasts
                210 cycles. Same plant. Same species. Nearly double the
                fry life, achieved entirely by breeding for a different fatty
                acid profile.
              </p>
              <div className="mt-8">
                <Card className="rounded-lg p-4 md:p-6">
                  <SunflowerComparisonChart />
                  <div className="mt-4 grid grid-cols-2 gap-4 font-sans text-sm">
                    <div className="text-center">
                      <p className="font-semibold text-charcoal/40">Conv. Sunflower</p>
                      <p className="text-xs text-charcoal/40">66% PUFA · 20% MUFA · 6h OSI</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-olive">HO Sunflower</p>
                      <p className="text-xs text-charcoal/40">9% PUFA · 82% MUFA · 25h OSI</p>
                    </div>
                  </div>
                </Card>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ════════════════════════════════════════════════════
          SECTION 5 — THE ALDEHYDE PROBLEM
      ════════════════════════════════════════════════════ */}
      <Section>
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <Eyebrow>The Aldehyde Problem</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Degraded oil is not just wasteful — it is harmful
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
                When PUFA-rich oils break down under heat, they produce volatile
                aldehydes — reactive compounds linked to chronic inflammation,
                cardiovascular damage, and neurodegenerative disease. A 2021
                study by Grootveld found that reheated PUFA-rich oils generate
                aldehyde concentrations up to 20 times World Health Organization
                safety limits.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
                The oils that last longest also produce the fewest harmful
                byproducts. Frying performance and food safety are not competing
                priorities — they are the same priority.
              </p>
              <Callout variant="warning" className="mt-6">
                <p className="font-sans text-sm font-semibold text-charcoal">
                  Aldehydes from PUFA-rich oils reached 20x WHO recommended limits
                  in controlled frying studies.
                </p>
                <p className="mt-1 font-sans text-xs text-charcoal/50">
                  Grootveld et al. (2021). Acta Scientific Nutritional Health.
                </p>
              </Callout>
            </FadeIn>
            <SlideIn direction="right">
              <InlineImage
                src={IMAGES.laboratory}
                alt="Scientific laboratory testing oil samples"
                className="aspect-[4/3]"
              />
            </SlideIn>
          </div>
        </Container>
      </Section>

      {/* ════════════════════════════════════════════════════
          SECTION 6 — SMOKE POINT MYTH
      ════════════════════════════════════════════════════ */}
      <Section className="bg-white">
        <Container size="lg">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="text-center">
                <Eyebrow>Myth Busted</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Smoke point does not predict frying performance
                </h2>
              </div>
              <p className="mt-8 text-lg leading-relaxed text-charcoal/70">
                The most persistent myth in commercial frying is that smoke point
                determines how well an oil performs. It does not. Smoke point
                measures the temperature at which an oil begins to visibly smoke —
                a metric of initial tolerance, not ongoing stability.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
                Refined avocado oil has one of the highest smoke points of any
                cooking fat (around 270 &deg;C) yet ranks 14th in fry durability
                at 140 cycles. Coconut oil has a relatively modest smoke point
                (around 177 &deg;C) yet ranks 4th with 250 cycles. De Alzaa et al.
                (2018) demonstrated conclusively that smoke point is not a reliable
                indicator of an oil&apos;s performance or safety under frying
                conditions.
              </p>
              <Callout className="mt-8">
                <p className="font-sans text-sm text-charcoal">
                  Avocado oil: 270 &deg;C smoke point, 140 fry cycles.
                  Coconut oil: 177 &deg;C smoke point, 250 fry cycles.
                  Smoke point tells you when oil smokes — not when it degrades.
                </p>
                <p className="mt-1 font-sans text-xs text-charcoal/50">
                  De Alzaa, F., Guillaume, C., & Ravetti, L. (2018). Evaluation
                  of Chemical and Physical Changes in Different Commercial Oils
                  during Heating.
                </p>
              </Callout>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Palm as Fruit Oil highlight ── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <HeroImage src={IMAGES.palmFruit} alt="Fresh palm fruit on the tree" />
        <div className="relative z-10">
          <Container size="lg">
            <div className="max-w-2xl">
              <FadeIn>
                <Badge variant="amber" className="text-white">Fruit Oil</Badge>
                <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                  Palm oil is a fruit oil
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Unlike soybean, canola, sunflower, and other seed-extracted oils,
                  palm oil is pressed from the flesh of a fruit — the oil palm
                  fruit. This distinction matters: fruit oils naturally carry a
                  balanced fatty acid profile rich in palmitic and oleic acids, with
                  minimal polyunsaturated fat. That natural composition is why palm
                  olein ranks first and second on every frying performance metric.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-white/60">
                  The interspecific hybrid (OxG) variety further concentrates oleic
                  acid, pushing fry life to 355 cycles — nearly six times that of
                  conventional soybean oil.
                </p>
              </FadeIn>
            </div>
          </Container>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA SECTION
      ════════════════════════════════════════════════════ */}
      <Section>
        <Container size="lg">
          <FadeIn>
            <div className="text-center">
              <Eyebrow>Go Deeper</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Explore the full data
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal/60">
                The Oil Atlas provides complete profiles for every frying oil. The
                Cost Calculator lets you model your own cost-per-cycle numbers
                based on real purchase prices and consumption rates.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/atlas" size="lg">
                  Oil Atlas
                </Button>
                <Button href="/calculator" variant="outline" size="lg">
                  Cost Calculator
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              <InlineImage
                src={IMAGES.deepFryer}
                alt="Commercial deep fryer in operation"
                className="aspect-[16/10] rounded-lg"
              />
              <InlineImage
                src={IMAGES.frenchFries}
                alt="Golden french fries"
                className="aspect-[16/10] rounded-lg"
              />
            </div>
          </FadeIn>

          {/* ── Breadcrumb / back link ── */}
          <div className="mt-16 border-t border-charcoal/10 pt-8">
            <p className="font-sans text-sm text-charcoal/40">
              <Link href="/reports" className="transition-colors hover:text-amber">
                All Reports
              </Link>
              <span className="mx-2">/</span>
              Frying Oil Performance Rankings
            </p>
          </div>
        </Container>
      </Section>
    </main>
  )
}
