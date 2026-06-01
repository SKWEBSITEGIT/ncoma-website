import Link from 'next/link'
import { Container, Section, Eyebrow } from '@/components/ui'
import { HeroImage, InlineImage } from '@/components/HeroImage'
import { IMAGES } from '@/lib/images'
import { FadeIn } from '@/components/AnimatedSection'
import { getReports } from '@/lib/content'

export const metadata = {
  title: 'Reports',
  description: 'NCOMA research reports — the 2026 State of the Fryer survey, cost-per-cycle analysis, and original data on how American restaurants manage their frying oil.',
}

const reportImages: Record<string, string> = {
  'oil-atlas': IMAGES.worldMap,
  'cost-per-cycle': IMAGES.analytics,
  'degradation-pathways': IMAGES.laboratory,
}

export default function ReportsIndex() {
  const reports = getReports()

  return (
    <main>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden">
        <HeroImage src={IMAGES.analytics} alt="Data analytics and research" className="absolute inset-0" overlay="dark" />
        <Container size="md" className="relative z-10 pb-12 pt-28 md:pb-16">
          <p className="animate-hero-1 font-sans text-xs font-semibold uppercase tracking-widest text-amber">Reports</p>
          <h1 className="animate-hero-2 mt-2 text-4xl font-bold text-white md:text-5xl">Research and industry data.</h1>
          <p className="animate-hero-3 mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            Original research on oil management, cost economics, and frying
            science. Data that makes the case for managed oil.
          </p>
        </Container>
      </section>

      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <div className="space-y-8">
            {reports.map((report) => (
              <FadeIn key={report.meta.slug}>
              <Link
                href={`/reports/${report.meta.slug}`}
                className="block overflow-hidden border border-charcoal/10 bg-white transition-colors hover:border-amber/40"
              >
                {reportImages[report.meta.slug] && (
                  <InlineImage
                    src={reportImages[report.meta.slug]}
                    alt={report.meta.title}
                    className="aspect-[3/1]"
                  />
                )}
                <div className="p-6">
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
                </div>
              </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}
