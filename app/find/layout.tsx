import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Certified Operators',
  description:
    'Search the WIYO! certified operator directory. Find restaurants and kitchens that manage their frying oil to the NCOMA standard.',
}

export default function FindLayout({ children }: { children: React.ReactNode }) {
  return children
}
