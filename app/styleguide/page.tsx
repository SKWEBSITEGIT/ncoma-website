import {
  Button,
  Container,
  Section,
  Card,
  Badge,
  Eyebrow,
  Callout,
  FootnoteRef,
  Footnotes,
} from '@/components/ui'

export const metadata = { title: 'Styleguide' }

export default function Styleguide() {
  return (
    <main>
      <Section>
        <Container>
          <Eyebrow>Design System</Eyebrow>
          <h1 className="mt-2 text-5xl font-bold">Styleguide</h1>
          <p className="mt-4 max-w-xl text-charcoal/60">
            Living reference for NCOMA brand components, colors, and typography.
          </p>
        </Container>
      </Section>

      {/* Colors */}
      <Section className="border-t border-charcoal/10">
        <Container>
          <h2 className="text-2xl font-bold">Colors</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {[
              { name: 'Amber', cls: 'bg-amber', hex: '#C8841A' },
              { name: 'Amber Light', cls: 'bg-amber-light', hex: '#D9A54B' },
              { name: 'Amber Dark', cls: 'bg-amber-dark', hex: '#A06A10' },
              { name: 'Charcoal', cls: 'bg-charcoal', hex: '#1F1F1F' },
              { name: 'Off-white', cls: 'bg-offwhite border border-charcoal/10', hex: '#FAF6F0' },
              { name: 'Olive', cls: 'bg-olive', hex: '#5C6A3E' },
              { name: 'Olive Light', cls: 'bg-olive-light', hex: '#7A8B56' },
            ].map((c) => (
              <div key={c.name}>
                <div className={`h-20 w-full ${c.cls}`} />
                <p className="mt-2 font-sans text-sm font-medium">{c.name}</p>
                <p className="font-sans text-xs text-charcoal/50">{c.hex}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-8 text-lg font-bold">Tier Colors</h3>
          <div className="mt-4 grid grid-cols-3 gap-4 sm:max-w-md">
            {[
              { name: 'Bronze', cls: 'bg-bronze', hex: '#A67C52' },
              { name: 'Silver', cls: 'bg-silver', hex: '#8A8D8F' },
              { name: 'Gold', cls: 'bg-gold', hex: '#C8841A' },
            ].map((c) => (
              <div key={c.name}>
                <div className={`h-20 w-full ${c.cls}`} />
                <p className="mt-2 font-sans text-sm font-medium">{c.name}</p>
                <p className="font-sans text-xs text-charcoal/50">{c.hex}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Typography */}
      <Section className="border-t border-charcoal/10">
        <Container>
          <h2 className="text-2xl font-bold">Typography</h2>
          <div className="mt-8 space-y-6">
            <div>
              <p className="font-sans text-xs uppercase tracking-wider text-charcoal/40">Source Serif 4 — Headlines</p>
              <h1 className="mt-2 text-6xl font-bold">The standard.</h1>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-wider text-charcoal/40">Source Serif 4 — Body</p>
              <p className="mt-2 max-w-lg text-lg">
                Most American kitchens have no standard for frying oil. NCOMA changes that.
              </p>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-wider text-charcoal/40">Inter — UI / Labels</p>
              <p className="mt-2 font-sans text-sm">
                Filtration frequency, TPM readings, cost per cycle, certification tier.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section className="border-t border-charcoal/10">
        <Container>
          <h2 className="text-2xl font-bold">Buttons</h2>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button>Get Certified</Button>
            <Button variant="secondary">Learn More</Button>
            <Button variant="outline">View Report</Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Container>
      </Section>

      {/* Badges */}
      <Section className="border-t border-charcoal/10">
        <Container>
          <h2 className="text-2xl font-bold">Badges</h2>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge>Default</Badge>
            <Badge variant="amber">Amber</Badge>
            <Badge variant="bronze">Bronze</Badge>
            <Badge variant="silver">Silver</Badge>
            <Badge variant="gold">Gold</Badge>
            <Badge variant="olive">Olive</Badge>
          </div>
        </Container>
      </Section>

      {/* Eyebrow */}
      <Section className="border-t border-charcoal/10">
        <Container>
          <h2 className="text-2xl font-bold">Eyebrow</h2>
          <div className="mt-8">
            <Eyebrow>Section Label</Eyebrow>
            <h3 className="mt-2 text-3xl font-bold">Headline below eyebrow</h3>
          </div>
        </Container>
      </Section>

      {/* Cards */}
      <Section className="border-t border-charcoal/10">
        <Container>
          <h2 className="text-2xl font-bold">Cards</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Card>
              <Badge variant="bronze">Bronze</Badge>
              <h3 className="mt-3 text-xl font-bold">Foundation</h3>
              <p className="mt-2 text-sm text-charcoal/60">
                Daily filtration, TPM testing, basic oil management protocols.
              </p>
            </Card>
            <Card>
              <Badge variant="silver">Silver</Badge>
              <h3 className="mt-3 text-xl font-bold">Managed</h3>
              <p className="mt-2 text-sm text-charcoal/60">
                Staff certified, oil log maintained, advanced filtration.
              </p>
            </Card>
            <Card>
              <Badge variant="gold">Gold</Badge>
              <h3 className="mt-3 text-xl font-bold">Exemplary</h3>
              <p className="mt-2 text-sm text-charcoal/60">
                Full compliance, data-driven decisions, consumer transparency.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Callouts */}
      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <h2 className="text-2xl font-bold">Callouts</h2>
          <div className="mt-8 space-y-4">
            <Callout>
              <p className="font-sans text-sm">
                <strong>NCOMA Standard:</strong> Oil must be discarded when TPM reaches 25%.
              </p>
            </Callout>
            <Callout variant="warning">
              <p className="font-sans text-sm">
                <strong>Critical:</strong> Frying fish in a shared oil load introduces highly unstable omega-3 PUFA.
              </p>
            </Callout>
            <Callout variant="info">
              <p className="font-sans text-sm">
                Daily filtration extends oil life by 40–80% compared to unfiltered operations.
              </p>
            </Callout>
          </div>
        </Container>
      </Section>

      {/* Footnotes */}
      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <h2 className="text-2xl font-bold">Footnotes</h2>
          <p className="mt-8">
            The PREDIMED trial demonstrated a 30% reduction in major cardiovascular events
            <FootnoteRef id={1} /> among participants following a Mediterranean diet supplemented
            with EVOO, compared to a low-fat control diet.
            <FootnoteRef id={2} />
          </p>
          <Footnotes
            notes={[
              'Estruch, R., et al. (2013). Primary prevention of cardiovascular disease with a Mediterranean diet. NEJM, 368(14), 1279–1290.',
              'Grootveld, M., et al. (2017). Potential adverse public health effects afforded by the ingestion of dietary lipid oxidation product toxins. Lipids in Health and Disease, 16(1), 214.',
            ]}
          />
        </Container>
      </Section>
    </main>
  )
}
