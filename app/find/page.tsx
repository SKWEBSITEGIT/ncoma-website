'use client'

import { useState, useMemo } from 'react'
import { Container, Section, Eyebrow, Badge } from '@/components/ui'
import operatorData from '@/data/operators.json'

type Tier = 'all' | 'bronze' | 'silver' | 'gold'

const tierColors: Record<string, string> = {
  bronze: 'bronze',
  silver: 'silver',
  gold: 'gold',
}

export default function Find() {
  const [search, setSearch] = useState('')
  const [tier, setTier] = useState<Tier>('all')

  const filtered = useMemo(() => {
    return operatorData.operators.filter((op) => {
      const matchesTier = tier === 'all' || op.tier === tier
      const matchesSearch =
        search === '' ||
        op.name.toLowerCase().includes(search.toLowerCase()) ||
        op.address.toLowerCase().includes(search.toLowerCase()) ||
        op.oilType.toLowerCase().includes(search.toLowerCase())
      return matchesTier && matchesSearch
    })
  }, [search, tier])

  return (
    <main>
      <Section className="pt-20 md:pt-28">
        <Container size="md">
          <Eyebrow>Find Certified</Eyebrow>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Certified restaurant directory
          </h1>
          <p className="mt-6 text-lg text-charcoal/70">
            Every restaurant listed here has been inspected by NCOMA and meets
            the published standard for cooking oil management. Search by name,
            location, or oil type.
          </p>
        </Container>
      </Section>

      <Section className="border-t border-charcoal/10">
        <Container size="lg">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="Search by name, city, or oil type…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 flex-1 border border-charcoal/20 bg-white px-4 font-sans text-sm focus:border-amber focus:outline-none"
            />
            <div className="flex gap-2">
              {(['all', 'bronze', 'silver', 'gold'] as Tier[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTier(t)}
                  className={`h-10 px-4 font-sans text-sm transition-colors ${
                    tier === t
                      ? 'bg-charcoal text-white'
                      : 'border border-charcoal/20 text-charcoal/60 hover:border-charcoal/40'
                  }`}
                >
                  {t === 'all' ? 'All Tiers' : t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 font-sans text-sm text-charcoal/50">
            {filtered.length} certified {filtered.length === 1 ? 'restaurant' : 'restaurants'}
          </div>

          {/* Map placeholder */}
          <div className="mt-6 placeholder-image aspect-[16/7] w-full">
            Map — requires Mapbox token in .env.local
          </div>

          {/* List */}
          <div className="mt-8 space-y-4">
            {filtered.map((op) => (
              <div
                key={op.id}
                className="flex flex-col gap-3 border border-charcoal/10 bg-white p-5 sm:flex-row sm:items-start sm:justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-sans text-base font-semibold">{op.name}</h3>
                    <Badge variant={tierColors[op.tier] as 'bronze' | 'silver' | 'gold'}>
                      {op.tier.charAt(0).toUpperCase() + op.tier.slice(1)}
                    </Badge>
                  </div>
                  <p className="mt-1 font-sans text-sm text-charcoal/60">{op.address}</p>
                  <div className="mt-2 flex flex-wrap gap-4 font-sans text-xs text-charcoal/40">
                    <span>Oil: {op.oilType}</span>
                    <span>Category: {op.category}</span>
                    <span>Certified since: {new Date(op.certifiedSince).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>
                <div className="shrink-0 font-sans text-xs text-charcoal/40">
                  <p>Verification: {op.id}</p>
                  <p className="mt-1">Last inspection: {new Date(op.lastInspection).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="py-12 text-center font-sans text-sm text-charcoal/40">
                No certified restaurants match your search.
              </p>
            )}
          </div>

          <p className="mt-8 font-sans text-xs text-charcoal/40">
            This directory shows sample data for development purposes. In production, the NCOMA certification database will populate this list with verified operators. Each listing includes the WIYO! verification code, which can be checked at /seal.
          </p>
        </Container>
      </Section>
    </main>
  )
}
