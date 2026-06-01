import { Container, Button } from '@/components/ui'

type CTABannerProps = {
  variant?: 'dark' | 'amber' | 'light'
  heading?: string
  subheading?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

const variants = {
  dark: {
    wrapper: 'bg-charcoal text-white',
    heading: 'text-white',
    sub: 'text-white/70',
    primary: { variant: 'primary' as const },
    secondary: { variant: 'outline' as const, className: 'border-white/30 text-white hover:border-white/60' },
  },
  amber: {
    wrapper: 'bg-amber text-white',
    heading: 'text-white',
    sub: 'text-white/90',
    primary: { variant: 'secondary' as const },
    secondary: { variant: 'outline' as const, className: 'border-white/40 text-white hover:border-white' },
  },
  light: {
    wrapper: 'bg-offwhite text-charcoal border-y border-charcoal/10',
    heading: 'text-charcoal',
    sub: 'text-charcoal/60',
    primary: { variant: 'primary' as const },
    secondary: { variant: 'outline' as const, className: '' },
  },
}

export function CTABanner({
  variant = 'amber',
  heading = 'Ready to certify your kitchen?',
  subheading = 'Join the standard American kitchens have been missing. Get your WIYO! seal today.',
  primaryLabel = 'Get Certified',
  primaryHref = '/operators#get-certified',
  secondaryLabel = 'Contact Us',
  secondaryHref = '/contact',
}: CTABannerProps) {
  const v = variants[variant]

  return (
    <section className={`py-16 md:py-20 ${v.wrapper}`}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold md:text-4xl ${v.heading}`}>
            {heading}
          </h2>
          {subheading && (
            <p className={`mx-auto mt-4 max-w-lg text-lg ${v.sub}`}>
              {subheading}
            </p>
          )}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={primaryHref} size="lg" {...v.primary}>
              {primaryLabel}
            </Button>
            {secondaryLabel && (
              <Button href={secondaryHref} size="lg" {...v.secondary}>
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
