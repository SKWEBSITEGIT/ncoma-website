import { Container, Section, Eyebrow, Button, Card, Badge, Callout, Footnotes, FootnoteRef } from '@/components/ui'
import { HeroImage } from '@/components/HeroImage'
import { IMAGES } from '@/lib/images'
import { FadeIn } from '@/components/AnimatedSection'

export const metadata = { title: 'The WIYO! Seal' }

const faqs = [
  {
    q: 'What does the WIYO! seal mean?',
    a: 'It means the kitchen has been inspected and certified to manage its frying oil to the NCOMA standard — daily filtration, TPM testing, 25% discard threshold, trained staff, and documented record-keeping. It is not a one-time badge; it requires ongoing compliance and annual renewal.',
  },
  {
    q: 'What is TPM and why 25%?',
    a: 'Total Polar Materials is the percentage of degradation products in frying oil. It captures all three degradation pathways — hydrolysis, oxidation, and polymerization — in a single number. Germany mandates discard at 27%, Belgium/Spain/France at 25%. The US has no federal threshold. NCOMA adopts 25%, aligned with the more protective international standards.',
  },
  {
    q: 'How often is oil tested?',
    a: 'Minimum daily in all operations with active fryers. Every service period is recommended during heavy frying (4+ continuous hours). All readings are recorded in the NCOMA Oil Log.',
  },
  {
    q: 'What does the audit check?',
    a: 'Six sections: staff knowledge (can they explain degradation pathways, TPM, and meter operation?), equipment inspection (thermostat accuracy, filtration gear, covers), oil quality at time of inspection (TPM reading, color, foam, smoke, viscosity), operational protocols (salt station placement, oil storage, fish isolation), record-keeping (Oil Log current with 30+ days of history), and filtration compliance.',
  },
  {
    q: 'What\'s the difference between Bronze, Silver, and Gold?',
    a: 'Bronze is the operational baseline — daily filtration, TPM testing, proper discard protocols. Silver adds certified staff (COT designation) and equipment verification. Gold adds consumer transparency — oil type disclosed, WIYO! seal displayed, cost-per-cycle tracking, and advanced filtration.',
  },
  {
    q: 'Do I need special equipment?',
    a: 'You need a TPM meter (testo 270 or equivalent, ~$300–600), filtration equipment (portable pump system at minimum), and stainless steel utensils for oil contact. Gold tier recommends 0.5-micron filtration. No proprietary equipment is required.',
  },
  {
    q: 'How long does certification take?',
    a: 'Individual COT certification requires passing the knowledge exam. Kitchen COMK certification requires implementing all operational protocols and passing an on-site inspection. Most kitchens that already filter daily can reach Bronze within 2–4 weeks of protocol implementation.',
  },
  {
    q: 'What does it cost?',
    a: '[NEEDS: confirmed pricing — placeholder: Individual COT exam: $XXX. Kitchen COMK inspection: $XXX–$XXX depending on size. Annual renewal: $XXX. Multi-unit COMP programs priced per location.]',
  },
  {
    q: 'As a diner, how do I verify a restaurant is certified?',
    a: 'Look for the WIYO! seal on the window, menu, or table tent. You can also search the certified operator directory at ncoma.org/find. Each certified kitchen has a verification code linked to its current certification status.',
  },
  {
    q: 'What happens if a certified kitchen fails re-inspection?',
    a: 'The kitchen enters a 30-day corrective window. If the issues are resolved and a re-inspection passes, certification continues. If not, the WIYO! seal must be removed until the kitchen re-qualifies.',
  },
]

