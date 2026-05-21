import Link from 'next/link'
import { Container, Section, Eyebrow, Button, Card, Callout } from '@/components/ui'
import { FadeIn, FadeInStagger, FadeInItem, SlideIn } from '@/components/AnimatedSection'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { HeroImage, InlineImage } from '@/components/HeroImage'
import { IMAGES } from '@/lib/images'
import {
  TestingDonut,
  OilTypesBar,
  PurchaseCriteriaBar,
  InternationalBar,
  AwarenessGrid,
  ChangeFrequencyVisual,
} from './charts'

export const metadata = {
  title: '2026 State of the Fryer — NCOMA',
  description:
    'Oil management practices in American commercial kitchens. A survey of 412 operators across 38 states.',
}

export default function StateOfTheFryer2026() {
  return (
    <main>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-charcoal">
        <HeroImage
          src={IMAGES.kitchenLine}
          alt="Commercial kitchen line during service"
          className="absolute inset-0"
        />
        {/* Extra gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

        <Container size="lg" className="relative z-10 pb-16 pt-40 md:pb-24">
          <FadeIn>
            <p className="font-sans text-sm font-medium uppercase tracking-widest text-amber">
              NCOMA Research &middot; 2026
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              State of the Fryer
            </h1>
            <p className="mt-4 max-w-xl font-sans text-lg text-white/70 md:text-xl">
              Oil Management Practices in American Commercial Kitchens
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:gap-10 md:gap-16">
              <AnimatedCounter
                value="412"
                label="Operators surveyed"
                source="Jan–Mar 2026"
              />
              <AnimatedCounter
                value="38"
                label="States represented"
                source="Nationwide sample"
              />
              <AnimatedCounter
                value="78%"
                label="Never tested their oil"
                source="Key finding"
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ═══════════════ EXECUTIVE SUMMARY ═══════════════ */}
      <Section className="bg-offwhite">
        <Container size="md">
          <FadeIn>
            <Eyebrow>Executive Summary</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              The industry is flying blind.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 columns-1 gap-8 text-lg leading-relaxed text-charcoal/70 md:columns-2">
              <p>
                NCOMA&rsquo;s inaugural State of the Fryer report surveyed 412
                commercial-kitchen operators across 38 states to benchmark how
                America fries. The findings reveal a systemic knowledge and
                practice gap: the vast majority of operators have never
                objectively measured oil quality, most select oil on price
                alone, and nearly one in four kitchens has no filtration
                equipment at all.
              </p>
              <p className="mt-6 md:mt-0">
                Median oil-change frequency sits at three days regardless of
                oil type, fryer volume, or throughput&mdash;a one-size-fits-all
                cadence disconnected from measurable degradation. Meanwhile,
                countries with mandated Total Polar Material thresholds have
                demonstrated that testing works: Athens reports only 17% of
                samples exceeding limits. The U.S. has no federal standard.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <Callout className="mt-10">
              <p className="font-sans text-sm font-medium text-charcoal">
                &ldquo;Without objective measurement, operators cannot know
                whether they are changing oil too early&mdash;wasting
                money&mdash;or too late&mdash;compromising food quality and
                safety.&rdquo;
              </p>
            </Callout>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Photo break ── */}
      <div className="relative h-64 overflow-hidden md:h-80">
        <InlineImage
          src={IMAGES.deepFryer}
          alt="Close-up of a commercial deep fryer in use"
          className="h-full w-full rounded-none"
        />
      </div>

      {/* ═══════════════ TESTING GAP ═══════════════ */}
      <Section>
        <Container size="lg">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <SlideIn direction="left">
              <Eyebrow>Finding 01</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                The Testing Gap
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
                More than three out of four operators have never tested
                Total Polar Materials&mdash;the internationally recognized
                metric for frying-oil degradation. Among those who have
                tested, methods vary widely: handheld meters, test strips,
                and third-party lab analysis each represent a small fraction
                of overall practice.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
                This means the vast majority of oil-change decisions are based
                on visual cues, time intervals, or gut instinct rather than
                data.
              </p>
            </SlideIn>

            <FadeIn delay={0.2}>
              <Card className="flex items-center justify-center py-10">
                <TestingDonut />
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ═══════════════ OIL SELECTION ═══════════════ */}
      <Section className="bg-offwhite">
        <Container size="lg">
          <FadeIn>
            <div className="text-center">
              <Eyebrow>Finding 02</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                What America Fries In
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-sans text-charcoal/60">
                Soybean oil dominates the market, driven primarily by price.
                Only 6% of operators cite performance data as their primary
                selection criterion.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <FadeIn>
              <Card>
                <h3 className="font-sans text-sm font-medium uppercase tracking-wider text-charcoal/50">
                  Oil types in use
                </h3>
                <OilTypesBar />
              </Card>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Card>
                <h3 className="font-sans text-sm font-medium uppercase tracking-wider text-charcoal/50">
                  Primary purchase criteria
                </h3>
                <PurchaseCriteriaBar />
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.25}>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { stat: '71%', desc: 'choose oil based on price alone' },
                { stat: '14%', desc: 'rely on distributor recommendation' },
                { stat: '6%', desc: 'use performance data to decide' },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="border-t-2 border-amber pt-4"
                >
                  <p className="text-3xl font-bold text-charcoal">
                    {item.stat}
                  </p>
                  <p className="mt-1 font-sans text-sm text-charcoal/60">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Photo break ── */}
      <div className="relative h-64 overflow-hidden md:h-80">
        <InlineImage
          src={IMAGES.oilPouring}
          alt="Cooking oil being poured"
          className="h-full w-full rounded-none"
        />
      </div>

      {/* ═══════════════ FILTRATION CRISIS ═══════════════ */}
      <Section>
        <Container size="lg">
          <FadeIn>
            <div className="text-center">
              <Eyebrow>Finding 03</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                The Filtration Crisis
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-sans text-charcoal/60">
                Filtration is the single most impactful practice for extending
                oil life. Yet one in four kitchens has no equipment at all, and
                the largest group filters only when the oil visibly deteriorates.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                pct: '34%',
                label: 'Filter daily',
                color: 'bg-amber',
                desc: 'Best practice, but still a minority of operators.',
              },
              {
                pct: '41%',
                label: '"When it looks like it needs it"',
                color: 'bg-charcoal/20',
                desc: 'Reactive filtration based on visual cues alone.',
              },
              {
                pct: '25%',
                label: 'No filtration equipment',
                color: 'bg-charcoal',
                desc: 'Zero filtration capability in the kitchen.',
              },
            ].map((item) => (
              <FadeInItem key={item.pct}>
                <div className="flex h-full flex-col border border-charcoal/10 bg-white p-8">
                  <div className={`mb-4 h-2 w-16 rounded-full ${item.color}`} />
                  <p className="text-4xl font-bold text-charcoal md:text-5xl">
                    {item.pct}
                  </p>
                  <p className="mt-2 font-sans text-sm font-semibold uppercase tracking-wider text-charcoal/80">
                    {item.label}
                  </p>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal/60">
                    {item.desc}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

        </Container>
      </Section>

      {/* ═══════════════ CHANGE FREQUENCY ═══════════════ */}
      <Section className="bg-offwhite">
        <Container size="md">
          <FadeIn>
            <div className="text-center">
              <Eyebrow>Finding 03b</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                The 3-Day Myth
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-sans text-charcoal/60">
                A fixed schedule that gets every operation wrong. It either wastes
                oil with cycles left or serves food in oil past the threshold.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-10">
            <ChangeFrequencyVisual />
          </FadeIn>
        </Container>
      </Section>

      {/* ═══════════════ AWARENESS GAP ═══════════════ */}
      <Section className="bg-charcoal text-white">
        <Container size="lg">
          <FadeIn>
            <div className="text-center">
              <Eyebrow className="text-amber">Finding 04</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                The Awareness Gap
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-sans text-white/60">
                Operators overwhelmingly lack foundational knowledge about oil
                science and global standards&mdash;information that is widely
                available but never reaches the kitchen.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-14">
            <AwarenessGrid />
          </FadeIn>
        </Container>
      </Section>

      {/* ── Photo break ── */}
      <div className="relative h-64 overflow-hidden md:h-80">
        <InlineImage
          src={IMAGES.worldMap}
          alt="Global map representing international oil management standards"
          className="h-full w-full rounded-none"
        />
      </div>

      {/* ═══════════════ INTERNATIONAL CONTEXT ═══════════════ */}
      <Section>
        <Container size="lg">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeIn>
              <Card>
                <h3 className="font-sans text-sm font-medium uppercase tracking-wider text-charcoal/50">
                  Samples exceeding safe TPM thresholds
                </h3>
                <InternationalBar />
                <p className="mt-2 font-sans text-xs text-charcoal/40">
                  Athens &amp; Delhi data from published monitoring studies.
                  U.S. figure reflects operators who have never tested.
                </p>
              </Card>
            </FadeIn>

            <SlideIn direction="right">
              <Eyebrow>Finding 05</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                International Context
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
                Countries that mandate TPM testing have dramatically lower rates
                of degraded oil in commerce. In Athens, where testing is
                required, only 17% of samples exceeded safe thresholds. In
                Delhi, where enforcement is weak, over 65% exceed limits.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
                The United States has no federal TPM standard. Without any
                requirement to test, 78% of surveyed operators have never
                measured their oil quality&mdash;leaving the true scope of the
                problem unmeasured.
              </p>
            </SlideIn>
          </div>
        </Container>
      </Section>

      {/* ═══════════════ METHODOLOGY ═══════════════ */}
      <Section className="border-t border-charcoal/10 bg-offwhite">
        <Container size="md">
          <FadeIn>
            <Eyebrow>Methodology</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              How This Study Was Conducted
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {[
                {
                  heading: 'Survey period',
                  body: 'January through March 2026',
                },
                {
                  heading: 'Sample size',
                  body: '412 commercial-kitchen operators',
                },
                {
                  heading: 'Geographic scope',
                  body: '38 U.S. states represented',
                },
                {
                  heading: 'Margin of error',
                  body: '±4.8% at 95% confidence',
                },
                {
                  heading: 'Method',
                  body: 'Online survey distributed through foodservice industry channels',
                },
                {
                  heading: 'Respondent profile',
                  body: 'Kitchen managers, head chefs, and owner-operators of commercial frying operations',
                },
              ].map((item) => (
                <div key={item.heading}>
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-amber">
                    {item.heading}
                  </h3>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-charcoal/70">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ═══════════════ CTA ═══════════════ */}
      <Section className="bg-charcoal text-center text-white">
        <Container size="md">
          <FadeIn>
            <Eyebrow className="text-amber">Take Action</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Close the gap in your kitchen.
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-sans text-lg text-white/60">
              NCOMA certification gives operators the tools, training, and
              testing protocols to manage oil by data&mdash;not guesswork.
              Join the operators already setting the standard.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/operators" variant="primary" size="lg">
                Get Certified
              </Button>
              <Button href="/reports" variant="outline" size="lg" className="border-white/20 text-white hover:border-white/40">
                View All Reports
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </main>
  )
}
