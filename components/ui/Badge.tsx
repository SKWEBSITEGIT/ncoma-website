const variants = {
  default: 'bg-charcoal/10 text-charcoal',
  amber: 'bg-amber/10 text-amber-dark',
  bronze: 'bg-bronze/10 text-bronze',
  silver: 'bg-silver/10 text-charcoal',
  gold: 'bg-gold/10 text-amber-dark',
  olive: 'bg-olive/10 text-olive',
}

export function Badge({
  children,
  variant = 'default',
  className = '',
}: {
  children: React.ReactNode
  variant?: keyof typeof variants
  className?: string
}) {
  return (
    <span
      className={`inline-block font-sans text-xs font-semibold uppercase tracking-wider ${variants[variant]} px-3 py-1 ${className}`}
    >
      {children}
    </span>
  )
}
