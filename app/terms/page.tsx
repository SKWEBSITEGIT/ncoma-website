import type { Metadata } from 'next'
import { Container, Section } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'NCOMA terms of use for whatisinyouroil.com.',
}

export default function Terms() {
  return (
    <main>
      <Section className="pt-20 md:pt-28">
        <Container size="md">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-amber">Legal</p>
          <h1 className="mt-2 text-4xl font-bold">Terms of Use</h1>
          <p className="mt-2 text-sm text-charcoal/40">Effective June 1, 2026</p>

          <div className="mt-10 space-y-8 text-charcoal/70 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-charcoal [&_p]:mt-2 [&_p]:leading-relaxed [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">

            <section>
              <h2>Acceptance of terms</h2>
              <p>
                By accessing and using whatisinyouroil.com (&ldquo;the Site&rdquo;), operated by the
                National Cooking Oil Management Association (&ldquo;NCOMA&rdquo;), you agree to be
                bound by these Terms of Use. If you do not agree, do not use the Site.
              </p>
            </section>

            <section>
              <h2>Use of the site</h2>
              <p>The Site is provided for informational and educational purposes. You agree to:</p>
              <ul>
                <li>Use the Site only for lawful purposes</li>
                <li>Not attempt to interfere with the Site&apos;s operation or security</li>
                <li>Not scrape, reproduce, or redistribute content without permission</li>
                <li>Provide accurate information when submitting forms or applications</li>
              </ul>
            </section>

            <section>
              <h2>Intellectual property</h2>
              <p>
                All content on this Site — including text, data, graphics, the WIYO! seal
                design, certification frameworks, and the Oil Atlas — is the property of
                NCOMA or its licensors and is protected by copyright and trademark law.
                You may not reproduce, distribute, or create derivative works without
                written permission.
              </p>
            </section>

            <section>
              <h2>WIYO! certification marks</h2>
              <p>
                The WIYO! seal and associated certification tier designations (Bronze,
                Silver, Gold) are proprietary marks of NCOMA. Use of these marks is
                restricted to certified operators in good standing. Unauthorized use of
                certification marks is prohibited.
              </p>
            </section>

            <section>
              <h2>Disclaimer of warranties</h2>
              <p>
                The Site and its content are provided &ldquo;as is&rdquo; without warranties of any
                kind, express or implied. NCOMA does not warrant that the Site will be
                uninterrupted, error-free, or free of harmful components. Information
                on the Site, including oil data and scientific references, is for
                educational purposes and does not constitute professional advice.
              </p>
            </section>

            <section>
              <h2>Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, NCOMA shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages
                arising from your use of the Site or reliance on its content.
              </p>
            </section>

            <section>
              <h2>Third-party links</h2>
              <p>
                The Site may contain links to third-party websites. NCOMA is not
                responsible for the content or practices of linked sites.
              </p>
            </section>

            <section>
              <h2>Changes to these terms</h2>
              <p>
                NCOMA reserves the right to modify these terms at any time. Continued
                use of the Site after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2>Governing law</h2>
              <p>
                These terms are governed by the laws of the State of Arizona without
                regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                Questions about these terms? Email{' '}
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
