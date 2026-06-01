'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui'

const navGroups = [
  {
    label: 'primary',
    links: [
      { label: 'The Seal', href: '/seal' },
      { label: 'For Operators', href: '/operators' },
      { label: 'For Consumers', href: '/consumers' },
    ],
  },
  {
    label: 'knowledge',
    links: [
      { label: 'Oil Atlas', href: '/atlas' },
      { label: 'Field Notes', href: '/field-notes' },
      { label: 'Reports', href: '/reports' },
    ],
  },
  {
    label: 'info',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

const allLinks = navGroups.flatMap((g) => g.links)

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

        <nav className="hidden items-center font-sans text-sm lg:flex">
          {navGroups.map((group, gi) => (
            <div key={group.label} className="flex items-center">
              {gi > 0 && (
                <div className="mx-5 h-4 border-l border-charcoal/10" />
              )}
              <div className="flex items-center gap-6">
                {group.links.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
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
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" variant="outline" size="sm">
            Contact Us
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
