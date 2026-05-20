'use client'

import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  value: string
  label: string
  source: string
}

function CountNumber({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 1.8, ease: [0.22, 1, 0.36, 1] })
    }
  }, [isInView, count, target])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = String(v)
      }
    })
    return unsubscribe
  }, [rounded])

  return <span ref={ref}>0</span>
}

export function AnimatedCounter({ value, label, source }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  // Parse the value to see if it has a pure number we can animate
  const numMatch = value.match(/^(\d+)(.*)$/)
  const hasAnimatableNumber = numMatch && !value.includes('–')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-4xl font-bold text-amber md:text-5xl">
        {hasAnimatableNumber ? (
          <>
            <CountNumber target={parseInt(numMatch[1])} />
            {numMatch[2]}
          </>
        ) : (
          value
        )}
      </p>
      <p className="mt-2 text-sm text-white/70">{label}</p>
      <p className="mt-1 font-sans text-xs text-white/30">{source}</p>
    </motion.div>
  )
}
