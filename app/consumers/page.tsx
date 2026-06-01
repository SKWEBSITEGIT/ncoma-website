import { Container, Section, Eyebrow, Button, Callout, Footnotes, FootnoteRef } from '@/components/ui'
import { HeroImage, InlineImage } from '@/components/HeroImage'
import { IMAGES } from '@/lib/images'
import { FadeIn } from '@/components/AnimatedSection'
import { CTABanner } from '@/components/CTABanner'

export const metadata = {
  title: 'For Consumers',
  description: 'You check sourcing and read labels — but nobody asks about the frying oil. Learn what degraded oil does to your food and how the WIYO! seal protects you.',
}

export default function Consumers() {
  return (
    <main>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden">
        <HeroImage src={IMAGES.restaurantDining} alt="Restaurant dining experience" className="absolute inset-0" overlay="dark" />
        <Container size="md" className="relative z-10 pb-16 pt-32 md:pb-20">
          <p className="animate-hero-1 font-sans text-xs font-semibold uppercase tracking-widest text-amber">For Consumers</p>
          <h1 className="animate-hero-2 mt-2 max-w-2xl text-4xl font-bold text-white md:text-5xl">What you fry in is what you serve.</h1>
          <p className="animate-hero-3 mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            You check sourcing. You read labels. You ask if the chicken is
            antibiotic-free. But nobody asks about the oil it&apos;s fried
            in — and right now, there&apos;s no way to know if it was
            tested today or last tested never.
          </p>
        </Container>
      </section>

      {/* Tagline */}
      <section className="border-t border-charcoal/10 bg-offwhite py-10 md:py-14">
        <Container>
          <p className="text-center text-2xl font-bold text-charcoal md:text-3xl">
            Your food is only as good <span className="text-amber">as the oil it&apos;s cooked in.</span>
          </p>
        </Container>
      </section>

      {/* Why it matters */}
      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <FadeIn>
          <h2 className="text-3xl font-bold">Why the oil matters</h2>
          </FadeIn>
          <div className="mt-8 space-y-6 text-charcoal/70">
            <p>
              Frying oil degrades every time food enters the fryer. Water from
              the food triggers hydrolysis. Oxygen in the air drives oxidation.
              Over time, these reactions produce compounds called total polar
              materials (TPM) — a mix of free fatty acids, aldehydes, and
              polymers that affect taste, texture, and health outcomes.
            </p>
            <p>
              At least five European countries mandate that restaurants discard
              frying oil when TPM exceeds 25–27%.<FootnoteRef id={1} /> The
              United States has no such requirement. Most American restaurants
              have never measured their frying oil TPM. The decision to change
              oil is typically based on a fixed schedule or visual appearance —
              neither of which reliably predicts actual oil quality.
            </p>
            <Callout>
              <p className="font-sans text-sm">
                Grootveld et al. (2017) demonstrated that PUFA-rich oils at
                frying temperatures generate volatile aldehydes — including
                4-hydroxynonenal and malondialdehyde — at levels that may exceed
                WHO tolerable daily intake thresholds. The choice of frying oil
                and its state of degradation directly affects what diners ingest.
              </p>
              <p className="mt-2 font-sans text-xs text-charcoal/40">
                Grootveld et al. (2017), Lipids in Health and Disease, 16(1), 214.
              </p>
            </Callout>
            <p>
              Degraded oil also changes the food itself. Saguy &amp; Dana (2003)
              showed that food fried in degraded oil absorbs 20–40% more fat
              than food fried in properly managed oil.<FootnoteRef id={2} /> The
              texture gets softer and greasier. Off-flavors from oxidation
              products — rancid, sour, sometimes fishy — transfer to the food.
              Color darkens prematurely.
            </p>
            <p>
              None of this is visible to the diner. You cannot tell by looking
              at a plate of fries whether the oil was fresh or overdue for
              replacement. That information asymmetry is the problem the WIYO!
              seal solves.
            </p>
          </div>

          <InlineImage src={IMAGES.frenchFries} alt="Golden french fries" className="mt-10 aspect-[16/7]" />
        </Container>
      </Section>

      {/* What the seal tells you */}
      <Section className="border-t border-charcoal/10 bg-white">
        <Container size="md">
          <FadeIn>
          <h2 className="text-3xl font-bold">What the WIYO! seal tells you</h2>
          <p className="mt-2 text-sm text-charcoal/50">
            WIYO! stands for <strong className="text-charcoal/70">&ldquo;What Is Your Oil?&rdquo;</strong> — the question NCOMA believes every diner deserves an answer to.
          </p>
          </FadeIn>
          <div className="mt-8 space-y-4">
            {[
              'The kitchen filters its oil daily — at minimum',
              'Frying oil is tested with a TPM meter, not guessed at',
              'Oil is discarded at 25% TPM — the standard used in Belgium, Spain, France, and the Netherlands',
              'At least one staff member is trained in oil chemistry and degradation science (Silver+)',
              'The oil type is disclosed to diners (Gold)',
              'Records are kept and available for inspection',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 border-b border-charcoal/5 pb-4">
                <div className="mt-1.5 h-2 w-2 shrink-0 bg-amber" />
                <p className="text-charcoal/70">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ask your restaurant */}
      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <FadeIn>
          <h2 className="text-3xl font-bold">Ask your restaurant</h2>
          </FadeIn>
          <p className="mt-4 text-charcoal/70">
            You don&apos;t need a chemistry degree. Three questions change the
            conversation:
          </p>
          <div className="mt-8 space-y-6">
            {[
              { q: 'What oil do you fry in?', why: 'The type of oil matters. Fruit oils like palm and high oleic varieties (sunflower, canola) produce far fewer degradation byproducts than conventional PUFA-rich seed oils (corn, soybean, grapeseed) at the same temperature.' },
              { q: 'How often do you test it?', why: 'If the answer is "we don\'t" or "we change it every X days," there\'s no data behind the decision. NCOMA-certified kitchens test TPM at minimum daily.' },
              { q: 'Are you NCOMA certified?', why: 'The WIYO! seal means the kitchen has been independently inspected and meets a published standard. No seal, no standard.' },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-xl font-bold">&ldquo;{item.q}&rdquo;</p>
                <p className="mt-2 text-sm text-charcoal/60">{item.why}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Find CTA */}
      <CTABanner
        variant="dark"
        heading="Find certified restaurants near you"
        subheading="Search the NCOMA directory to find restaurants that manage their oil to a real, science-based standard."
        primaryLabel="Search the Directory"
        primaryHref="/find"
        secondaryLabel="Learn About the Seal"
        secondaryHref="/seal"
      />

      {/* Operator CTA */}
      <CTABanner
        variant="amber"
        heading="Are you a restaurant operator?"
        subheading="Get your kitchen certified and show your customers you take oil quality seriously."
        primaryLabel="Get Certified →"
        primaryHref="/operators#get-certified"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />

      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <Footnotes
            notes={[
              'Germany 27% TPM (mandatory), Belgium/Netherlands/Spain/France 25% TPM (mandatory). Source: NCOMA Certified Cooking Oil Management Guide, Table 7.1.',
              'Saguy, I. S., & Dana, D. (2003). Minimizing oil uptake during deep-fat frying. Journal of Food Engineering, 56(2–3), 143–152.',
            ]}
          />
        </Container>
      </Section>
    </main>
  )
}
