'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui'

const nav = [
  { label: 'The Seal', href: '/seal' },
  { label: 'For Operators', href: '/operators' },
  { label: 'For Consumers', href: '/consumers' },
  { label: 'Oil Atlas', href: '/atlas' },
  { label: 'Field Notes', href: '/field-notes' },
  { label: 'Reports', href: '/reports' },
  { label: 'About', href: '/about' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/5 bg-offwhite/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[80rem] items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          NCOMA
        </Link>

        <nav className="hidden items-center gap-8 font-sans text-sm lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-charcoal/60 transition-colors hover:text-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/operators#get-certified" size="sm">
            Get Certified
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-offwhite lg:hidden">
          <nav className="flex flex-col gap-1 px-6 pt-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-charcoal/5 py-4 text-2xl font-bold"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8">
              <Button href="/operators#get-certified" size="lg" className="w-full">
                Get Certified
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
