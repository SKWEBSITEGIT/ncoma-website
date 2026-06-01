import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container, Section, Eyebrow } from '@/components/ui'
import { getFieldNotes, getFieldNote } from '@/lib/content'
import { ArticleBody } from '@/components/ArticleBody'

export function generateStaticParams() {
  return getFieldNotes().map((a) => ({ slug: a.meta.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const article = getFieldNote(slug)
    return {
      title: article ? article.meta.title : 'Not Found',
      description: article?.meta.excerpt || undefined,
    }
  })
}

export default async function FieldNoteDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getFieldNote(slug)
  if (!article) notFound()

  const { meta, content } = article

  return (
    <main>
      <Section className="pt-20 md:pt-28">
        <Container size="sm">
          <p className="font-sans text-sm text-charcoal/50">
            <Link href="/field-notes" className="hover:text-amber transition-colors">Field Notes</Link>
            <span className="mx-2">/</span>
            {meta.category}
          </p>
          <Eyebrow className="mt-4">{meta.category}</Eyebrow>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">{meta.title}</h1>
          <div className="mt-4 flex items-center gap-3 font-sans text-sm text-charcoal/50">
            <span>{meta.author}</span>
            <span>·</span>
            <time>{new Date(meta.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
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
