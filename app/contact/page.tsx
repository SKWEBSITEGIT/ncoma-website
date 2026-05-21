'use client'

import { useState } from 'react'
import { Container, Section, Eyebrow, Card, Button } from '@/components/ui'
import { Avatar } from '@/components/Avatar'
import board from '@/data/board.json'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

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
              {submitted ? (
                <div className="mt-6 rounded border border-olive/20 bg-olive/5 p-8 text-center">
                  <p className="text-lg font-semibold text-charcoal">Thank you for your message.</p>
                  <p className="mt-2 text-charcoal/60">We&apos;ll be in touch shortly.</p>
                </div>
              ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="mt-6 space-y-4"
              >
                <div>
                  <label htmlFor="contact-name" className="text-sm font-medium text-charcoal/60">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="mt-1 block h-10 w-full border border-charcoal/20 bg-white px-3 font-sans text-sm focus:border-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm font-medium text-charcoal/60">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="mt-1 block h-10 w-full border border-charcoal/20 bg-white px-3 font-sans text-sm focus:border-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="text-sm font-medium text-charcoal/60">
                    Subject
                  </label>
                  <select id="contact-subject" className="mt-1 block h-10 w-full border border-charcoal/20 bg-white px-3 font-sans text-sm focus:border-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/50">
                    <option>General inquiry</option>
                    <option>Certification questions</option>
                    <option>Media / press</option>
                    <option>Speaking request</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-sm font-medium text-charcoal/60">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    className="mt-1 block w-full border border-charcoal/20 bg-white px-3 py-2 font-sans text-sm focus:border-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
                  />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal/40">
                  General Inquiries
                </h3>
                <p className="mt-2 text-charcoal/70">
                  <a href="mailto:info@ncoma.org" className="text-amber hover:underline">info@ncoma.org</a>
                </p>
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal/40">
                  Media &amp; Press
                </h3>
                <p className="mt-2 text-charcoal/70">
                  <a href="mailto:press@ncoma.org" className="text-amber hover:underline">press@ncoma.org</a>
                </p>
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal/40">
                  Speaking Requests
                </h3>
                <p className="mt-2 text-charcoal/70">
                  <a href="mailto:speaking@ncoma.org" className="text-amber hover:underline">speaking@ncoma.org</a>
                </p>
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal/40">
                  Mailing Address
                </h3>
                <p className="mt-2 text-charcoal/70">
                  Scottsdale, AZ
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
              in Scottsdale, Arizona.
            </p>
          </div>

          {/* Founder Bios */}
          <div className="mt-12">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal/40">
              Founders
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {board.directors
                .filter((m) => m.name === 'Matt McMahon' || m.name === 'Pablo Herrera')
                .map((member) => (
                  <Card key={member.name}>
                    <div className="mb-4">
                      <Avatar name={member.name} src={member.headshot} size="lg" />
                    </div>
                    <p className="font-sans font-semibold">{member.name}</p>
                    <p className="font-sans text-sm text-charcoal/50">{member.role || member.title}</p>
                    <p className="mt-2 text-sm text-charcoal/60">
                      {member.name === 'Matt McMahon'
                        ? 'Former President of McMahon Restaurant Group, where he opened 24 Outback Steakhouses across Arizona and New Mexico. Now leads NCOMA’s mission to bring science-based oil management to every commercial kitchen in America.'
                        : 'Built the Oil Atlas, designed the certification framework, and launched The Oil Insurgency — the campaign to force transparency into every commercial fryer in America.'}
                    </p>
                  </Card>
                ))}
            </div>
          </div>

        </Container>
      </Section>
    </main>
  )
}
