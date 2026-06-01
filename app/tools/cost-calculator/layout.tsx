import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cost-Per-Cycle Calculator',
  description:
    'Calculate the true cost of your frying oil per cycle. Compare oils, factor in filtration, and find where the money goes.',
}

export default function CostCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children
}
