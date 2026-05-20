'use client'

import { useState } from 'react'

interface AvatarProps {
  name: string
  src?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'h-16 w-16 text-xl',
  md: 'h-20 w-20 text-2xl',
  lg: 'h-28 w-28 text-3xl',
}

export function Avatar({ name, src, size = 'md' }: AvatarProps) {
  const [imgError, setImgError] = useState(false)
  const initials = name.split(' ').map(n => n[0]).join('')
  const sizeClass = sizes[size]

  if (src && !imgError) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={name}
        className={`${sizeClass} rounded-full object-cover`}
        onError={() => setImgError(true)}
      />
    )
  }

  return (
    <div className={`${sizeClass} flex items-center justify-center rounded-full bg-amber/10 font-bold text-amber`}>
      {initials}
    </div>
  )
}
