'use client'

import { useState } from 'react'

export function FooterNewsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

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
      // Mark as subscribed so popup doesn't show
      if (typeof window !== 'undefined') {
        localStorage.setItem('ncoma-newsletter-dismissed', 'subscribed')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3">
        <svg className="h-5 w-5 shrink-0 text-olive-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <p className="font-sans text-sm text-white">
          You&apos;re subscribed. Check your inbox for a welcome email.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="h-10 w-full max-w-xs border border-white/15 bg-white/5 px-3 font-sans text-sm text-white placeholder:text-white/30 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber/30 sm:w-64"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="h-10 shrink-0 bg-amber px-5 font-sans text-sm font-semibold text-white transition-colors hover:bg-amber-dark disabled:opacity-60"
      >
        {status === 'sending' ? 'Joining...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className="absolute mt-12 font-sans text-xs text-red-400">{errorMsg}</p>
      )}
    </form>
  )
}
