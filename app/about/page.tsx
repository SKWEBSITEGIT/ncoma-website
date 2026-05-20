import { Container, Section, Eyebrow, Card } from '@/components/ui'
import board from '@/data/board.json'

export const metadata = { title: 'About NCOMA' }

export default function About() {
  return (
    <main>
      <Section className="pt-20 md:pt-28">
        <Container size="md">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            We built the standard the industry never had.
          </h1>
        </Container>
      </Section>

      {/* Our Story */}
      <Section className="border-t border-charcoal/10 pt-12">
        <Container size="md">
          <h2 className="text-2xl font-bold">Our Story</h2>
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
              NCOMA was founded by people who have spent decades inside
              America&apos;s fryers. Not regulators. Not academics. The industry
              itself — distributors, operators, and equipment innovators who saw
              the same problem from different angles and decided it was time for
              a standard.
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
            <p>
              The mission is simple: raise the standard of oil management in
              every commercial kitchen in this country. One kitchen at a time.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <h2 className="text-2xl font-bold">Mission</h2>
          <blockquote className="mt-6 border-l-4 border-l-amber pl-6 text-xl italic text-charcoal/80">
            The National Cooking Oil Management Association exists to establish
            what no federal regulation currently requires: a rigorous,
            knowledge-based standard for how cooking oil is selected, managed,
            tested, and replaced in American commercial kitchens.
          </blockquote>
          <p className="mt-6 text-charcoal/70">
            We believe that better-managed oil means better food, safer
            kitchens, and stronger margins for the operators who feed this
            country. The NCOMA Certified Oil Manager designation is how we get
            there.
          </p>
        </Container>
      </Section>

      {/* Board of Directors */}
      <Section className="border-t border-charcoal/10">
        <Container>
          <h2 className="text-2xl font-bold">Board of Directors</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {board.directors.map((member, i) => (
              <Card key={i}>
                <div className="placeholder-image mb-4 aspect-square w-20">
                  80 × 80
                </div>
                <p className="font-sans text-base font-semibold">
                  {member.name}
                </p>
                <p className="font-sans text-sm text-charcoal/50">
                  {member.title}, {member.organization}
                </p>
                <p className="mt-2 text-sm text-charcoal/60">{member.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Advisory Committee */}
      <Section className="border-t border-charcoal/10">
        <Container>
          <h2 className="text-2xl font-bold">Advisory Committee</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {board.advisors.map((member, i) => (
              <Card key={i}>
                <div className="placeholder-image mb-4 aspect-square w-20">
                  80 × 80
                </div>
                <p className="font-sans text-base font-semibold">
                  {member.name}
                </p>
                <p className="font-sans text-sm text-charcoal/50">
                  {member.title}, {member.organization}
                </p>
                <p className="mt-2 text-sm text-charcoal/60">{member.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section className="border-t border-charcoal/10 bg-white">
        <Container size="md">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="mt-6 space-y-2 font-sans text-sm text-charcoal/60">
            <p>[NEEDS: NCOMA mailing address]</p>
            <p>
              General inquiries:{' '}
              <span className="text-charcoal">[NEEDS: email]</span>
            </p>
            <p>
              Media &amp; press:{' '}
              <span className="text-charcoal">[NEEDS: press email]</span>
            </p>
          </div>
        </Container>
      </Section>
    </main>
  )
}
