import { Container, Section, Eyebrow, Button, Card, Badge, Callout } from '@/components/ui'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              What is your oil<span className="text-amber">?</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-charcoal/70 md:text-xl">
              There is no federal standard for when to change frying oil in an
              American restaurant. No threshold. No certification. No number on
              the wall. NCOMA built one.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/operators#get-certified" size="lg">
                Get Certified
              </Button>
              <Button href="/seal" variant="outline" size="lg">
                What the Seal Means
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Seal — Three Tiers */}
      <Section className="border-t border-charcoal/10 bg-white" id="seal">
        <Container>
          <Eyebrow>The WIYO! Seal</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Three tiers. One standard.
          </h2>
          <p className="mt-4 max-w-2xl text-charcoal/60">
            The WIYO! seal tells diners their restaurant manages its frying oil
            to a real, measurable standard — not a gut feeling, not a calendar
            reminder, but tested and documented quality.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <Badge variant="bronze">Bronze — Foundation</Badge>
              <h3 className="mt-4 text-xl font-bold">Managed Oil</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                Daily filtration during every active service. TPM testing at
                minimum daily. Oil discarded at 25% TPM or sensory triggers.
                Fryers covered when not in use. Salt at the pass, never above
                the fryer. Oil Log maintained with every service entry.
              </p>
            </Card>
            <Card>
              <Badge variant="silver">Silver — Certified Staff</Badge>
              <h3 className="mt-4 text-xl font-bold">Trained Kitchen</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                Everything in Bronze, plus: at least one staff member holds
                NCOMA Certified Oil Technician (COT) status. Staff can name the
                three degradation pathways, explain TPM, and demonstrate correct
                meter operation. Thermostat verified within ±5°C weekly.
                Dedicated fish fryer or documented oil-change protocol.
              </p>
            </Card>
            <Card>
              <Badge variant="gold">Gold — Exemplary</Badge>
              <h3 className="mt-4 text-xl font-bold">Full Transparency</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                Everything in Silver, plus: oil type disclosed to diners. 30+
                days of Oil Log history available for review. Advanced filtration
                (0.5-micron or equivalent). Cost-per-cycle tracking. Consumer-facing
                WIYO! seal displayed. Annual inspection with 85%+ pass rate, no
                zero scores in oil quality.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Counter Band */}
      <Section className="border-y border-charcoal/10 bg-charcoal py-12 text-white md:py-16">
        <Container>
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '1M+',
                label: 'Restaurant and foodservice outlets in the US',
                source: 'National Restaurant Association, 2025',
              },
              {
                number: '0',
                label: 'Federal TPM discard thresholds for frying oil',
                source: 'FDA / USDA regulatory review',
              },
              {
                number: '25%',
                label: 'TPM — the NCOMA discard standard, aligned with EU law',
                source: 'NCOMA Standard; cf. Germany 27%, Belgium/Spain/France 25%',
              },
              {
                number: '40–80%',
                label: 'Oil life extension from daily filtration alone',
                source: 'Moreira et al., Deep-Fat Frying: Fundamentals and Applications',
              },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-amber md:text-5xl">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                <p className="mt-1 font-sans text-xs text-white/30">
                  {stat.source}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why It Matters — 4 Editorial Blocks */}
      <Section>
        <Container>
          <Eyebrow>Why It Matters</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Four reasons this isn&apos;t optional.
          </h2>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {/* Guests */}
            <div>
              <h3 className="text-xl font-bold">For the people eating the food</h3>
              <p className="mt-3 text-charcoal/70">
                Degraded frying oil produces volatile aldehydes — compounds like
                4-hydroxynonenal and malondialdehyde that are implicated in
                oxidative stress research. Grootveld et al. (2017) demonstrated
                that PUFA-rich oils at frying temperatures generate aldehyde
                levels that may exceed WHO tolerable daily intake thresholds.
                Diners have no way to know whether the oil their food was cooked
                in was tested today or last tested never.
              </p>
              <p className="mt-2 font-sans text-xs text-charcoal/40">
                Grootveld et al. (2017), Lipids in Health and Disease, 16(1), 214.
              </p>
            </div>

            {/* Operators */}
            <div>
              <h3 className="text-xl font-bold">For the operators paying for oil</h3>
              <p className="mt-3 text-charcoal/70">
                Most restaurants change oil on a fixed schedule — every two days,
                every three, whatever someone decided years ago. That means
                discarding oil that still has usable cycles, or worse, serving
                food in oil past the safe threshold. The NCOMA guide documents
                that managed operators extend oil life by 20–40% without
                compromising food quality. On a $1,200/ton oil at 50+ gallons a
                week, the math is not subtle.
              </p>
              <p className="mt-2 font-sans text-xs text-charcoal/40">
                NCOMA Certified Cooking Oil Management Guide, 2025.
              </p>
            </div>

            {/* Planet */}
            <div>
              <h3 className="text-xl font-bold">For the planet absorbing the waste</h3>
              <p className="mt-3 text-charcoal/70">
                The US foodservice industry generates billions of pounds of used
                cooking oil annually. Improperly discarded oil contaminates
                waterways and clogs municipal sewer systems. Better oil
                management means less oil consumed per cover served — fewer
                deliveries, less waste hauled, lower GHG per meal. High oleic
                palm oil from Colombian OxG hybrids delivers 3.6 tonnes per
                hectare per year — six times the land efficiency of sunflower at
                0.6 t/ha/yr.
              </p>
              <p className="mt-2 font-sans text-xs text-charcoal/40">
                FAO Oilcrops Indices, 2026; Alcock et al. (2022), Science of the Total Environment.
              </p>
            </div>

            {/* Craft */}
            <div>
              <h3 className="text-xl font-bold">For the craft of cooking itself</h3>
              <p className="mt-3 text-charcoal/70">
                Oil is an ingredient. A fryer running degraded oil produces food
                with softer texture, greasier mouthfeel, and off-flavors from
                hexanal and short-chain aldehydes. Saguy &amp; Dana (2003) showed
                degraded oil increases fat absorption by 20–40%. A chef who
                sources high-quality proteins and produce but ignores the medium
                those ingredients cook in is undermining their own work. The
                fryer deserves the same attention as the sauté station.
              </p>
              <p className="mt-2 font-sans text-xs text-charcoal/40">
                Saguy &amp; Dana (2003), Journal of Food Engineering, 56(2–3), 143–152.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Voices */}
      <Section className="border-t border-charcoal/10 bg-white">
        <Container>
          <Eyebrow>From the Kitchen</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold">
            What operators are saying
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  '[NEEDS: real chef/operator quote about oil management or certification experience]',
                name: '[NEEDS: real name]',
                title: '[NEEDS: real title and restaurant]',
              },
              {
                quote:
                  '[NEEDS: real chef/operator quote about the economics of oil management]',
                name: '[NEEDS: real name]',
                title: '[NEEDS: real title and restaurant]',
              },
              {
                quote:
                  '[NEEDS: real chef/operator quote about consumer transparency]',
                name: '[NEEDS: real name]',
                title: '[NEEDS: real title and restaurant]',
              },
            ].map((voice, i) => (
              <Card key={i} className="flex flex-col justify-between">
                <blockquote className="text-lg italic leading-relaxed text-charcoal/70">
                  &ldquo;{voice.quote}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-charcoal/10 pt-4">
                  <p className="font-sans text-sm font-semibold">{voice.name}</p>
                  <p className="font-sans text-xs text-charcoal/50">
                    {voice.title}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Report */}
      <Section className="border-t border-charcoal/10">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <Badge variant="amber">Featured Report</Badge>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                The 2026 State of the Fryer
              </h2>
              <p className="mt-4 text-charcoal/70">
                The first comprehensive look at how American restaurants
                actually manage their frying oil — who tests, who filters, who
                tracks cost per cycle, and who is still guessing. Original
                research from NCOMA with data from operators across every
                segment of US foodservice.
              </p>
              <div className="mt-6">
                <Button href="/reports/state-of-the-fryer-2026">
                  Read the Report
                </Button>
              </div>
            </div>
            <div className="placeholder-image aspect-[4/3]">
              840 × 630 — Report cover image
            </div>
          </div>
        </Container>
      </Section>

      {/* Closing CTA */}
      <Section className="border-t border-charcoal/10 bg-charcoal text-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              The oil in your fryer is the most used, least managed ingredient
              in your kitchen.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/60">
              NCOMA certification gives your kitchen a standard, your staff a
              credential, and your guests a reason to trust the food.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/operators#get-certified" size="lg">
                Get Certified
              </Button>
              <Button
                href="/seal"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:border-white/40"
              >
                Learn About the Seal
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
