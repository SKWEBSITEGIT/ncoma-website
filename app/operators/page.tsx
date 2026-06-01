import { Container, Section, Eyebrow, Button, Badge, Footnotes, FootnoteRef } from '@/components/ui'
import { HeroImage, InlineImage } from '@/components/HeroImage'
import { IMAGES } from '@/lib/images'
import { FadeIn } from '@/components/AnimatedSection'
import { CTABanner } from '@/components/CTABanner'

export const metadata = { title: 'For Operators' }

export default function Operators() {
  return (
    <main>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <HeroImage src={IMAGES.kitchenLine} alt="Commercial kitchen line" className="absolute inset-0" overlay="dark" />
        <Container size="md" className="relative z-10 pb-16 pt-32 md:pb-20">
          <p className="animate-hero-1 font-sans text-xs font-semibold uppercase tracking-widest text-amber">For Operators</p>
          <h1 className="animate-hero-2 mt-2 text-4xl font-bold text-white md:text-5xl">Stop guessing. Start managing.</h1>
          <p className="animate-hero-3 mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Most restaurants change oil on a fixed schedule — wasting oil with
            cycles left, or serving food in oil past the threshold.
            NCOMA-certified operators know the difference.
          </p>
        </Container>
      </section>

      {/* Tagline */}
      <section className="border-t border-charcoal/10 bg-offwhite py-10 md:py-14">
        <Container>
          <p className="text-center text-2xl font-bold text-charcoal md:text-3xl">
            Great frying starts <span className="text-amber">before the food hits the oil.</span>
          </p>
        </Container>
      </section>

      {/* The Economics */}
      <Section className="border-t border-charcoal/10">
        <Container>
          <FadeIn>
          <h2 className="text-3xl font-bold">The economics of managed oil</h2>
          </FadeIn>
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

          <InlineImage src={IMAGES.deepFryer} alt="Commercial deep fryer in operation" className="mt-12 aspect-[21/9]" />
        </Container>
      </Section>

      {/* 4-Step Process */}
      <Section className="border-t border-charcoal/10 bg-white" id="get-certified">
        <Container size="md">
          <FadeIn>
          <h2 className="text-3xl font-bold">Four steps to certification</h2>
          </FadeIn>
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
            <Button href="/contact" size="lg">Start Your Application</Button>
          </div>
        </Container>
      </Section>

      {/* What Auditors Check */}
      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <FadeIn>
          <h2 className="text-3xl font-bold">What auditors check</h2>
          </FadeIn>
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
          <p className="mt-4 text-charcoal/70">
            Certification pricing varies by operation size and tier. Each tier
            builds on the one below it:
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <Badge variant="bronze">Bronze</Badge>
              <p className="text-sm text-charcoal/60">On-site inspection, WIYO! Bronze seal, Oil Log templates, annual renewal.</p>
            </div>
            <div className="flex items-start gap-4">
              <Badge variant="silver">Silver</Badge>
              <p className="text-sm text-charcoal/60">Everything in Bronze, plus COT exam for one staff member, equipment verification.</p>
            </div>
            <div className="flex items-start gap-4">
              <Badge variant="gold">Gold</Badge>
              <p className="text-sm text-charcoal/60">Everything in Silver, plus consumer-facing WIYO! seal kit, cost-per-cycle analytics, priority directory listing.</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href="/contact">Request a Quote</Button>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <CTABanner
        variant="amber"
        heading="Don't wait for regulation. Set the standard now."
        subheading="NCOMA certification saves you money on oil, improves food quality, and gives your customers proof you care."
        primaryLabel="Start Your Application →"
        primaryHref="/contact"
        secondaryLabel="Calculate Your Savings"
        secondaryHref="/tools/cost-calculator"
      />

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
