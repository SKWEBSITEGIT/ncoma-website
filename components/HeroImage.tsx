'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export { IMAGES } from '@/lib/images'

interface HeroImageProps {
  src: string
  alt: string
  className?: string
  overlay?: 'gradient' | 'dark' | 'light' | false
  priority?: boolean
}

const overlayClasses = {
  gradient: 'bg-gradient-to-t from-charcoal/90 via-charcoal/70 to-charcoal/40',
  dark: 'bg-charcoal/80',
  light: 'bg-charcoal/50',
}

export function HeroImage({ src, alt, className = '', overlay = 'gradient', priority = true }: HeroImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" priority={priority} />
      {overlay && (
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
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
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
    </motion.div>
  )
}
