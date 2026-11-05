'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const tiers = [
  {
    id: 'bronze',
    name: 'Bronze',
    tagline: 'Seedless Cooking Oil',
    subtitle: 'Better oil in the fryer',
    color: '#CD7F32',
    bgGradient: 'from-[#CD7F32]/10 to-[#CD7F32]/5',
    borderColor: 'border-[#CD7F32]',
    textColor: 'text-[#CD7F32]',
    sealLabel: 'NCOMA™ Bronze',
    description: 'Food service operation using seedless cooking oil, such as Colombian Seedless Palm Oil (a fruit oil pressed from the flesh of the palm fruit, not extracted from a seed), for its fried menu items. The seedless oil must be certified HOPO, Non-GMO, Sustainable and Kosher.',
    features: [
      { text: 'NCOMA™ Bronze seal displayed', included: true },
      { text: 'Seedless cooking oil in the fryer', included: true },
      { text: 'Oil certified HOPO, Non-GMO, Sustainable and Kosher', included: true },
    ],
    notIncluded: [
      'Fryer oil filtered at least twice a day',
      'TPM tracking and measurement',
    ],
  },
  {
    id: 'silver',
    name: 'Silver',
    tagline: 'Oil Filtration',
    subtitle: 'Fryer oil filtered twice a day',
    color: '#A8A9AD',
    bgGradient: 'from-[#71767C]/10 to-[#71767C]/5',
    borderColor: 'border-[#A8A9AD]',
    textColor: 'text-[#71767C]',
    sealLabel: 'NCOMA™ Silver',
    description: 'Food service operation that filters its fryer cooking oil at least twice a day using proper filtration procedures, such as Zeco filtration (the patented Positive Seal system that eliminates filter bypass).',
    features: [
      { text: 'NCOMA™ Silver seal displayed', included: true },
      { text: 'Fryer oil filtered at least twice a day', included: true },
    ],
    notIncluded: [
      'Seedless cooking oil',
      'TPM tracking and measurement',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    tagline: 'Oil + Filtration',
    subtitle: 'Bronze and Silver together',
    color: '#D4AF37',
    bgGradient: 'from-[#D4AF37]/10 to-[#D4AF37]/5',
    borderColor: 'border-[#D4AF37]',
    textColor: 'text-[#D4AF37]',
    sealLabel: 'NCOMA™ Gold',
    description: 'Food service operation that shows complete practice of both the Bronze and Silver standards: seedless cooking oil in the fryer, and fryer oil filtered at least twice a day.',
    features: [
      { text: 'NCOMA™ Gold seal displayed', included: true },
      { text: '1. Seedless cooking oil', included: true },
      { text: '2. Fryer oil filtered at least twice a day', included: true },
    ],
    notIncluded: [
      'TPM tracking and measurement',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum',
    tagline: 'Total Oil Management',
    subtitle: 'Oil + filtration + TPM',
    color: '#7F8C99',
    bgGradient: 'from-[#7F8C99]/10 to-[#7F8C99]/5',
    borderColor: 'border-[#7F8C99]',
    textColor: 'text-[#7F8C99]',
    sealLabel: 'NCOMA™ Platinum',
    description: 'Food service operation that practices the Bronze, Silver and Gold standards and also manages its oil by tracking and measuring TPM (Total Polar Materials). A Platinum operator can show complete oil management practices, so every fried item is served to the highest health and safety standards.',
    features: [
      { text: 'NCOMA™ Platinum seal displayed', included: true },
      { text: '1. Seedless cooking oil', included: true },
      { text: '2. Fryer oil filtered at least twice a day', included: true },
      { text: '3. TPM tracked and measured', included: true },
    ],
    notIncluded: [],
  },
]

const comparisonFeatures = [
  { label: 'NCOMA™ seal displayed', bronze: true, silver: true, gold: true, platinum: true },
  { label: 'Seedless cooking oil', bronze: true, silver: false, gold: true, platinum: true },
  { label: 'Fryer oil filtered at least twice a day', bronze: false, silver: true, gold: true, platinum: true },
  { label: 'TPM tracked and measured', bronze: false, silver: false, gold: false, platinum: true },
]

export function TierCards() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div>
      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier) => {
          const isExpanded = expanded === tier.id
          return (
            <motion.div
              key={tier.id}
              layout
              onClick={() => setExpanded(isExpanded ? null : tier.id)}
              className={`cursor-pointer border-2 ${tier.borderColor} bg-gradient-to-b ${tier.bgGradient} p-6 transition-shadow hover:shadow-lg md:p-8 ${
                isExpanded ? 'shadow-xl' : ''
              }`}
            >
              {/* Tier badge */}
              <div
                className="inline-block px-3 py-1 font-sans text-xs font-bold uppercase tracking-widest text-white"
                style={{ backgroundColor: tier.color }}
              >
                {tier.sealLabel}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-2xl font-bold text-charcoal">
                {tier.tagline}
              </h3>
              <p className="mt-1 font-sans text-sm text-charcoal/50">
                {tier.subtitle}
              </p>

              {/* Quick feature count */}
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold" style={{ color: tier.color }}>
                  {tier.features.length - 1}
                </span>
                <span className="font-sans text-sm text-charcoal/40">standards met</span>
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
                      {tier.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="mt-0.5 text-sm" style={{ color: tier.color }}>✓</span>
                          <span className="text-sm text-charcoal/70">{feature.text}</span>
                        </div>
                      ))}
                      {tier.notIncluded.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 opacity-40">
                          <span className="mt-0.5 text-sm text-charcoal/30">—</span>
                          <span className="text-sm text-charcoal/30 line-through">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Click hint */}
              <p className="mt-4 font-sans text-xs text-charcoal/30">
                {isExpanded ? 'Click to collapse' : 'Click to expand'}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Comparison table */}
      <div className="mt-16">
        <h3 className="text-center text-2xl font-bold text-charcoal">Compare tiers</h3>
        <p className="mt-2 text-center text-sm text-charcoal/50">
          Every tier earns the NCOMA™ seal. Platinum checks every box.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-charcoal/10 pb-3 text-left font-sans text-sm font-semibold text-charcoal/50">
                  Standard
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    className="border-b-2 border-charcoal/10 pb-3 text-center font-sans text-sm font-bold"
                    style={{ color: tier.color }}
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? 'bg-charcoal/[0.02]' : ''}
                >
                  <td className="border-b border-charcoal/5 py-3 pr-4 text-sm text-charcoal/70">
                    {feature.label}
                  </td>
                  {(['bronze', 'silver', 'gold', 'platinum'] as const).map((tier) => (
                    <td
                      key={tier}
                      className="border-b border-charcoal/5 py-3 text-center"
                    >
                      {feature[tier] ? (
                        <span className="text-lg" style={{ color: tiers.find(t => t.id === tier)!.color }}>
                          ✓
                        </span>
                      ) : (
                        <span className="text-charcoal/20">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
