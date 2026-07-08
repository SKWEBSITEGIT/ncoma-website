'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui'

type NavItem = {
  label: string
  href?: string
  children?: { label: string; href: string; desc?: string }[]
}

const navItems: NavItem[] = [
  { label: 'The Seal', href: '/seal' },
  {
    label: 'Who It’s For',
    children: [
      { label: 'For Operators', href: '/operators', desc: 'Certification, testing & oil management' },
      { label: 'For Consumers', href: '/consumers', desc: 'What’s in your food?' },
    ],
  },
  {
    label: 'Learn',
    children: [
      { label: 'Field Notes', href: '/field-notes', desc: 'Science, data & industry deep-dives' },
      { label: 'Oil Atlas', href: '/atlas', desc: 'Global frying oil regulations map' },
      { label: 'Reports', href: '/reports', desc: 'Research & survey findings' },
    ],
  },
  { label: 'About', href: '/about' },
]

const allLinks = navItems.flatMap((item) =>
  item.children ? item.children.map((c) => ({ label: c.label, href: c.href })) : [{ label: item.label, href: item.href! }]
)

function Dropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timeout = useRef<NodeJS.Timeout | null>(null)

  const hasActiveChild = item.children?.some((c) => pathname === c.href)

  const handleEnter = () => {
    if (timeout.current) clearTimeout(timeout.current)
    setOpen(true)
  }

  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150)
  }

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={`relative flex items-center gap-1 py-5 transition-colors ${
          hasActiveChild
            ? 'text-charcoal font-semibold'
            : 'text-charcoal/60 hover:text-charcoal'
        }`}
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
        {hasActiveChild && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-1"
          >
            <div className="min-w-[220px] rounded-lg border border-charcoal/8 bg-white p-2 shadow-lg shadow-charcoal/5">
              {item.children?.map((child) => {
                const isActive = pathname === child.href
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2.5 transition-colors ${
                      isActive
                        ? 'bg-amber/8 text-charcoal'
                        : 'text-charcoal/70 hover:bg-charcoal/4 hover:text-charcoal'
                    }`}
                  >
                    <span className={`block text-sm ${isActive ? 'font-semibold' : 'font-medium'}`}>
                      {child.label}
                    </span>
                    {child.desc && (
                      <span className="block text-xs text-charcoal/40 mt-0.5">
                        {child.desc}
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/5 backdrop-blur-md bg-offwhite/90">
      <div className="mx-auto flex h-16 max-w-[80rem] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-charcoal">
          <Image src="/images/ncoma-logo.png" alt="NCOMA" width={40} height={40} className="h-10 w-10" />
          NCOMA
        </Link>

        <nav className="hidden items-center gap-7 font-sans text-sm lg:flex">
          {navItems.map((item) => {
            if (item.children) {
              return <Dropdown key={item.label} item={item} pathname={pathname} />
            }

            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href!}
                className={`relative py-5 transition-colors ${
                  isActive
                    ? 'text-charcoal font-semibold'
                    : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" variant="outline" size="sm">
            Contact
          </Button>
          <Button href="/operators#get-certified" size="md" className="animate-pulse-subtle">
            Get Certified →
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-offwhite lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pt-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06 } },
                }}
              >
                {allLinks.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.div
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`block border-b border-charcoal/5 py-3 text-xl font-bold ${
                          isActive ? 'text-charcoal' : 'text-charcoal/60'
                        }`}
                      >
                        {item.label}
                        {isActive && (
                          <span className="ml-3 inline-block h-2 w-2 rounded-full bg-amber" />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: allLinks.length * 0.06 + 0.1, duration: 0.3 }}
                className="mt-8 space-y-3"
              >
                <Button href="/operators#get-certified" size="lg" className="w-full">
                  Get Certified →
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="w-full">
                  Contact Us
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
