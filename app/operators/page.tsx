import { Container, Section, Eyebrow, Button, Card, Badge, Callout, Footnotes, FootnoteRef } from '@/components/ui'

export const metadata = { title: 'For Operators' }

export default function Operators() {
  return (
    <main>
      <Section className="pt-20 md:pt-28">
        <Container size="md">
          <Eyebrow>For Operators</Eyebrow>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Stop guessing. Start managing.
          </h1>
          <p className="mt-6 text-lg text-charcoal/70">
            Most restaurants change their frying oil on a schedule — every two
            days, every three days, whatever someone decided years ago. That
            means discarding oil that still has cycles left, or worse, serving
            food in oil that&apos;s already past the safe threshold. NCOMA-certified
            operators know the difference.
          </p>
        </Container>
      </Section>

      {/* The Economics */}
      <Section className="border-t border-charcoal/10">
        <Container>
          <h2 className="text-3xl font-bold">The economics of managed oil</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold">Oil life extension</h3>
              <p className="mt-3 text-charcoal/70">
                NCOMA-certified operators extend oil life by 20–40% without
                compromising food quality.<FootnoteRef id={1} /> Daily filtration
                alone extends oil life by 40–80%.<FootnoteRef id={2} /> On a
                typical oil cost of $1,000–$1,500 per ton and consumption of
                50–200+ gallons per week in an active operation, the savings are
                measured in thousands per month.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Cost per cycle, not cost per gallon</h3>
              <p className="mt-3 text-charcoal/70">
                A cheap oil that lasts 70 cycles costs more per productive fry
                cycle than a premium oil lasting 350 cycles. Example: HO Palm
                Oil at $1,050/ton delivers 355 cycles — $0.068 per cycle.
                Conventional sunflower at $1,262/ton delivers 107 cycles —
                $0.264 per cycle. The &ldquo;cheaper&rdquo; oil costs 3.9× more per
                cycle.<FootnoteRef id={3} />
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Food quality improvement</h3>
              <p className="mt-3 text-charcoal/70">
                Degraded oil increases fat absorption by 20–40%, producing
                greasier food with off-flavors from hexanal and short-chain
                aldehydes.<FootnoteRef id={4} /> Managed oil means crispier
                texture, cleaner flavor, and less oil absorbed per portion —
                better food and lower oil consumption per cover.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Filtration ROI</h3>
              <p className="mt-3 text-charcoal/70">
                Advanced filtration systems like the Zeco (0.5-micron
                closed-loop) reduce oil consumption by 30–50% across diverse
                operation types. At typical volumes, monthly savings exceed
                twice the cost of filtration services — net-positive from the
                first month.<FootnoteRef id={5} />
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4-Step Process */}
      <Section className="border-t border-charcoal/10 bg-white" id="get-certified">
        <Container size="md">
          <h2 className="text-3xl font-bold">Four steps to certification</h2>
          <div className="mt-8 space-y-8">
            {[
              {
                step: '01',
                title: 'Apply',
                desc: 'Submit your kitchen profile — fryer count, oil type, menu category, current management practices. No commitment, no fee at this stage.',
              },
              {
                step: '02',
                title: 'Audit',
                desc: 'An NCOMA inspector evaluates six sections: staff knowledge, equipment, oil quality (live TPM reading), operational protocols, record-keeping, and filtration compliance. 85% pass rate required, no zeros in oil quality.',
              },
              {
                step: '03',
                title: 'Certify',
                desc: 'Pass the inspection and receive your WIYO! seal — Bronze, Silver, or Gold based on your level of compliance. Display it. Tell your guests.',
              },
              {
                step: '04',
                title: 'Renew',
                desc: 'Kitchen certification requires annual re-inspection. Individual COT certification is valid for 2 years. Keep your Oil Log current — it\'s your proof of ongoing compliance.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <p className="text-4xl font-bold text-amber/30">{item.step}</p>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-charcoal/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button size="lg">Start Your Application</Button>
          </div>
        </Container>
      </Section>

      {/* What Auditors Check */}
      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <h2 className="text-3xl font-bold">What auditors check</h2>
          <p className="mt-4 text-charcoal/70">
            A preview of the NCOMA kitchen inspection checklist. No surprises —
            every item is published in the Certified Cooking Oil Management Guide.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Staff can name the three oil degradation pathways',
              'Staff can explain TPM without reference material',
              'Staff know the 25% TPM discard threshold',
              'Staff can demonstrate correct TPM meter operation',
              'Thermostat verified accurate within ±5°C',
              'No copper or brass utensils in oil contact',
              'Filtration equipment present and working',
              'TPM meter calibrated per manufacturer schedule',
              'Oil color within acceptable range for oil type',
              'No persistent foam at operating temperature',
              'Salt station at the pass, not near the fryer',
              'Oil storage sealed, dark, away from heat',
              'NCOMA Oil Log current (within last service)',
              'Fish/allergen fryer dedicated or documented protocol',
              'Daily filtration documented in log',
              'No visible carbon buildup on heating elements',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 h-4 w-4 shrink-0 border border-charcoal/20" />
                <p className="font-sans text-sm text-charcoal/70">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing */}
      <Section className="border-t border-charcoal/10 bg-white">
        <Container>
          <h2 className="text-3xl font-bold">Pricing</h2>
          <Callout className="mt-6">
            <p className="font-sans text-sm">
              [NEEDS: confirmed pricing. Placeholder ranges shown.]
            </p>
          </Callout>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Card className="border-t-4 border-t-bronze">
              <Badge variant="bronze">Bronze</Badge>
              <p className="mt-4 text-3xl font-bold">$XXX</p>
              <p className="font-sans text-sm text-charcoal/50">per kitchen / year</p>
              <ul className="mt-4 space-y-2 font-sans text-sm text-charcoal/60">
                <li>On-site inspection</li>
                <li>WIYO! Bronze seal</li>
                <li>Oil Log templates</li>
                <li>Annual renewal</li>
              </ul>
            </Card>
            <Card className="border-t-4 border-t-silver">
              <Badge variant="silver">Silver</Badge>
              <p className="mt-4 text-3xl font-bold">$XXX</p>
              <p className="font-sans text-sm text-charcoal/50">per kitchen / year</p>
              <ul className="mt-4 space-y-2 font-sans text-sm text-charcoal/60">
                <li>Everything in Bronze</li>
                <li>COT exam for one staff member</li>
                <li>WIYO! Silver seal</li>
                <li>Equipment verification</li>
              </ul>
            </Card>
            <Card className="border-t-4 border-t-gold">
              <Badge variant="gold">Gold</Badge>
              <p className="mt-4 text-3xl font-bold">$XXX</p>
              <p className="font-sans text-sm text-charcoal/50">per kitchen / year</p>
              <ul className="mt-4 space-y-2 font-sans text-sm text-charcoal/60">
                <li>Everything in Silver</li>
                <li>Consumer-facing WIYO! seal kit</li>
                <li>Cost-per-cycle analytics</li>
                <li>Priority listing in directory</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <Footnotes
            notes={[
              'NCOMA Certified Cooking Oil Management Guide, 2025. Section 5: Operator ROI.',
              'Moreira, R. G., et al. Deep-Fat Frying: Fundamentals and Applications. Aspen Publishers.',
              'NCOMA Guide, Part 8, Section 8.2. Cost per fry cycle calculation using Fedepalma/UCaldas (2025) frying life data.',
              'Saguy, I. S., & Dana, D. (2003). Minimizing oil uptake during deep-fat frying. Journal of Food Engineering, 56(2–3), 143–152.',
              'Zeco Oil Filtration Systems. Manufacturer data and customer testimonials.',
            ]}
          />
        </Container>
      </Section>
    </main>
  )
}
