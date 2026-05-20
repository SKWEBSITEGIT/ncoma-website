'use client'

import { motion } from 'motion/react'

export { IMAGES } from '@/lib/images'

interface HeroImageProps {
  src: string
  alt: string
  className?: string
  overlay?: boolean
}

export function HeroImage({ src, alt, className = '', overlay = true }: HeroImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {overlay && (
        <div className="absolute inset-0 bg-charcoal/60" />
      )}
    </motion.div>
  )
}

export function InlineImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-lg ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
    </motion.div>
  )
}
