export function Section({
  children,
  className = '',
  id,
  size = 'default',
}: {
  children: React.ReactNode
  className?: string
  id?: string
  size?: 'tight' | 'default' | 'spacious'
}) {
  const padding = {
    tight: 'py-8 md:py-12',
    default: 'py-16 md:py-24',
    spacious: 'py-24 md:py-36',
  }
  return (
    <section id={id} className={`${padding[size]} ${className}`}>
      {children}
    </section>
  )
}
