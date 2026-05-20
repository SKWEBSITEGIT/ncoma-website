import Link from 'next/link'
import { Container, Section, Eyebrow } from '@/components/ui'
import { getFieldNotes } from '@/lib/content'

export const metadata = { title: 'Field Notes' }

export default function FieldNotesIndex() {
  const articles = getFieldNotes()

  return (
    <main>
      <Section className="pt-20 md:pt-28">
        <Container size="md">
          <Eyebrow>Field Notes</Eyebrow>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Science for the kitchen.
          </h1>
          <p className="mt-6 text-lg text-charcoal/70">
            Technical articles on oil chemistry, degradation science, filtration,
            and operational best practices — written for operators, not
            academics.
          </p>
        </Container>
      </Section>

      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <div className="space-y-8">
            {articles.map((article) => (
              <Link
                key={article.meta.slug}
                href={`/field-notes/${article.meta.slug}`}
                className="block border-b border-charcoal/5 pb-8 transition-colors hover:border-charcoal/20"
              >
                <div className="flex items-center gap-3 font-sans text-xs text-charcoal/40">
                  <span>{article.meta.category}</span>
                  <span>·</span>
                  <time>{new Date(article.meta.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                  <span>·</span>
                  <span>{article.meta.readTime}</span>
                </div>
                <h2 className="mt-2 text-2xl font-bold">{article.meta.title}</h2>
                <p className="mt-2 text-charcoal/60">{article.meta.excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {article.meta.tags.map((tag) => (
                    <span key={tag} className="font-sans text-xs text-charcoal/30">#{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}
