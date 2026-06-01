import { Container, Section, Eyebrow, Card } from '@/components/ui'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/AnimatedSection'
import { HeroImage } from '@/components/HeroImage'
import { Avatar } from '@/components/Avatar'
import { IMAGES } from '@/lib/images'
import { CTABanner } from '@/components/CTABanner'
import board from '@/data/board.json'

export const metadata = { title: 'About NCOMA' }

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <HeroImage
          src={IMAGES.commercialKitchen}
          alt="Professional kitchen environment"
          className="absolute inset-0"
          overlay="dark"
        />
        <Container size="md" className="relative z-10 pb-16 pt-32 md:pb-20">
          <p className="animate-hero-1 font-sans text-xs font-semibold uppercase tracking-widest text-amber">About</p>
          <h1 className="animate-hero-2 mt-2 max-w-3xl text-4xl font-bold text-white md:text-5xl">
            We built the standard the industry never had.
          </h1>
        </Container>
      </section>

      {/* Our Story */}
      <Section className="border-t border-charcoal/10 pt-12">
        <Container size="md">
          <FadeIn>
            <h2 className="text-2xl font-bold">Our Story</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-6 space-y-5 text-charcoal/70">
              <p>
                The National Cooking Oil Management Association exists because of
                an absence. There is no federal regulation in the United States
                that tells a restaurant when to change its frying oil. No TPM
                threshold. No required testing frequency. No certification for the
                people managing what is, by volume and by impact, one of the most
                consequential ingredients in commercial cooking.
              </p>
              <p>
                Germany mandates discard at 27% TPM. Belgium, the Netherlands,
                Spain, and France set the line at 25%. The United States has
                nothing — and in the gap, a million-plus foodservice outlets
                operate on instinct, arbitrary schedules, and visual guesswork.
              </p>
              <p>
                NCOMA was built by the people who have been inside America&apos;s
                fryers for decades — not by regulators, not by academics, but by
                the industry itself. Operators who opened 240+ restaurants,
                engineers who invented patented filtration systems, and
                strategists who saw the same problem from different angles and
                decided it was time for a standard.
              </p>
              <p>
                The association&apos;s first act was to produce the{' '}
                <em>Certified Cooking Oil Management Guide</em> — a 10-part
                reference text covering oil chemistry, degradation science, fryer
                types, filtration systems, ingredient variables, testing methods,
                and a complete certification framework. It draws on published
                research from Choe &amp; Min, Grootveld, Saguy &amp; Dana, the
                PREDIMED trial, USDA FoodData Central, and original frying
                performance data from Fedepalma/Universidad de Caldas.
              </p>
              <p>
                From that foundation, NCOMA built three things: a knowledge-based
                exam for individual certification (the Certified Oil Manager
                designation), an operational inspection standard for kitchens, and
                the WIYO! consumer seal — so diners can see, at a glance, whether
                their restaurant manages its oil to a real standard.
              </p>
              <p className="font-semibold text-charcoal">
                Our mission is simple: raise the standard of oil management in
                every commercial kitchen in this country. One kitchen at a time.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Mission */}
      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <FadeIn>
            <h2 className="text-2xl font-bold">Mission</h2>
            <blockquote className="mt-6 border-l-4 border-l-amber pl-6 text-xl italic text-charcoal/80">
              The National Cooking Oil Management Association exists to establish
              what no federal regulation currently requires: a rigorous,
              knowledge-based standard for how cooking oil is selected, managed,
              tested, and replaced in American commercial kitchens.
            </blockquote>
            <p className="mt-6 text-charcoal/70">
              We believe that better-managed oil means better food and safer
              kitchens. The NCOMA Certified Oil Manager designation is how we
              get there — one kitchen at a time.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Leadership */}
      <Section className="border-t border-charcoal/10 bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-2xl font-bold">Leadership</h2>
          </FadeIn>
          <FadeInStagger className="mt-8 grid gap-8 md:grid-cols-3">
            {board.directors.map((member, i) => (
              <FadeInItem key={i}>
                <Card variant="profile" className="h-full">
                  <div className="mb-4">
                    <Avatar name={member.name} src={member.headshot} size="lg" />
                  </div>
                  <p className="font-sans text-lg font-semibold">
                    {member.name}
                  </p>
                  <p className="font-sans text-sm font-medium text-amber">
                    {member.role || member.title}
                  </p>
                  <p className="font-sans text-xs text-charcoal/50">
                    {member.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/60">{member.bio}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block font-sans text-xs text-amber hover:underline"
                    >
                      LinkedIn →
                    </a>
                  )}
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* Advisory Committee — renders only when real advisors exist */}
      {board.advisors.length > 0 && (
      <Section className="border-t border-charcoal/10">
        <Container>
          <FadeIn>
            <h2 className="text-2xl font-bold">Advisory Committee</h2>
            <p className="mt-2 text-charcoal/50">Expanding — reach out if you want to help build the standard.</p>
          </FadeIn>
          <FadeInStagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(board.advisors as Array<{ name: string; title: string; organization: string; bio: string; headshot: string }>).map((member, i) => (
              <FadeInItem key={i}>
                <Card>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-charcoal/5 text-xl font-bold text-charcoal/30">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <p className="font-sans text-base font-semibold">
                    {member.name}
                  </p>
                  <p className="font-sans text-sm text-charcoal/50">
                    {member.title}, {member.organization}
                  </p>
                  <p className="mt-2 text-sm text-charcoal/60">{member.bio}</p>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>
      )}

      {/* CTA */}
      <CTABanner
        variant="amber"
        heading="Want to join the mission?"
        subheading="Whether you want to certify your kitchen, partner with NCOMA, or just learn more — reach out."
        primaryLabel="Contact Us →"
        primaryHref="/contact"
        secondaryLabel="Get Certified"
        secondaryHref="/operators#get-certified"
      />
    </main>
  )
}
