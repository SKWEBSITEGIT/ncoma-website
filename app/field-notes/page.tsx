import Link from 'next/link'
import { Container, Section, Eyebrow } from '@/components/ui'
import { HeroImage } from '@/components/HeroImage'
import { IMAGES } from '@/lib/images'
import { FadeIn } from '@/components/AnimatedSection'
import { CTABanner } from '@/components/CTABanner'
import { getFieldNotes } from '@/lib/content'

export const metadata = { title: 'Field Notes' }

export default function FieldNotesIndex() {
  const articles = getFieldNotes()

  return (
    <main>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden">
        <HeroImage src={IMAGES.scientificResearch} alt="Scientific research and oil analysis" className="absolute inset-0" overlay="dark" />
        <Container size="md" className="relative z-10 pb-12 pt-28 md:pb-16">
          <p className="animate-hero-1 font-sans text-xs font-semibold uppercase tracking-widest text-amber">Field Notes</p>
          <h1 className="animate-hero-2 mt-2 text-4xl font-bold text-white md:text-5xl">Science for the kitchen.</h1>
          <p className="animate-hero-3 mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            Oil chemistry, degradation science, filtration, and best
            practices — written for operators, not academics.
          </p>
        </Container>
      </section>

      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <div className="space-y-8">
            {articles.map((article) => (
              <FadeIn key={article.meta.slug}>
              <Link
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
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        variant="light"
        heading="Ready to put the science into practice?"
        subheading="NCOMA certification is built on the same research you just read. Get your kitchen certified."
        primaryLabel="Get Certified →"
        primaryHref="/operators#get-certified"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </main>
  )
}
