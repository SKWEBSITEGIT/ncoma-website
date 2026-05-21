import { Container, Section, Eyebrow, Button, Card, Badge } from '@/components/ui'
import { FadeIn, FadeInStagger, FadeInItem, SlideIn } from '@/components/AnimatedSection'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { HeroImage, InlineImage } from '@/components/HeroImage'
import { Avatar } from '@/components/Avatar'
import { IMAGES } from '@/lib/images'

export default function Home() {
  return (
    <main>
      {/* Hero — the uncomfortable question */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden md:min-h-[85vh]">
        <HeroImage
          src={IMAGES.restaurantKitchen}
          alt="Commercial kitchen fryer station"
          className="absolute inset-0"
          overlay="dark"
        />
        <Container size="lg" className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-hero-1 text-5xl font-bold tracking-tight text-white md:text-7xl">
              What is <span className="text-amber">in</span> your oil<span className="text-amber">?</span>
            </h1>
            <p className="animate-hero-2 mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              Carcinogens. Aldehydes. Trans fats. Free radicals.
              If your restaurant isn&apos;t testing its frying oil, this is what&apos;s
              in it — and what your customers are eating. 78% of American
              restaurants have never checked.
            </p>
            <div className="animate-hero-3 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="#the-problem" size="lg">
                See What&apos;s In the Oil
              </Button>
              <Button
                href="/operators#get-certified"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:border-white/60"
              >
                Fix It — Get Certified
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* THE PROBLEM — dark, confrontational */}
      <section id="the-problem" className="border-t border-charcoal/10 bg-charcoal py-16 text-white md:py-24">
        <Container>
          <FadeIn>
            <Eyebrow className="text-amber">The Problem</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              This is what&apos;s actually in degraded frying oil.
            </h2>
            <p className="mt-4 max-w-3xl text-white/70">
              When frying oil breaks down — through heat, oxygen, water, and time — it doesn&apos;t
              just get &ldquo;old.&rdquo; It becomes a cocktail of toxic compounds that transfer
              directly into the food your customers eat.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-12 grid gap-6 md:grid-cols-3">
            <FadeInItem>
              <div className="border border-white/10 bg-white/5 p-6">
                <p className="font-sans text-3xl font-bold text-amber">20×</p>
                <p className="mt-1 font-sans text-sm font-semibold text-white/90">
                  Above WHO Limits
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  PUFA-rich oils at frying temperature produce aldehyde concentrations
                  approximately <strong className="text-white/80">20 times higher</strong> than
                  WHO recommended limits. These compounds absorb directly into the food.
                </p>
                <p className="mt-3 font-sans text-xs text-white/30">
                  Grootveld et al. (2021), Frontiers in Nutrition
                </p>
              </div>
            </FadeInItem>
            <FadeInItem>
              <div className="border border-white/10 bg-white/5 p-6">
                <p className="font-sans text-3xl font-bold text-amber">78%</p>
                <p className="mt-1 font-sans text-sm font-semibold text-white/90">
                  Have Never Tested
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Of 412 US operators surveyed, <strong className="text-white/80">78% have
                  never measured the Total Polar Materials</strong> in their frying oil.
                  Not once. They don&apos;t know what&apos;s in it. Neither do their customers.
                </p>
                <p className="mt-3 font-sans text-xs text-white/30">
                  NCOMA 2026 State of the Fryer Survey
                </p>
              </div>
            </FadeInItem>
            <FadeInItem>
              <div className="border border-white/10 bg-white/5 p-6">
                <p className="font-sans text-3xl font-bold text-amber">0</p>
                <p className="mt-1 font-sans text-sm font-semibold text-white/90">
                  Federal Standards
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Germany, France, Spain, Belgium, China, India — <strong className="text-white/80">20+
                  countries mandate TPM discard thresholds.</strong> The United States has
                  no federal limit, no required testing, no standard of any kind.
                </p>
                <p className="mt-3 font-sans text-xs text-white/30">
                  FDA / USDA regulatory review; Codex Alimentarius
                </p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </Container>
      </section>

      {/* What's actually in the oil — the gross part */}
      <Section className="border-t border-charcoal/10" size="spacious">
        <Container size="xl">
          <FadeIn>
            <Eyebrow>The Chemistry of Neglect</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Every hour your oil degrades, it produces these.
            </h2>
          </FadeIn>

          <div className="mt-12 space-y-16">
            <div className="grid items-start gap-12 md:grid-cols-2">
              <SlideIn direction="left">
                <div className="space-y-6">
                  <div className="border-l-4 border-l-red-500 pl-5">
                    <h3 className="font-sans text-base font-bold text-charcoal">4-Hydroxynonenal (4-HNE)</h3>
                    <p className="mt-1 text-sm text-charcoal/60">
                      A lipid peroxidation product from omega-6 PUFA oxidation. Classified as
                      cytotoxic and genotoxic. Linked to oxidative stress, inflammation, and
                      cell damage in peer-reviewed literature. Generated in every fryer running
                      degraded PUFA-rich oil.
                    </p>
                  </div>
                  <div className="border-l-4 border-l-red-500 pl-5">
                    <h3 className="font-sans text-base font-bold text-charcoal">Acrolein</h3>
                    <p className="mt-1 text-sm text-charcoal/60">
                      The simplest unsaturated aldehyde. A respiratory and gastrointestinal
                      irritant. Produced when glycerol in oil breaks down at frying temperatures.
                      The compound responsible for the acrid smell near an overused fryer.
                    </p>
                  </div>
                  <div className="border-l-4 border-l-red-500 pl-5">
                    <h3 className="font-sans text-base font-bold text-charcoal">Trans,trans-2,4-decadienal</h3>
                    <p className="mt-1 text-sm text-charcoal/60">
                      The dominant aldehyde from linoleic acid oxidation. What you taste as
                      &ldquo;rancid&rdquo; or &ldquo;fishy&rdquo; in degraded oil. Absorbed into
                      the food during frying. Diners eat it. Staff breathe it.
                    </p>
                  </div>
                  <div className="border-l-4 border-l-olive pl-5">
                    <h3 className="font-sans text-base font-bold text-charcoal">Total Polar Materials (TPM)</h3>
                    <p className="mt-1 text-sm text-charcoal/60">
                      The umbrella measurement for all degradation products — polymers,
                      dimers, free fatty acids, oxidized triglycerides. Fresh oil: 2–4% TPM.
                      Legal limit in Europe: 24–27% TPM. Many US fryers: nobody has ever checked.
                    </p>
                  </div>
                </div>
              </SlideIn>
              <SlideIn direction="right">
                <div className="space-y-4">
                  <div className="bg-charcoal p-5 text-center md:p-8">
                    <p className="font-sans text-6xl font-bold text-amber md:text-8xl">30%+</p>
                    <p className="mt-2 font-sans text-sm text-white/70">
                      TPM levels found in unregulated US fryers
                    </p>
                    <p className="mt-1 font-sans text-xs text-white/30">
                      No US survey exists. Delhi street vendors: 65%+ exceeded threshold.
                      Athens restaurants: 17%. The US — with no testing — is flying blind.
                    </p>
                  </div>
                  <div className="bg-charcoal/5 p-5 text-center md:p-8">
                    <p className="font-sans text-4xl font-bold text-charcoal md:text-5xl">3 days</p>
                    <p className="mt-2 font-sans text-sm text-charcoal/50">
                      Median oil change frequency — regardless of oil type, volume, or filtration
                    </p>
                    <p className="mt-1 font-sans text-xs text-charcoal/30">
                      A fixed schedule that gets every operation wrong. Wastes good oil.
                      Serves food in bad oil. Condition-based testing is the only answer.
                    </p>
                  </div>
                  <div className="bg-charcoal/5 p-5 text-center md:p-8">
                    <p className="font-sans text-4xl font-bold text-charcoal md:text-5xl">20–40%</p>
                    <p className="mt-2 font-sans text-sm text-charcoal/50">
                      More fat absorbed by food fried in degraded oil
                    </p>
                    <p className="mt-1 font-sans text-xs text-charcoal/30">
                      Saguy &amp; Dana (2003), Journal of Food Engineering
                    </p>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* What it does to your body */}
      <Section className="border-t border-charcoal/10 bg-white" size="tight">
        <Container>
          <FadeIn>
            <Eyebrow>The Health Impact</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              This is what degraded oil does to the people eating it.
            </h2>
            <p className="mt-4 max-w-3xl text-charcoal/60">
              When cooking oil reaches high temperatures or is reused without testing,
              its chemical structure breaks down through oxidation and thermal stress.
              The result is a toxic cocktail that transfers directly into food — and
              into the bodies of everyone who eats it.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FadeInItem>
              <Card className="h-full border-t-4 border-t-red-500">
                <h3 className="font-sans text-lg font-bold">Cancer Risk</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Degraded oils contain mutagenic compounds and carcinogens.
                  Chronic consumption — and even inhalation of frying fumes — is
                  linked to higher rates of lung, colorectal, and breast cancers
                  in peer-reviewed epidemiological studies.
                </p>
              </Card>
            </FadeInItem>
            <FadeInItem>
              <Card className="h-full border-t-4 border-t-red-500">
                <h3 className="font-sans text-lg font-bold">Cardiovascular Disease</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Degraded oils alter your lipid profile — raising LDL
                  (&ldquo;bad&rdquo;) cholesterol while lowering HDL (&ldquo;good&rdquo;)
                  cholesterol. They promote atherosclerosis: the stiffening and
                  narrowing of arteries that leads to heart attacks and strokes.
                </p>
              </Card>
            </FadeInItem>
            <FadeInItem>
              <Card className="h-full border-t-4 border-t-red-500">
                <h3 className="font-sans text-lg font-bold">Neurological Damage</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  4-Hydroxynonenal (4-HNE) — generated in every fryer running
                  degraded PUFA-rich oil — plays a documented role in the
                  progression of neurodegenerative disorders including
                  Alzheimer&apos;s and Parkinson&apos;s disease.
                </p>
              </Card>
            </FadeInItem>
            <FadeInItem>
              <Card className="h-full border-t-4 border-t-amber">
                <h3 className="font-sans text-lg font-bold">Trans Fat Formation</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Heat alters the structure of unsaturated fats, creating trans
                  fats — the same compounds the FDA moved to eliminate from the
                  food supply. Every hour of frying in degraded oil produces more.
                </p>
              </Card>
            </FadeInItem>
            <FadeInItem>
              <Card className="h-full border-t-4 border-t-amber">
                <h3 className="font-sans text-lg font-bold">Oxidative Stress</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Free radicals and aldehydes from degraded oil damage cells and
                  DNA. This chronic internal stress is linked to premature aging,
                  inflammation, and the development of degenerative diseases.
                </p>
              </Card>
            </FadeInItem>
            <FadeInItem>
              <Card className="h-full border-t-4 border-t-amber">
                <h3 className="font-sans text-lg font-bold">Digestive Distress</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  In the short term, rancid oil causes stomach irritation, nausea,
                  and indigestion. The off-flavors — rancid, sour, fishy — are
                  your body telling you the oil should have been changed days ago.
                </p>
              </Card>
            </FadeInItem>
          </FadeInStagger>

          <FadeIn delay={0.3} className="mt-10">
            <p className="mx-auto max-w-2xl text-center text-sm text-charcoal/40">
              Sources: Harvard T.H. Chan School of Public Health; Grootveld et al. (2021),
              Frontiers in Nutrition; Choe &amp; Min (2007), Journal of Food Science.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* The line — transition from problem to solution */}
      <section className="border-y border-charcoal/10 bg-charcoal py-16 md:py-24">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-sans text-sm font-medium uppercase tracking-widest text-amber">
                The Gap
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                Most American kitchens have no standard for frying oil.
              </h2>
              <p className="mt-4 text-white/70">
                The FDA hasn&apos;t signaled interest. No state has enacted TPM legislation.
                No bill has been introduced. Nobody is coming to regulate this.
              </p>
              <p className="mt-6 text-lg font-semibold text-amber">
                NCOMA changes that.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mx-auto mt-12 max-w-2xl border-t border-white/10 pt-10">
              <blockquote className="text-center text-base italic leading-relaxed text-white/60">
                &ldquo;The National Cooking Oil Management Association exists to
                establish what no federal regulation currently requires: a rigorous,
                knowledge-based standard for how cooking oil is selected, managed,
                tested, and replaced in American commercial kitchens.&rdquo;
              </blockquote>
              <p className="mt-3 text-center font-sans text-xs font-medium uppercase tracking-wider text-white/30">
                NCOMA Mission Statement
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* THE SOLUTION — WIYO! Seal */}
      <Section className="bg-white" id="seal" size="spacious">
        <Container>
          <FadeIn>
            <Eyebrow>The Solution</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              The WIYO! seal. Three tiers. One standard.
            </h2>
            <p className="mt-4 max-w-2xl text-charcoal/60">
              <strong className="text-charcoal">What Is Your Oil?</strong> — the question every
              diner should ask and every kitchen should be able to answer. The WIYO! seal means
              this kitchen tests, filters, logs, and manages its oil to a published standard.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-12 grid gap-8 md:grid-cols-3">
            <FadeInItem>
              <Card variant="elevated">
                <Badge variant="bronze">Bronze — Foundation</Badge>
                <h3 className="mt-4 text-xl font-bold">Managed Oil</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Daily filtration. TPM testing daily minimum. Oil discarded at 25% TPM.
                  Fryers covered when idle. Salt at the pass only. Oil Log maintained
                  every service.
                </p>
              </Card>
            </FadeInItem>
            <FadeInItem>
              <Card variant="elevated">
                <Badge variant="silver">Silver — Certified Staff</Badge>
                <h3 className="mt-4 text-xl font-bold">Trained Kitchen</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Everything in Bronze. At least one NCOMA Certified Oil Technician (COT)
                  on staff. Can name the three degradation pathways. Thermostat verified
                  ±5°C weekly. Dedicated fish fryer.
                </p>
              </Card>
            </FadeInItem>
            <FadeInItem>
              <Card variant="elevated">
                <Badge variant="gold">Gold — Exemplary</Badge>
                <h3 className="mt-4 text-xl font-bold">Full Transparency</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Everything in Silver. Oil type disclosed to diners. 30+ days of Oil
                  Log history. 0.5-micron filtration. Consumer-facing WIYO! seal displayed.
                  Annual inspection, 85%+ pass rate.
                </p>
              </Card>
            </FadeInItem>
          </FadeInStagger>
        </Container>
      </Section>

      {/* Counter Band */}
      <section className="border-y border-charcoal/10 bg-charcoal py-12 text-white md:py-16">
        <Container>
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            <AnimatedCounter
              value="1M+"
              label="Foodservice outlets with no oil quality standard"
              source="National Restaurant Association, 2025"
            />
            <AnimatedCounter
              value="78%"
              label="Of operators who have never tested TPM"
              source="NCOMA 2026 State of the Fryer"
            />
            <AnimatedCounter
              value="25%"
              label="TPM — the NCOMA discard threshold"
              source="Aligned with Codex Alimentarius and EU law"
            />
            <AnimatedCounter
              value="40–80%"
              label="Oil life extension from proper management"
              source="Moreira et al., Deep-Fat Frying"
            />
          </div>
        </Container>
      </section>

      {/* The science — why it matters */}
      <Section size="spacious">
        <Container>
          <FadeIn>
            <Eyebrow>The Science</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              This isn&apos;t opinion. It&apos;s peer-reviewed chemistry.
            </h2>
          </FadeIn>

          <div className="mt-12 space-y-20">
            {/* What diners eat */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              <SlideIn direction="left">
                <h3 className="text-xl font-bold">What your customers are actually eating</h3>
                <p className="mt-3 text-charcoal/70">
                  Aldehydes from degraded oil don&apos;t stay in the fryer. They absorb
                  into the food during cooking. Grootveld&apos;s team used NMR spectroscopy
                  to measure it: PUFA-rich oils at 180°C generated aldehyde concentrations
                  orders of magnitude above safety thresholds. Those compounds cause
                  the off-flavors — rancid, sour, fishy — that tell you the oil is done.
                  But most kitchens have already served dozens of batches by that point.
                </p>
                <p className="mt-2 font-sans text-xs text-charcoal/40">
                  Grootveld et al. (2021), Frontiers in Nutrition; (2015), BBC/De Montfort University
                </p>
              </SlideIn>
              <SlideIn direction="right">
                <InlineImage
                  src={IMAGES.frenchFries}
                  alt="Fried food — quality depends entirely on oil quality"
                  className="aspect-[4/3]"
                />
              </SlideIn>
            </div>

            {/* What operators waste */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              <SlideIn direction="left" className="order-2 md:order-1">
                <InlineImage
                  src={IMAGES.commercialKitchen}
                  alt="Restaurant kitchen"
                  className="aspect-[4/3]"
                />
              </SlideIn>
              <SlideIn direction="right" className="order-1 md:order-2">
                <h3 className="text-xl font-bold">What operators are wasting — or worse</h3>
                <p className="mt-3 text-charcoal/70">
                  The median oil change is every 3 days, regardless of the oil, the menu,
                  the volume, or whether anyone filtered. That schedule either dumps oil
                  with usable cycles left — costing thousands per year — or keeps serving
                  food in oil past the threshold. One fryer, two ways to lose.
                  Managed operators extend oil life 20–40% and know exactly when to change.
                </p>
                <p className="mt-2 font-sans text-xs text-charcoal/40">
                  NCOMA 2026 State of the Fryer; Moreira et al., Deep-Fat Frying: Fundamentals
                </p>
              </SlideIn>
            </div>

            {/* What PUFA does */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              <SlideIn direction="left">
                <h3 className="text-xl font-bold">Why the oil type matters more than the price</h3>
                <p className="mt-3 text-charcoal/70">
                  Linoleic acid — the dominant fatty acid in soybean, corn, and conventional
                  sunflower oil — oxidizes <strong>10–40× faster</strong> than oleic acid.
                  Same fryer, same temperature, different chemistry. Conventional soybean
                  oil (58% PUFA) lasts 72 fry cycles. High oleic sunflower (9% PUFA) lasts
                  210. The plant doesn&apos;t matter. The fatty acid profile does.
                </p>
                <p className="mt-2 font-sans text-xs text-charcoal/40">
                  Choe &amp; Min (2007), Journal of Food Science; Holman &amp; Elmer (1947), JAOCS
                </p>
              </SlideIn>
              <SlideIn direction="right">
                <InlineImage
                  src={IMAGES.oilPouring}
                  alt="Cooking oil — composition determines everything"
                  className="aspect-[4/3]"
                />
              </SlideIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pull Quote — full bleed */}
      <FadeIn>
        <section className="border-y border-charcoal/10 bg-offwhite py-20 md:py-28">
          <blockquote className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-3xl font-bold leading-tight text-charcoal md:text-5xl">
              The oil is an ingredient.
            </p>
            <p className="mt-2 text-3xl font-bold leading-tight text-amber md:text-5xl">
              Manage it like one.
            </p>
          </blockquote>
        </section>
      </FadeIn>

      {/* Featured Report */}
      <Section className="border-t border-charcoal/10 bg-white">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeIn>
              <Badge variant="amber">Featured Report</Badge>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                The 2026 State of the Fryer
              </h2>
              <p className="mt-4 text-charcoal/70">
                412 operators. 38 states. The first comprehensive survey of how American
                restaurants actually manage their frying oil. The findings are worse than
                expected.
              </p>
              <ul className="mt-4 space-y-2 pl-5 list-disc font-sans text-sm text-charcoal/60">
                <li>78% have never measured TPM</li>
                <li>25% have no filtration equipment at all</li>
                <li>96% unaware of the 25% TPM international standard</li>
                <li>84% cannot name a single oil degradation pathway</li>
              </ul>
              <div className="mt-6">
                <Button href="/reports/state-of-the-fryer-2026">
                  Read the Full Report
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <InlineImage
                src={IMAGES.dataCharts}
                alt="Data from the 2026 State of the Fryer report"
                className="aspect-[4/3]"
              />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Leadership */}
      <Section className="border-t border-charcoal/10">
        <Container>
          <FadeIn>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold">
              Built by the people who know the fryer
            </h2>
            <p className="mt-4 max-w-2xl text-charcoal/60">
              Not regulators. Not academics. Operators and engineers who spent decades
              inside America&apos;s commercial kitchens and decided the standard needed to exist.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-12 grid gap-8 md:grid-cols-3">
            <FadeInItem>
              <Card variant="profile">
                <div className="mb-4">
                  <Avatar name="Matt McMahon" src="/images/board/matt-mcmahon.jpg" />
                </div>
                <p className="font-sans text-base font-semibold">Matt McMahon</p>
                <p className="font-sans text-sm text-olive">President</p>
                <p className="mt-2 text-sm text-charcoal/60">
                  240+ restaurant openings. $72M in sales across Arizona &amp; New Mexico.
                  Developed Bulk Oil Management Solutions saving 100,000+ lbs of waste.
                </p>
              </Card>
            </FadeInItem>
            <FadeInItem>
              <Card variant="profile">
                <div className="mb-4">
                  <Avatar name="Conrad Canter" src="/images/board/conrad-canter.jpg" />
                </div>
                <p className="font-sans text-base font-semibold">Conrad Canter</p>
                <p className="font-sans text-sm text-olive">Technical Director</p>
                <p className="mt-2 text-sm text-charcoal/60">
                  Inventor of the Zeco Filtration Machine — patented 0.5-micron closed-loop
                  system serving hundreds of restaurants across the Southwest.
                </p>
              </Card>
            </FadeInItem>
            <FadeInItem>
              <Card variant="profile">
                <div className="mb-4">
                  <Avatar name="Pablo Herrera" src="/images/board/pablo-herrera.jpg" />
                </div>
                <p className="font-sans text-base font-semibold">Pablo Herrera</p>
                <p className="font-sans text-sm text-olive">Founder, The Oil Insurgency</p>
                <p className="mt-2 text-sm text-charcoal/60">
                  Built the Oil Atlas, designed the certification framework, and launched
                  The Oil Insurgency — forcing transparency into every commercial fryer
                  in America.
                </p>
              </Card>
            </FadeInItem>
          </FadeInStagger>

          <FadeIn delay={0.3} className="mt-8 text-center">
            <Button href="/about" variant="outline">
              About NCOMA
            </Button>
          </FadeIn>
        </Container>
      </Section>

      {/* Closing CTA — the mandate */}
      <section className="relative overflow-hidden border-t border-charcoal/10 bg-charcoal py-20 text-white md:py-28">
        <div className="absolute inset-0 opacity-15">
          <HeroImage
            src={IMAGES.heroFrying}
            alt=""
            className="absolute inset-0"
            overlay={false}
            priority={false}
          />
        </div>
        <Container className="relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Your customers can&apos;t see what&apos;s in the fryer.
                <br />
                <span className="text-amber">The WIYO! seal can.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/70">
                Certification gives your kitchen a standard, your staff a credential,
                and your guests the one thing they&apos;ve never had: proof.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button href="/operators#get-certified" size="lg">
                  Get Certified
                </Button>
                <Button
                  href="/field-notes"
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:border-white/40"
                >
                  Read the Science
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  )
}
