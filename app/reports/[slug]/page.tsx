import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container, Section, Eyebrow } from '@/components/ui'
import { getReports, getReport } from '@/lib/content'
import { ArticleBody } from '@/components/ArticleBody'

export function generateStaticParams() {
  return getReports().map((a) => ({ slug: a.meta.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const report = getReport(slug)
    return { title: report ? report.meta.title : 'Not Found' }
  })
}

export default async function ReportDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const report = getReport(slug)
  if (!report) notFound()

  const { meta, content } = report

  return (
    <main>
      <Section className="pt-20 md:pt-28">
        <Container size="sm">
          <p className="font-sans text-sm text-charcoal/50">
            <Link href="/reports" className="hover:text-amber transition-colors">Reports</Link>
            <span className="mx-2">/</span>
            {meta.category}
          </p>
          <Eyebrow className="mt-4">{meta.category}</Eyebrow>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">{meta.title}</h1>
          {meta.subtitle && (
            <p className="mt-2 text-lg text-charcoal/50">{meta.subtitle}</p>
          )}
          <div className="mt-4 flex items-center gap-3 font-sans text-sm text-charcoal/50">
            <span>{meta.author}</span>
            <span>·</span>
            <time>{new Date(meta.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</time>
            <span>·</span>
            <span>{meta.readTime}</span>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-charcoal/10">
        <Container size="sm">
          <ArticleBody content={content} />
        </Container>
      </Section>
    </main>
  )
}
