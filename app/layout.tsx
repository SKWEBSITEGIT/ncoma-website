import type { Metadata } from 'next'
import { Source_Serif_4, Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

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
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
