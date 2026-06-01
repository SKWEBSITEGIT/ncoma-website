import type { Metadata } from 'next'
import { Container, Section } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'NCOMA privacy policy. How we collect, use, and protect your information.',
}

export default function Privacy() {
  return (
    <main>
      <Section className="pt-20 md:pt-28">
        <Container size="md">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-amber">Legal</p>
          <h1 className="mt-2 text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-charcoal/40">Effective June 1, 2026</p>

          <div className="mt-10 space-y-8 text-charcoal/70 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-charcoal [&_p]:mt-2 [&_p]:leading-relaxed [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">

            <section>
              <h2>Who we are</h2>
              <p>
                The National Cooking Oil Management Association (&ldquo;NCOMA,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) operates the website
                whatisinyouroil.com. This policy explains how we collect, use, and
                protect information when you visit our site or use our services.
              </p>
            </section>

            <section>
              <h2>Information we collect</h2>
              <p>We collect information you provide directly:</p>
              <ul>
                <li>Contact form submissions (name, email, message)</li>
                <li>Certification applications and related documentation</li>
                <li>Email correspondence</li>
              </ul>
              <p>We may also collect standard technical data:</p>
              <ul>
                <li>Browser type, device type, and operating system</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring URL</li>
              </ul>
            </section>

            <section>
              <h2>How we use your information</h2>
              <ul>
                <li>To respond to your inquiries and provide requested services</li>
                <li>To process and manage certification applications</li>
                <li>To improve our website and services</li>
                <li>To send relevant updates about NCOMA programs (only if you opt in)</li>
              </ul>
            </section>

            <section>
              <h2>Information sharing</h2>
              <p>
                We do not sell, rent, or trade your personal information. We may share
                information with service providers who assist in operating our website
                (e.g., email delivery, hosting) under strict confidentiality agreements.
              </p>
            </section>

            <section>
              <h2>Cookies</h2>
              <p>
                This site uses only essential cookies required for basic functionality.
                We do not use advertising cookies or third-party tracking cookies.
              </p>
            </section>

            <section>
              <h2>Data retention</h2>
              <p>
                We retain contact form submissions and correspondence for as long as
                necessary to fulfill the purpose for which they were collected.
                Certification records are retained for the duration of the certification
                period plus three years.
              </p>
            </section>

            <section>
              <h2>Your rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal
                information at any time by contacting us at{' '}
                <a href="mailto:info@whatisinyouroil.com" className="text-amber hover:underline">
                  info@whatisinyouroil.com
                </a>.
              </p>
            </section>

            <section>
              <h2>Changes to this policy</h2>
              <p>
                We may update this policy from time to time. Changes will be posted on
                this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                Questions about this policy? Email{' '}
                <a href="mailto:info@whatisinyouroil.com" className="text-amber hover:underline">
                  info@whatisinyouroil.com
                </a>{' '}
                or write to: NCOMA, 5355 N 51st Ave #1, Glendale, AZ 85301.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  )
}
