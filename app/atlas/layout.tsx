import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oil Atlas',
  description:
    'Compare every commercial frying oil side by side. Smoke point, fatty acid profile, fry cycles, cost per cycle, and stability data for every oil on the market.',
}

export default function AtlasLayout({ children }: { children: React.ReactNode }) {
  return children
}
