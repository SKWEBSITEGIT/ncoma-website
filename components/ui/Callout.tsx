const variants = {
  default: 'border-l-amber bg-amber/5',
  warning: 'border-l-red-600 bg-red-50',
  info: 'border-l-olive bg-olive/5',
}

export function Callout({
  children,
  variant = 'default',
  className = '',
}: {
  children: React.ReactNode
  variant?: keyof typeof variants
  className?: string
}) {
  return (
    <div className={`border-l-4 px-6 py-4 ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}
