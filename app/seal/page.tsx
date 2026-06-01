import { Container, Section, Eyebrow, Button, Badge, Footnotes, FootnoteRef } from '@/components/ui'
import { HeroImage } from '@/components/HeroImage'
import { IMAGES } from '@/lib/images'
import { FadeIn } from '@/components/AnimatedSection'
import { TierCards } from '@/components/TierCards'
import { CTABanner } from '@/components/CTABanner'

export const metadata = {
  title: 'The WIYO! Seal',
  description: 'WIYO! stands for "What Is Your Oil?" — the NCOMA certification seal for restaurants that test, filter, and manage their frying oil to a published science-based standard.',
}

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
    a: 'All three tiers earn the WIYO! seal. Bronze covers the operational baseline — daily filtration, TPM testing, proper discard protocols. Silver adds certified staff (COT designation) and equipment verification. Gold adds full consumer transparency — oil type disclosed to diners, cost-per-cycle tracking, and advanced filtration.',
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
    a: 'Pricing is tailored to operation size and tier. Contact us at certification@whatisinyouroil.com for a quote.',
  },
  {
    q: 'As a diner, how do I verify a restaurant is certified?',
    a: 'Look for the WIYO! seal on the window, menu, or table tent. You can also search the certified operator directory at whatisinyouroil.com/find. Each certified kitchen has a verification code linked to its current certification status.',
  },
  {
    q: 'What happens if a certified kitchen fails re-inspection?',
    a: 'The kitchen enters a 30-day corrective window. If the issues are resolved and a re-inspection passes, certification continues. If not, the WIYO! seal must be removed until the kitchen re-qualifies.',
  },
]

export default function Seal() {
  return (
    <main>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <HeroImage src={IMAGES.certificate} alt="Certification standard" className="absolute inset-0" overlay="dark" />
        <Container size="md" className="relative z-10 pb-16 pt-32 md:pb-20">
          <p className="animate-hero-1 font-sans text-xs font-semibold uppercase tracking-widest text-amber">The Seal</p>
          <h1 className="animate-hero-2 mt-2 max-w-3xl text-4xl font-bold text-white md:text-5xl">The WIYO! Seal — &ldquo;What Is Your Oil?&rdquo;</h1>
          <p className="animate-hero-3 mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Over one million US foodservice outlets.<FootnoteRef id={1} /> Not
            one required by federal law to test its frying oil. The WIYO! seal
            fills that gap.
          </p>
        </Container>
      </section>

      {/* Certified Oil Manager */}
      <section className="border-t border-charcoal/10 bg-offwhite py-10 md:py-14">
        <Container size="md">
          <FadeIn>
            <div className="text-center">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-amber">Certified Oil Manager</p>
              <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-charcoal/70">
                This designation certifies mastery of the science, management,
                and testing practices that define professional cooking oil
                stewardship.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Three Tiers */}
      <Section className="border-t border-charcoal/10">
        <Container>
          <FadeIn>
            <h2 className="text-center text-3xl font-bold">Three certification tiers</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-charcoal/60">
              Every tier earns the WIYO! seal. The tier tells diners how deep the commitment goes.
              Click a card to see the full details.
            </p>
          </FadeIn>
          <div className="mt-12">
            <TierCards />
          </div>
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
          <p className="mt-4 text-charcoal/70">
            Certification pricing varies by operation size, number of fryers, and
            tier level. Individual COT exams, single-kitchen COMK inspections, and
            multi-unit COMP programs are each priced separately.
          </p>
          <div className="mt-6">
            <Button href="/contact">Request a Quote</Button>
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
                aria-label="WIYO verification code"
                disabled
                className="h-12 flex-1 border border-charcoal/20 bg-white px-4 font-sans text-sm opacity-50 cursor-not-allowed"
              />
              <Button disabled className="opacity-50 cursor-not-allowed">Verify</Button>
            </div>
            <p className="mt-3 font-sans text-xs text-charcoal/40">
              Verification database launching with certified operators.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner
        variant="dark"
        heading="Ready to earn the WIYO! seal?"
        subheading="Whether you're an operator looking to certify or a diner who wants to know more — we're here to help."
        primaryLabel="Start Certification →"
        primaryHref="/operators#get-certified"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />

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
