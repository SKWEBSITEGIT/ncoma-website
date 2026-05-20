export function Container({
  children,
  className = '',
  size = 'lg',
}: {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}) {
  const widths = {
    sm: 'max-w-[40rem]',
    md: 'max-w-[48rem]',
    lg: 'max-w-[64rem]',
    xl: 'max-w-[80rem]',
  }
  return (
    <div className={`mx-auto w-full px-6 ${widths[size]} ${className}`}>
      {children}
    </div>
  )
}
