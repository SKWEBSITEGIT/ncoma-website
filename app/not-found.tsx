import { Container, Section, Button } from '@/components/ui'

export default function NotFound() {
  return (
    <main>
      <Section className="flex min-h-[60vh] items-center pt-20 md:pt-28">
        <Container size="sm" className="text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-amber">404</p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Page not found</h1>
          <p className="mx-auto mt-4 max-w-md text-charcoal/60">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/">Back to Home</Button>
            <Button href="/contact" variant="outline">Contact Us</Button>
          </div>
        </Container>
      </Section>
    </main>
  )
}
