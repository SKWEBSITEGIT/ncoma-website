'use client'

import { Container, Section, Eyebrow, Card } from '@/components/ui'

export default function Contact() {
  return (
    <main>
      <Section className="pt-20 md:pt-28">
        <Container size="md">
          <Eyebrow>Contact &amp; Press</Eyebrow>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Get in touch</h1>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section className="border-t border-charcoal/10 pt-12">
        <Container size="md">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  console.log('Form submitted — stubbed to console')
                }}
                className="mt-6 space-y-4"
              >
                <div>
                  <label className="text-sm font-medium text-charcoal/60">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block h-10 w-full border border-charcoal/20 bg-white px-3 font-sans text-sm focus:border-amber focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal/60">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-1 block h-10 w-full border border-charcoal/20 bg-white px-3 font-sans text-sm focus:border-amber focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal/60">
                    Subject
                  </label>
                  <select className="mt-1 block h-10 w-full border border-charcoal/20 bg-white px-3 font-sans text-sm focus:border-amber focus:outline-none">
                    <option>General inquiry</option>
                    <option>Certification questions</option>
                    <option>Media / press</option>
                    <option>Speaking request</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal/60">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="mt-1 block w-full border border-charcoal/20 bg-white px-3 py-2 font-sans text-sm focus:border-amber focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="h-10 bg-amber px-6 font-sans text-sm font-medium text-white transition-colors hover:bg-amber-dark"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal/40">
                  General Inquiries
                </h3>
                <p className="mt-2 text-charcoal/70">
                  [NEEDS: general email address]
                </p>
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal/40">
                  Media &amp; Press
                </h3>
                <p className="mt-2 text-charcoal/70">
                  [NEEDS: press email address]
                </p>
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal/40">
                  Speaking Requests
                </h3>
                <p className="mt-2 text-charcoal/70">
                  [NEEDS: speaking contact]
                </p>
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal/40">
                  Mailing Address
                </h3>
                <p className="mt-2 text-charcoal/70">
                  [NEEDS: NCOMA mailing address]
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Press Section */}
      <Section className="border-t border-charcoal/10 bg-white">
        <Container size="md">
          <h2 className="text-3xl font-bold">Press</h2>

          <div className="mt-8">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal/40">
              About NCOMA — Boilerplate
            </h3>
            <p className="mt-3 text-charcoal/70">
              The National Cooking Oil Management Association (NCOMA) is the
              first industry-built certification body for cooking oil management
              in American commercial kitchens. Founded by foodservice industry
              professionals, NCOMA establishes what no federal regulation
              currently requires: a science-based standard for how cooking oil is
              selected, managed, tested, and replaced. The association&apos;s
              WIYO! (&ldquo;What Is Your Oil?&rdquo;) consumer seal certifies
              that a restaurant manages its frying oil to a published standard
              aligned with international best practice. NCOMA is headquartered
              in [NEEDS: city, state].
            </p>
          </div>

          {/* Founder Bios */}
          <div className="mt-12">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal/40">
              Founders
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Card>
                <div className="placeholder-image mb-4 aspect-[3/4] w-24">
                  96 × 128
                </div>
                <p className="font-sans font-semibold">[NEEDS: founder name]</p>
                <p className="font-sans text-sm text-charcoal/50">[NEEDS: title]</p>
                <p className="mt-2 text-sm text-charcoal/60">
                  [NEEDS: 2-3 sentence bio]
                </p>
              </Card>
              <Card>
                <div className="placeholder-image mb-4 aspect-[3/4] w-24">
                  96 × 128
                </div>
                <p className="font-sans font-semibold">[NEEDS: founder name]</p>
                <p className="font-sans text-sm text-charcoal/50">[NEEDS: title]</p>
                <p className="mt-2 text-sm text-charcoal/60">
                  [NEEDS: 2-3 sentence bio]
                </p>
              </Card>
            </div>
          </div>

          {/* Fact Sheet */}
          <div className="mt-12">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal/40">
              Fact Sheet
            </h3>
            <div className="mt-4 placeholder-image aspect-[16/2] w-full">
              Downloadable PDF — NCOMA Fact Sheet [NEEDS: design and content]
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
