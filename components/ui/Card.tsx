const variants = {
  default: 'border border-charcoal/10 bg-white p-6',
  elevated: 'border border-charcoal/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow',
  stat: 'bg-charcoal/5 p-8 text-center',
  profile: 'relative bg-white p-6 text-center before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-amber',
} as const

export function Card({
  children,
  className = '',
  variant = 'default',
}: {
  children: React.ReactNode
  className?: string
  variant?: keyof typeof variants
}) {
  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}
