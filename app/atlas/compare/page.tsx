'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Container, Section, Eyebrow } from '@/components/ui'
import oilData from '@/data/oils.json'
import { Suspense } from 'react'

function FattyAcidBar({ safa, mufa, pufa }: { safa: number; mufa: number; pufa: number }) {
  return (
    <div className="mt-2">
      <div className="flex h-6 w-full overflow-hidden text-xs font-medium">
        <div className="flex items-center justify-center bg-red-200 text-red-800" style={{ width: `${safa}%` }}>
          {safa}%
        </div>
        <div className="flex items-center justify-center bg-amber/30 text-amber" style={{ width: `${mufa}%` }}>
          {mufa}%
        </div>
        <div className="flex items-center justify-center bg-blue-200 text-blue-800" style={{ width: `${pufa}%` }}>
          {pufa}%
        </div>
      </div>
      <div className="mt-1 flex gap-4 font-sans text-xs text-charcoal/50">
        <span className="flex items-center gap-1"><span className="h-2 w-2 bg-red-200" />SAFA</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 bg-amber/30" />MUFA</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 bg-blue-200" />PUFA</span>
      </div>
    </div>
  )
}

function CompareRow({ label, values, format, highlight }: { label: string; values: (string | number | null)[]; format?: (v: string | number | null) => string; highlight?: 'max' | 'min' }) {
  const numValues = values.filter((v): v is number => typeof v === 'number')
  const best = highlight === 'max' ? Math.max(...numValues) : highlight === 'min' ? Math.min(...numValues) : null

  return (
    <tr className="border-b border-charcoal/5">
      <td className="py-3 pr-4 font-sans text-sm font-medium text-charcoal/60">{label}</td>
      {values.map((v, i) => {
        const formatted = format ? format(v) : String(v ?? '—')
        const isBest = best !== null && v === best
        return (
          <td key={i} className={`py-3 px-4 font-sans text-sm tabular-nums ${isBest ? 'font-semibold text-amber' : 'text-charcoal/70'}`}>
            {formatted}
          </td>
        )
      })}
    </tr>
  )
}

function CompareContent() {
  const params = useSearchParams()
  const slugs = (params.get('oils') || '').split(',').filter(Boolean)
  const oils = slugs.map((s) => oilData.oils.find((o) => o.slug === s)).filter(Boolean) as typeof oilData.oils

  if (oils.length === 0) {
    return (
      <Section className="pt-20 md:pt-28">
        <Container size="md">
          <p className="text-charcoal/60">No oils selected. <Link href="/atlas" className="text-amber hover:underline">Return to the Atlas</Link> and select up to 3 oils to compare.</p>
        </Container>
      </Section>
    )
  }

  return (
    <>
      <Section className="pt-20 md:pt-28">
        <Container size="lg">
          <Eyebrow>Oil Atlas</Eyebrow>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Side-by-side comparison
          </h1>
          <p className="mt-4 text-charcoal/60">
            <Link href="/atlas" className="text-amber hover:underline">← Back to Atlas</Link>
          </p>
        </Container>
      </Section>

      <Section className="border-t border-charcoal/10">
        <Container size="lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-charcoal/10">
                  <th className="pb-4 pr-4 text-left font-sans text-sm font-semibold text-charcoal/50">Metric</th>
                  {oils.map((oil) => (
                    <th key={oil.slug} className="pb-4 px-4 text-left">
                      <Link href={`/atlas/${oil.slug}`} className="text-lg font-bold hover:text-amber transition-colors">
                        {oil.name}
                      </Link>
                      <p className="mt-1 font-sans text-xs text-charcoal/50">{oil.family} · {oil.processing}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <CompareRow label="Fry Cycles (to 25% TPM)" values={oils.map((o) => o.fryCycles)} highlight="max" />
                <CompareRow label="Smoke Point" values={oils.map((o) => o.smokePoint)} format={(v) => typeof v === 'number' ? `${v}°C` : '—'} highlight="max" />
                <CompareRow label="OSI (hours)" values={oils.map((o) => o.osi)} highlight="max" />
                <CompareRow label="SAFA" values={oils.map((o) => o.fattyAcids.safa)} format={(v) => `${v}%`} />
                <CompareRow label="MUFA" values={oils.map((o) => o.fattyAcids.mufa)} format={(v) => `${v}%`} highlight="max" />
                <CompareRow label="PUFA" values={oils.map((o) => o.fattyAcids.pufa)} format={(v) => `${v}%`} highlight="min" />
                <CompareRow label="Trans Fat" values={oils.map((o) => o.transFat)} format={(v) => typeof v === 'number' ? (v === 0 ? 'Zero' : `${v}%`) : '—'} />
                <CompareRow label="LDL Effect" values={oils.map((o) => o.health.ldlEffect)} />
                <CompareRow label="Deforestation Risk" values={oils.map((o) => o.sustainability.deforestationRisk)} />
                <CompareRow label="Confidence" values={oils.map((o) => o.confidence)} />
              </tbody>
            </table>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold">Fatty acid profile</h2>
            <div className={`mt-6 grid gap-8 ${oils.length === 1 ? 'max-w-md' : oils.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
              {oils.map((oil) => (
                <div key={oil.slug}>
                  <p className="font-sans text-sm font-semibold">{oil.name}</p>
                  <FattyAcidBar {...oil.fattyAcids} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold">Health notes</h2>
            <div className={`mt-6 grid gap-8 ${oils.length === 1 ? 'max-w-md' : oils.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
              {oils.map((oil) => (
                <div key={oil.slug}>
                  <p className="font-sans text-sm font-semibold">{oil.name}</p>
                  <p className="mt-2 text-sm text-charcoal/60">{oil.health.notes}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold">Sustainability</h2>
            <div className={`mt-6 grid gap-8 ${oils.length === 1 ? 'max-w-md' : oils.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
              {oils.map((oil) => (
                <div key={oil.slug}>
                  <p className="font-sans text-sm font-semibold">{oil.name}</p>
                  <p className="mt-2 text-sm text-charcoal/60">{oil.sustainability.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default function ComparePage() {
  return (
    <main>
      <Suspense fallback={<div className="pt-28 text-center text-charcoal/40">Loading comparison…</div>}>
        <CompareContent />
      </Suspense>
    </main>
  )
}
