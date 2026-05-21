'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Container, Section, Eyebrow } from '@/components/ui'
import oilData from '@/data/oils.json'

type SortKey = 'name' | 'fryCycles' | 'mufa' | 'pufa' | 'safa' | 'smokePoint' | 'osi'
type SortDir = 'asc' | 'desc'
type Family = 'all' | 'Seed' | 'Fruit' | 'Animal' | 'Legume'

const familyColors: Record<string, string> = {
  Fruit: 'bg-emerald-100 text-emerald-700',
  Seed: 'bg-red-100 text-red-700',
  Animal: 'bg-amber/20 text-amber',
  Legume: 'bg-yellow-100 text-yellow-700',
}

function getSortValue(oil: (typeof oilData.oils)[0], key: SortKey): number | string {
  switch (key) {
    case 'name': return oil.name
    case 'fryCycles': return oil.fryCycles
    case 'mufa': return oil.fattyAcids.mufa
    case 'pufa': return oil.fattyAcids.pufa
    case 'safa': return oil.fattyAcids.safa
    case 'smokePoint': return oil.smokePoint
    case 'osi': return oil.osi
  }
}

export default function Atlas() {
  const [sortKey, setSortKey] = useState<SortKey>('fryCycles')
  const [sortDir, setSortDir] = useState<SortDir>('desc')
  const [family, setFamily] = useState<Family>('all')
  const [selected, setSelected] = useState<string[]>([])

  const oils = useMemo(() => {
    let filtered = oilData.oils
    if (family !== 'all') {
      filtered = filtered.filter((o) => o.family === family)
    }
    return [...filtered].sort((a, b) => {
      const va = getSortValue(a, sortKey)
      const vb = getSortValue(b, sortKey)
      if (typeof va === 'string' && typeof vb === 'string') {
        return sortDir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va)
      }
      return sortDir === 'asc' ? (va as number) - (vb as number) : (vb as number) - (va as number)
    })
  }, [sortKey, sortDir, family])

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir(key === 'name' ? 'asc' : 'desc')
    }
  }

  function toggleSelect(slug: string) {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length < 3 ? [...prev, slug] : prev
    )
  }

  return (
    <main>
      <Section className="pt-20 md:pt-28">
        <Container size="lg">
          <Eyebrow>Oil Atlas</Eyebrow>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Every oil. Compared by science.
          </h1>
          <p className="mt-6 text-lg text-charcoal/70">
            Frying oils ranked by the metrics that actually determine
            performance — fry cycles to 25% TPM, fatty acid composition, and
            oxidative stability. Not price. Not marketing. Science.
          </p>
        </Container>
      </Section>

      <Section className="border-t border-charcoal/10">
        <Container size="xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-sans text-sm font-medium text-charcoal/50">Filter:</span>
            {(['all', 'Fruit', 'Seed', 'Animal', 'Legume'] as Family[]).map((f) => (
              <button
                key={f}
                onClick={() => setFamily(f)}
                className={`h-8 px-3 font-sans text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 ${
                  family === f
                    ? 'bg-charcoal text-white'
                    : 'border border-charcoal/20 text-charcoal/60 hover:border-charcoal/40'
                }`}
              >
                {f === 'all' ? 'All Oils' : f}
              </button>
            ))}

            {selected.length > 0 && (
              <Link
                href={`/atlas/compare?oils=${selected.join(',')}`}
                className="ml-auto h-8 bg-amber px-4 font-sans text-sm font-medium text-white transition-colors hover:bg-amber-dark flex items-center"
              >
                Compare {selected.length} oil{selected.length > 1 ? 's' : ''}
              </Link>
            )}
          </div>

          <div className="mt-6 overflow-x-auto" role="region" aria-label="Oil comparison data">
            <table className="w-full min-w-[800px] font-sans text-sm">
              <caption className="sr-only">Frying oil comparison data — sortable by fry cycles, fatty acid composition, smoke point, and oxidative stability</caption>
              <thead>
                <tr className="border-b border-charcoal/10 text-left">
                  <th className="w-8 pb-3 pr-2"></th>
                  <ThBtn label="Oil" sortKey="name" current={sortKey} dir={sortDir} onClick={toggleSort} />
                  <th className="pb-3 px-2 font-semibold text-charcoal/50">Family</th>
                  <ThBtn label="Fry Cycles" sortKey="fryCycles" current={sortKey} dir={sortDir} onClick={toggleSort} />
                  <ThBtn label="SAFA%" sortKey="safa" current={sortKey} dir={sortDir} onClick={toggleSort} />
                  <ThBtn label="MUFA%" sortKey="mufa" current={sortKey} dir={sortDir} onClick={toggleSort} />
                  <ThBtn label="PUFA%" sortKey="pufa" current={sortKey} dir={sortDir} onClick={toggleSort} />
                  <ThBtn label="Smoke°C" sortKey="smokePoint" current={sortKey} dir={sortDir} onClick={toggleSort} />
                  <ThBtn label="OSI (h)" sortKey="osi" current={sortKey} dir={sortDir} onClick={toggleSort} />
                  <th className="pb-3 px-2 font-semibold text-charcoal/50">Trans</th>
                </tr>
              </thead>
              <tbody>
                {oils.map((oil) => (
                  <tr
                    key={oil.slug}
                    className={`border-b border-charcoal/5 transition-colors hover:bg-offwhite/50 ${
                      selected.includes(oil.slug) ? 'bg-amber/5' : ''
                    }`}
                  >
                    <td className="py-3 pr-2">
                      <input
                        type="checkbox"
                        checked={selected.includes(oil.slug)}
                        onChange={() => toggleSelect(oil.slug)}
                        disabled={!selected.includes(oil.slug) && selected.length >= 3}
                        aria-label={`Select ${oil.name} for comparison`}
                        className="accent-amber"
                      />
                    </td>
                    <td className="py-3 px-2">
                      <Link href={`/atlas/${oil.slug}`} className="font-medium text-charcoal hover:text-amber transition-colors">
                        {oil.name}
                      </Link>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`inline-block px-2 py-0.5 text-xs font-medium ${familyColors[oil.family] || 'bg-charcoal/10 text-charcoal/60'}`}>
                        {oil.family}
                      </span>
                    </td>
                    <td className="py-3 px-2 tabular-nums">{oil.fryCycles}</td>
                    <td className="py-3 px-2 tabular-nums">{oil.fattyAcids.safa}%</td>
                    <td className="py-3 px-2 tabular-nums">{oil.fattyAcids.mufa}%</td>
                    <td className="py-3 px-2 tabular-nums">{oil.fattyAcids.pufa}%</td>
                    <td className="py-3 px-2 tabular-nums">{oil.smokePoint}°C</td>
                    <td className="py-3 px-2 tabular-nums">{oil.osi}</td>
                    <td className="py-3 px-2 tabular-nums text-charcoal/50">
                      {oil.transFat === 0 ? 'Zero' : `${oil.transFat}%`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 font-sans text-xs text-charcoal/40">
            Fry cycle data: Fedepalma/UCaldas (2025) standardized frying trials at 180°C to 25% TPM discard threshold.
            Fatty acid composition: USDA FoodData Central and manufacturer specifications.
            OSI = Oxidative Stability Index (hours at 110°C, Rancimat method). Select up to 3 oils to compare side-by-side.
          </p>
        </Container>
      </Section>
    </main>
  )
}

function ThBtn({
  label,
  sortKey,
  current,
  dir,
  onClick,
}: {
  label: string
  sortKey: SortKey
  current: SortKey
  dir: SortDir
  onClick: (k: SortKey) => void
}) {
  const active = current === sortKey
  return (
    <th className="pb-3 px-2">
      <button
        onClick={() => onClick(sortKey)}
        className={`font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 ${active ? 'text-charcoal' : 'text-charcoal/50 hover:text-charcoal/70'}`}
      >
        {label}
        {active && <span className="ml-0.5">{dir === 'asc' ? '↑' : '↓'}</span>}
      </button>
    </th>
  )
}
