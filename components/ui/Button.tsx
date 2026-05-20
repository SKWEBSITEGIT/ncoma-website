import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const styles = {
  primary: 'bg-amber text-white hover:bg-amber-dark',
  secondary: 'bg-charcoal text-white hover:bg-charcoal/90',
  outline: 'border border-charcoal/20 text-charcoal hover:border-charcoal/40',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center font-sans font-medium tracking-wide transition-colors ${styles[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