export default function Seal() {
  return (
    <main>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <HeroImage src={IMAGES.certificate} alt="Certification standard" className="absolute inset-0" />
        <Container size="md" className="relative z-10 py-20 md:py-28">
          <p className="animate-hero-1 font-sans text-xs font-semibold uppercase tracking-widest text-white/60">The Seal</p>
          <h1 className="animate-hero-2 mt-2 text-4xl font-bold text-white md:text-5xl">What the WIYO! seal means — and why it exists.</h1>
          <p className="animate-hero-3 mt-6 max-w-2xl text-lg text-white/70">
            There are over one million foodservice outlets in the United States.
            <FootnoteRef id={1} /> Not one of them is required by federal law to
            test its frying oil. No mandated TPM threshold. No certification. No
            public disclosure of oil type or condition. The WIYO! seal fills
            that gap with a voluntary, industry-built standard aligned with
            international best practice.
          </p>
        </Container>
      </section>

      {/* Three Tiers */}
      <Section className="border-t border-charcoal/10">
        <Container>
          <FadeIn>
          <h2 className="text-3xl font-bold">Three certification tiers</h2>
          </FadeIn>

          {/* Bronze */}
          <FadeIn>
          <div className="mt-12 border-l-4 border-l-bronze pl-8">
            <Badge variant="bronze">Bronze — Foundation</Badge>
            <h3 className="mt-3 text-2xl font-bold">Managed Oil</h3>
            <p className="mt-3 text-charcoal/70">
              The operational baseline. A Bronze kitchen has implemented the
              core NCOMA protocols:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-charcoal/70">
              <li>Daily filtration during every active service period, documented in the Oil Log</li>
              <li>TPM testing minimum daily; every service period recommended during heavy frying</li>
              <li>Discard at 25% TPM or sensory triggers (persistent foam, continuous smoke at operating temp, off-flavors), whichever comes first</li>
              <li>Fryers covered with fitted lids whenever not in active use</li>
              <li>Salt at the pass, never above or near the fryer</li>
              <li>Oil storage sealed, dark, cool; FIFO rotation; no clear containers near light</li>
              <li>Post-boil-out sacrificial oil rinse before new oil load</li>
              <li>Oil Log maintained with per-session entries: date, fryer ID, oil type, TPM readings, filtration events, top-off volumes, discard decisions, staff initials</li>
            </ul>
          </div>
          </FadeIn>

          {/* Silver */}
          <FadeIn>
          <div className="mt-12 border-l-4 border-l-silver pl-8">
            <Badge variant="silver">Silver — Certified Staff</Badge>
            <h3 className="mt-3 text-2xl font-bold">Trained Kitchen</h3>
            <p className="mt-3 text-charcoal/70">
              Everything in Bronze, plus verified knowledge and equipment standards:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-charcoal/70">
              <li>At least one staff member holds NCOMA Certified Oil Technician (COT) status</li>
              <li>Staff can explain the three degradation pathways (hydrolysis, oxidation, polymerization) without reference material</li>
              <li>Staff can define TPM and demonstrate correct meter operation</li>
              <li>Staff know why fish and seafood require a dedicated fryer</li>
              <li>Thermostat accuracy verified within ±5°C using independent probe, weekly; calibration records in Oil Log</li>
              <li>Fryer vessel is stainless steel or documented equivalent — no copper or brass utensils in oil contact</li>
              <li>Dedicated fish/allergen fryer or documented full oil-change protocol</li>
              <li>Filter media inventory adequate (minimum one-week supply)</li>
            </ul>
          </div>
          </FadeIn>

          {/* Gold */}
          <FadeIn>
          <div className="mt-12 border-l-4 border-l-gold pl-8">
            <Badge variant="gold">Gold — Exemplary</Badge>
            <h3 className="mt-3 text-2xl font-bold">Full Transparency</h3>
            <p className="mt-3 text-charcoal/70">
              Everything in Silver, plus consumer transparency and data maturity:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-charcoal/70">
              <li>Oil type disclosed to diners (menu, table tent, or signage)</li>
              <li>Consumer-facing WIYO! seal displayed (window, menu, or digital)</li>
              <li>30+ days of Oil Log history available for review at time of inspection</li>
              <li>Advanced filtration — 0.5-micron closed-loop (Zeco or equivalent) or documented equivalent performance</li>
              <li>Cost-per-cycle tracking: oil cost, cycle count, and savings documented</li>
              <li>Annual inspection pass rate of 85%+ with no zero scores in Section C (Oil Quality)</li>
              <li>UCO disposal records maintained (hauler receipts or disposal log)</li>
            </ul>
          </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Audit Methodology */}
      <Section className="border-t border-charcoal/10 bg-white">
        <Container size="md">
          <FadeIn>
          <h2 className="text-3xl font-bold">How the audit works</h2>
          </FadeIn>
          <p className="mt-4 text-charcoal/70">
            NCOMA inspections evaluate six sections. Each item is pass/fail.
            Overall pass requires 85% with no zero scores in Section C (oil
            quality at time of inspection).
          </p>
          <div className="mt-8 space-y-6">
            {[
              { label: 'A', title: 'Knowledge Assessment', desc: 'Staff interviewed on degradation pathways, TPM, discard threshold, meter operation, fish isolation, salt protocols, filtration procedure.' },
              { label: 'B', title: 'Equipment Inspection', desc: 'Thermostat accuracy, vessel material, utensil standards, filtration equipment condition, TPM meter calibration, fryer covers.' },
              { label: 'C', title: 'Oil Quality at Inspection', desc: 'Live TPM reading, color assessment, foam check, smoke check, viscosity drip test. This section cannot have zero scores.' },
              { label: 'D', title: 'Operational Protocols', desc: 'Salt station placement, oil storage conditions, FIFO rotation, post-boil-out protocol, fish/allergen isolation.' },
              { label: 'E', title: 'Record-Keeping', desc: 'Oil Log currency, TPM readings logged, filtration events documented, discard decisions recorded, 30+ days history (Gold).' },
              { label: 'F', title: 'Filtration Compliance', desc: 'Daily filtration documented, filter media change records, no visible carbon buildup on heating elements, equipment clean and functional.' },
            ].map((section) => (
              <div key={section.label} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-amber font-sans text-sm font-bold text-white">
                  {section.label}
                </div>
                <div>
                  <p className="font-sans font-semibold">{section.title}</p>
                  <p className="mt-1 text-sm text-charcoal/60">{section.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing */}
      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <h2 className="text-3xl font-bold">Pricing</h2>
          <Callout className="mt-6">
            <p className="font-sans text-sm">
              [NEEDS: confirmed pricing from Pablo. Placeholder ranges below.]
            </p>
          </Callout>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Card>
              <p className="font-sans text-sm font-semibold text-charcoal/50">Individual</p>
              <p className="mt-2 text-3xl font-bold">$XXX</p>
              <p className="mt-1 font-sans text-sm text-charcoal/60">COT exam fee</p>
            </Card>
            <Card>
              <p className="font-sans text-sm font-semibold text-charcoal/50">Single Kitchen</p>
              <p className="mt-2 text-3xl font-bold">$XXX–XXX</p>
              <p className="mt-1 font-sans text-sm text-charcoal/60">COMK inspection + certification</p>
            </Card>
            <Card>
              <p className="font-sans text-sm font-semibold text-charcoal/50">Multi-Unit</p>
              <p className="mt-2 text-3xl font-bold">Custom</p>
              <p className="mt-1 font-sans text-sm text-charcoal/60">COMP program, priced per location</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section className="border-t border-charcoal/10 bg-white">
        <Container size="md">
          <h2 className="text-3xl font-bold">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-charcoal/10">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <h3 className="font-sans text-base font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Verification Widget */}
      <Section className="border-t border-charcoal/10">
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Verify a certification</h2>
            <p className="mt-2 text-charcoal/60">
              Enter a restaurant&apos;s WIYO! verification code to check current status.
            </p>
            <div className="mt-6 flex gap-2">
              <input
                type="text"
                placeholder="e.g. WIYO-2026-00142"
                className="h-12 flex-1 border border-charcoal/20 bg-white px-4 font-sans text-sm focus:border-amber focus:outline-none"
              />
              <Button>Verify</Button>
            </div>
            <p className="mt-3 font-sans text-xs text-charcoal/40">
              Verification checks against the NCOMA certification database. Results show tier, certification date, and last inspection.
            </p>
          </div>
        </Container>
      </Section>

      {/* Footnotes */}
      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <Footnotes
            notes={[
              'National Restaurant Association, 2025 Industry Statistics. The US restaurant industry comprises more than 1 million restaurant and foodservice outlets.',
            ]}
          />
        </Container>
      </Section>
    </main>
  )
}
