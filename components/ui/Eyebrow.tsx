export function Eyebrow({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={`font-sans text-sm font-medium uppercase tracking-widest text-amber ${className}`}
    >
      {children}
    </p>
  )
}
