import Link from 'next/link'
import { Container, Section, Eyebrow } from '@/components/ui'
import { getReports } from '@/lib/content'

export const metadata = { title: 'Reports' }

export default function ReportsIndex() {
  const reports = getReports()

  return (
    <main>
      <Section className="pt-20 md:pt-28">
        <Container size="md">
          <Eyebrow>Reports</Eyebrow>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Research and industry data.
          </h1>
          <p className="mt-6 text-lg text-charcoal/70">
            NCOMA publishes original research on oil management practices,
            cost economics, and frying science. These reports inform the
            standard and make the case for managed oil.
          </p>
        </Container>
      </Section>

      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <div className="space-y-8">
            {reports.map((report) => (
              <Link
                key={report.meta.slug}
                href={`/reports/${report.meta.slug}`}
                className="block border border-charcoal/10 bg-white p-6 transition-colors hover:border-amber/40"
              >
                <div className="flex items-center gap-3 font-sans text-xs text-charcoal/40">
                  <span>{report.meta.category}</span>
                  <span>·</span>
                  <time>{new Date(report.meta.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</time>
                  <span>·</span>
                  <span>{report.meta.readTime}</span>
                </div>
                <h2 className="mt-2 text-2xl font-bold">{report.meta.title}</h2>
                {report.meta.subtitle && (
                  <p className="mt-1 font-sans text-sm text-charcoal/50">{report.meta.subtitle}</p>
                )}
                <p className="mt-3 text-charcoal/60">{report.meta.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}
