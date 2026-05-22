'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const tiers = [
  {
    id: 'bronze',
    name: 'Bronze',
    tagline: 'Managed Oil',
    subtitle: 'The operational baseline',
    color: '#CD7F32',
    bgGradient: 'from-[#CD7F32]/10 to-[#CD7F32]/5',
    borderColor: 'border-[#CD7F32]',
    textColor: 'text-[#CD7F32]',
    sealLabel: 'WIYO! Bronze',
    description: 'This kitchen has implemented the core NCOMA protocols. Oil is filtered daily, tested with a TPM meter, and discarded at the 25% threshold — the standard used across Europe but not required anywhere in the US.',
    features: [
      { text: 'WIYO! Bronze seal displayed', included: true },
      { text: 'Daily filtration documented', included: true },
      { text: 'TPM testing (minimum daily)', included: true },
      { text: 'Discard at 25% TPM', included: true },
      { text: 'Oil Log maintained', included: true },
      { text: 'Fryers covered when idle', included: true },
      { text: 'Salt station at the pass', included: true },
      { text: 'Oil storage sealed & dark', included: true },
    ],
    notIncluded: [
      'Certified staff (COT)',
      'Equipment verification',
      'Oil type disclosed',
      'Advanced filtration',
      'Cost-per-cycle tracking',
    ],
  },
  {
    id: 'silver',
    name: 'Silver',
    tagline: 'Trained Kitchen',
    subtitle: 'Certified knowledge + equipment',
    color: '#A8A9AD',
    bgGradient: 'from-[#71767C]/10 to-[#71767C]/5',
    borderColor: 'border-[#A8A9AD]',
    textColor: 'text-[#71767C]',
    sealLabel: 'WIYO! Silver',
    description: 'Everything in Bronze, plus verified knowledge and equipment standards. At least one staff member holds COT certification and can explain oil chemistry without reference material.',
    features: [
      { text: 'WIYO! Silver seal displayed', included: true },
      { text: 'Everything in Bronze', included: true },
      { text: 'Certified Oil Technician (COT) on staff', included: true },
      { text: 'Staff trained in degradation science', included: true },
      { text: 'Thermostat verified weekly (±5°C)', included: true },
      { text: 'Equipment standards verified', included: true },
      { text: 'Dedicated fish/allergen fryer', included: true },
      { text: 'Filter media inventory maintained', included: true },
    ],
    notIncluded: [
      'Oil type disclosed',
      'Advanced filtration',
      'Cost-per-cycle tracking',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    tagline: 'Full Transparency',
    subtitle: 'Consumer-facing excellence',
    color: '#D4AF37',
    bgGradient: 'from-[#D4AF37]/10 to-[#D4AF37]/5',
    borderColor: 'border-[#D4AF37]',
    textColor: 'text-[#D4AF37]',
    sealLabel: 'WIYO! Gold',
    description: 'Everything in Silver, plus full consumer transparency and data maturity. Diners know what oil is used. Records are deep. Filtration is advanced. This is the gold standard — literally.',
    features: [
      { text: 'WIYO! Gold seal displayed', included: true },
      { text: 'Everything in Silver', included: true },
      { text: 'Oil type disclosed to diners', included: true },
      { text: 'Advanced filtration (0.5-micron)', included: true },
      { text: 'Cost-per-cycle tracking', included: true },
      { text: '30+ days Oil Log history', included: true },
      { text: '85%+ annual inspection pass rate', included: true },
      { text: 'UCO disposal records maintained', included: true },
    ],
    notIncluded: [],
  },
]

const comparisonFeatures = [
  { label: 'WIYO! seal displayed', bronze: true, silver: true, gold: true },
  { label: 'Daily filtration', bronze: true, silver: true, gold: true },
  { label: 'TPM testing', bronze: true, silver: true, gold: true },
  { label: '25% discard threshold', bronze: true, silver: true, gold: true },
  { label: 'Oil Log maintained', bronze: true, silver: true, gold: true },
  { label: 'Certified staff (COT)', bronze: false, silver: true, gold: true },
  { label: 'Equipment verification', bronze: false, silver: true, gold: true },
  { label: 'Thermostat calibration', bronze: false, silver: true, gold: true },
  { label: 'Oil type disclosed', bronze: false, silver: false, gold: true },
  { label: 'Advanced filtration', bronze: false, silver: false, gold: true },
  { label: 'Cost-per-cycle tracking', bronze: false, silver: false, gold: true },
  { label: 'UCO disposal records', bronze: false, silver: false, gold: true },
]

export function TierCards() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div>
      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
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
                  {tier.features.length}
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
          Every tier earns the WIYO! seal. Higher tiers go deeper.
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
                  {(['bronze', 'silver', 'gold'] as const).map((tier) => (
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
