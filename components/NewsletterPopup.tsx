'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'

const STORAGE_KEY = 'ncoma-newsletter-dismissed'
const DELAY_MS = 8000 // Show after 8 seconds

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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[50%] z-[61] mx-auto max-w-md -translate-y-1/2 sm:inset-x-auto"
          >
            <div className="relative overflow-hidden shadow-2xl">
              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              {/* Dark top section — the hook */}
              <div className="bg-charcoal px-8 pb-8 pt-10">
                {/* Amber accent line */}
                <div className="mb-6 h-0.5 w-12 bg-amber" />

                <h2 className="text-[28px] font-bold leading-tight text-white md:text-[32px]">
                  Do you know what&apos;s<br />
                  <span className="text-amber">in your frying oil?</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  Most restaurants can&apos;t answer that question. We&apos;re changing
                  that with science, standards, and transparency.
                </p>
              </div>

              {/* Content area */}
              <div className="bg-offwhite px-8 pb-8 pt-6">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-6 text-center"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-olive/10">
                      <svg className="h-7 w-7 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="mt-4 text-lg font-bold text-charcoal">You&apos;re in.</p>
                    <p className="mt-1 text-sm text-charcoal/60">
                      Welcome to the oil transparency movement.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* What you get */}
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40">
                      Join the newsletter
                    </p>
                    <div className="mt-3 space-y-2">
                      {[
                        'Oil science and degradation research',
                        'Certification program updates',
                        'Industry data and reports',
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <div className="flex h-4 w-4 shrink-0 items-center justify-center">
                            <div className="h-1 w-1 rounded-full bg-amber" />
                          </div>
                          <p className="font-sans text-xs text-charcoal/60">{item}</p>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit} className="mt-5">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="h-12 w-full border border-charcoal/15 bg-white px-4 font-sans text-sm text-charcoal placeholder:text-charcoal/30 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
                      />
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="mt-3 h-12 w-full bg-charcoal font-sans text-sm font-semibold tracking-wide text-white transition-colors hover:bg-charcoal/90 disabled:opacity-60"
                      >
                        {status === 'sending' ? (
                          <span className="inline-flex items-center gap-2">
                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Subscribing...
                          </span>
                        ) : (
                          'Subscribe'
                        )}
                      </button>

                      {status === 'error' && (
                        <p className="mt-2 font-sans text-xs text-red-600">{errorMsg}</p>
                      )}
                    </form>

                    <p className="mt-4 text-center font-sans text-[11px] text-charcoal/30">
                      No spam. Unsubscribe anytime.{' '}
                      <a href="/privacy" className="underline hover:text-charcoal/50">Privacy Policy</a>
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
