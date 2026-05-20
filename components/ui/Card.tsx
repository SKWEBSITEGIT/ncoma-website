export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`border border-charcoal/10 bg-white p-6 ${className}`}>
      {children}
    </div>
  )
}
