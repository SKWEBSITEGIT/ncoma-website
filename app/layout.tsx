import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'NCOMA — National Cooking Oil Management Association',
    template: '%s | NCOMA',
  },
  description:
    'The first industry-built certification for cooking oil management in American commercial kitchens. Know your oil.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
