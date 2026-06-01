'use client'

import Link from 'next/link'

const columns = [
  {
    title: 'Certification',
    links: [
      { label: 'The WIYO! Seal', href: '/seal' },
      { label: 'For Operators', href: '/operators' },
      { label: 'For Consumers', href: '/consumers' },
      { label: 'Find Certified', href: '/find' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Oil Atlas', href: '/atlas' },
      { label: 'Cost Calculator', href: '/tools/cost-calculator' },
      { label: 'Field Notes', href: '/field-notes' },
      { label: 'Reports', href: '/reports' },
    ],
  },
  {
    title: 'Organization',
    links: [
      { label: 'About NCOMA', href: '/about' },
      { label: 'Contact & Press', href: '/contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-white/70">
      <div className="mx-auto max-w-[80rem] px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <p className="text-xl font-bold text-white">NCOMA</p>
            <p className="mt-3 text-sm leading-relaxed">
              The National Cooking Oil Management Association. The standard
              American kitchens have been missing.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-olive-light">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-sm font-medium text-white">
                Stay informed
              </p>
              <p className="mt-1 text-sm">
                Oil science, certification updates, and industry research.
              </p>
            </div>
            <p className="font-sans text-sm">
              Follow updates at{' '}
              <a href="mailto:info@whatisinyouroil.com" className="text-white underline hover:text-amber">
                info@whatisinyouroil.com
              </a>
            </p>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 font-sans text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} National Cooking Oil Management Association. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white/60">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white/60">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
