import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container, Section, Eyebrow, Badge, Card } from '@/components/ui'
import oilData from '@/data/oils.json'
import { FattyAcidChart } from './chart'

export function generateStaticParams() {
  return oilData.oils.map((oil) => ({ slug: oil.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const oil = oilData.oils.find((o) => o.slug === slug)
    return {
      title: oil ? `${oil.name} — Oil Atlas` : 'Oil Not Found',
      description: oil ? `${oil.name} frying oil profile: smoke point, fatty acid breakdown, fry cycles, stability, and cost data.` : undefined,
    }
  })
}

function Stat({ label, value, unit, highlight }: { label: string; value: string | number; unit?: string; highlight?: boolean }) {
  return (
    <div>
      <p className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal/40">{label}</p>
      <p className={`mt-1 text-2xl font-bold ${highlight ? 'text-amber' : ''}`}>
        {value}
        {unit && <span className="ml-1 text-sm font-normal text-charcoal/50">{unit}</span>}
      </p>
    </div>
  )
}

function RiskBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    low: 'bg-emerald-100 text-emerald-700',
    medium: 'bg-yellow-100 text-yellow-700',
    high: 'bg-red-100 text-red-700',
  }
  return (
    <span className={`inline-block px-2 py-0.5 font-sans text-xs font-medium ${colors[level] || 'bg-charcoal/10 text-charcoal/60'}`}>
      {level}
    </span>
  )
}

export default async function OilDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const oil = oilData.oils.find((o) => o.slug === slug)
  if (!oil) notFound()

  const similar = oilData.oils
    .filter((o) => o.slug !== slug && o.family === oil.family)
    .slice(0, 3)

  return (
    <main>
      <Section className="pt-20 md:pt-28">
        <Container size="md">
          <p className="font-sans text-sm text-charcoal/50">
            <Link href="/atlas" className="hover:text-amber transition-colors">Oil Atlas</Link>
            <span className="mx-2">/</span>
            {oil.family}
          </p>
          <Eyebrow className="mt-4">{oil.family} Oil</Eyebrow>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">{oil.name}</h1>
          <p className="mt-2 font-sans text-sm text-charcoal/50">{oil.processing}</p>
          <div className="mt-2 flex items-center gap-3">
            <Badge>{oil.confidence} confidence</Badge>
            {oil.transFat === 0 ? (
              <Badge variant="olive">Zero trans fat</Badge>
            ) : (
              <Badge variant="amber">{oil.transFat}% trans fat</Badge>
            )}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <Stat label="Fry Cycles" value={oil.fryCycles} unit="to 25% TPM" highlight />
            <Stat label="Smoke Point" value={oil.smokePoint} unit="°C" />
            <Stat label="OSI" value={oil.osi} unit="hours" />
          </div>
        </Container>
      </Section>

      <Section className="border-t border-charcoal/10 bg-white">
        <Container size="md">
          <h2 className="text-2xl font-bold">Profile</h2>
          <p className="mt-4 text-charcoal/70 leading-relaxed">{oil.profile}</p>
        </Container>
      </Section>

      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <h2 className="text-2xl font-bold">Fatty acid breakdown</h2>
          <div className="mt-6">
            <FattyAcidChart safa={oil.fattyAcids.safa} mufa={oil.fattyAcids.mufa} pufa={oil.fattyAcids.pufa} />
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <Stat label="Saturated (SAFA)" value={`${oil.fattyAcids.safa}%`} />
            <Stat label="Monounsaturated (MUFA)" value={`${oil.fattyAcids.mufa}%`} />
            <Stat label="Polyunsaturated (PUFA)" value={`${oil.fattyAcids.pufa}%`} />
          </div>
        </Container>
      </Section>

      <Section className="border-t border-charcoal/10 bg-white">
        <Container size="md">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Health</h2>
              <div className="mt-4 space-y-3 font-sans text-sm">
                <div className="flex justify-between border-b border-charcoal/5 pb-2">
                  <span className="text-charcoal/50">LDL effect</span>
                  <span className="font-medium">{oil.health.ldlEffect}</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/5 pb-2">
                  <span className="text-charcoal/50">Trans fat</span>
                  <span className="font-medium">{oil.health.trans}</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/5 pb-2">
                  <span className="text-charcoal/50">Bioactives</span>
                  <span className="font-medium text-right max-w-[60%]">{oil.health.bioactives}</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-charcoal/60">{oil.health.notes}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Sustainability</h2>
              <div className="mt-4 space-y-3 font-sans text-sm">
                <div className="flex justify-between border-b border-charcoal/5 pb-2">
                  <span className="text-charcoal/50">Deforestation risk</span>
                  <RiskBadge level={oil.sustainability.deforestationRisk} />
                </div>
                {oil.sustainability.certifications.length > 0 && (
                  <div className="flex justify-between border-b border-charcoal/5 pb-2">
                    <span className="text-charcoal/50">Certifications</span>
                    <span className="font-medium">{oil.sustainability.certifications.join(', ')}</span>
                  </div>
                )}
              </div>
              <p className="mt-4 text-sm text-charcoal/60">{oil.sustainability.notes}</p>
            </div>
          </div>
        </Container>
      </Section>

      {similar.length > 0 && (
        <Section className="border-t border-charcoal/10 bg-white">
          <Container size="md">
            <h2 className="text-2xl font-bold">Other {oil.family} oils</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {similar.map((o) => (
                <Link key={o.slug} href={`/atlas/${o.slug}`}>
                  <Card className="transition-colors hover:border-amber/40">
                    <p className="font-sans font-semibold">{o.name}</p>
                    <p className="mt-1 font-sans text-xs text-charcoal/50">
                      {o.fryCycles} cycles · {o.fattyAcids.mufa}% MUFA
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </main>
  )
}
