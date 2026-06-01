'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

const STORAGE_KEY = 'ncoma-newsletter-dismissed'
const DELAY_MS = 10000 // Show after 10 seconds

export function NewsletterPopup() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (dismissed) return

    const timer = setTimeout(() => setShow(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    setShow(false)
    localStorage.setItem(STORAGE_KEY, Date.now().toString())
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to subscribe')
      }

      setStatus('success')
      localStorage.setItem(STORAGE_KEY, 'subscribed')
      setTimeout(() => setShow(false), 4000)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-[6px]"
            onClick={dismiss}
          />

          {/* Modal — centered with fixed positioning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-1/2 z-[61] w-[calc(100%-2rem)] max-w-[820px] -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] overflow-y-auto"
          >
            <div className="relative overflow-hidden rounded-lg bg-white shadow-[0_25px_60px_-12px_rgba(0,0,0,0.4)]">
              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white/80 backdrop-blur-sm transition-all hover:bg-black/60 hover:text-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Left — Image panel (hidden on mobile, shown on md+) */}
                <div className="relative hidden w-[45%] shrink-0 md:block">
                  <Image
                    src={IMAGES.deepFryer}
                    alt="Commercial deep fryer"
                    fill
                    className="object-cover"
                    sizes="400px"
                    priority
                  />
                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                  {/* Overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-amber">
                      The standard is here
                    </p>
                    <p className="mt-2 text-xl font-bold leading-snug text-white">
                      Better oil.<br />Better food.<br />Better business.
                    </p>
                  </div>
                </div>

                {/* Right — Content + Form */}
                <div className="flex-1">
                  {/* Mobile-only top image strip */}
                  <div className="relative h-36 md:hidden">
                    <Image
                      src={IMAGES.deepFryer}
                      alt="Commercial deep fryer"
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
                  </div>

                  <div className="px-6 pb-7 pt-6 md:px-8 md:pb-8 md:pt-8">
                    {/* Heading */}
                    <div className="mb-1 h-0.5 w-10 bg-amber" />
                    <h2 className="mt-3 text-[22px] font-bold leading-tight text-charcoal md:text-[26px]">
                      Your frying oil is costing you<br className="hidden md:block" /> more than you think.
                    </h2>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-charcoal/55">
                      Join operators and food-safety professionals getting the data
                      on oil management, filtration, and certification.
                    </p>

                    {/* Value props */}
                    <div className="mt-5 space-y-3">
                      {[
                        'Oil degradation science and TPM testing',
                        'Cost-per-cycle economics and savings data',
                        'WIYO! certification updates and standards',
                        'Filtration best practices and equipment',
                      ].map((text) => (
                        <div key={text} className="flex items-center gap-3">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/10">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber" />
                          </div>
                          <p className="font-sans text-[13px] leading-snug text-charcoal/65">{text}</p>
                        </div>
                      ))}
                    </div>

                    {/* Form or success */}
                    {status === 'success' ? (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 rounded-md bg-olive/8 p-5 text-center"
                      >
                        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-olive/15">
                          <svg className="h-5 w-5 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="mt-3 text-base font-bold text-charcoal">You&apos;re in.</p>
                        <p className="mt-1 text-xs text-charcoal/50">
                          Check your inbox for a welcome email.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="mt-6">
                        <div className="flex gap-2">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="h-11 flex-1 rounded-md border border-charcoal/12 bg-gray-50 px-4 font-sans text-sm text-charcoal placeholder:text-charcoal/35 focus:border-amber focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber/20"
                          />
                          <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="h-11 shrink-0 rounded-md bg-amber px-5 font-sans text-sm font-semibold text-white shadow-sm transition-all hover:bg-amber-dark hover:shadow-md active:scale-[0.98] disabled:opacity-60"
                          >
                            {status === 'sending' ? (
                              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                            ) : (
                              'Subscribe'
                            )}
                          </button>
                        </div>

                        {status === 'error' && (
                          <p className="mt-2 font-sans text-xs text-red-600">{errorMsg}</p>
                        )}

                        <p className="mt-3 font-sans text-[11px] text-charcoal/30">
                          Free. No spam. Unsubscribe anytime.{' '}
                          <a href="/privacy" className="underline transition-colors hover:text-charcoal/50">
                            Privacy Policy
                          </a>
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
