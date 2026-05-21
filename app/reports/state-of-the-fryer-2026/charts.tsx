'use client'

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  RadialBarChart,
  RadialBar,
} from 'recharts'

/* ── Brand Palette ── */

const C = {
  amber: '#C8841A',
  amberLight: '#D9A54B',
  amberDark: '#A06A10',
  charcoal: '#1F1F1F',
  offwhite: '#FAF6F0',
  muted: '#8A8D8F',
  light: '#E8E2D8',
  warmGray: '#B5AFA6',
  danger: '#C0392B',
  dangerLight: '#E74C3C',
  olive: '#5C6A3E',
  white: '#FFFFFF',
}

const tooltipStyle: React.CSSProperties = {
  background: C.charcoal,
  border: 'none',
  borderRadius: '8px',
  color: C.offwhite,
  fontSize: '13px',
  fontFamily: 'Inter, system-ui, sans-serif',
  padding: '12px 16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
  lineHeight: '1.5',
}

/* ══════════════════════════════════════════════════════
   TESTING GAP — Large donut with center label
   ══════════════════════════════════════════════════════ */

const testingData = [
  { name: 'Never tested TPM', value: 78 },
  { name: 'Have tested TPM', value: 22 },
]

const testingBreakdown = [
  { method: 'Colorimetric FFA strips', pct: 41, note: 'Indirect proxy — not TPM' },
  { method: 'Capacitive TPM sensors', pct: 36, note: 'Best field method (testo 270)' },
  { method: 'Visual / unspecified kits', pct: 23, note: 'No standardized methodology' },
]

export function TestingDonut() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="h-72 w-72 sm:h-80 sm:w-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={testingData}
                cx="50%"
                cy="50%"
                innerRadius="58%"
                outerRadius="85%"
                paddingAngle={2}
                dataKey="value"
                strokeWidth={0}
                startAngle={90}
                endAngle={-270}
              >
                <Cell fill={C.danger} />
                <Cell fill={C.olive} />
              </Pie>
              <Tooltip
                formatter={(value) => `${value}%`}
                contentStyle={tooltipStyle}
                itemStyle={{ color: C.offwhite }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-sans text-5xl font-bold text-charcoal sm:text-6xl">78%</p>
          <p className="font-sans text-xs font-medium uppercase tracking-wider text-charcoal/40">
            never tested
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center gap-8 font-sans text-sm">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-8 rounded-full" style={{ background: C.danger }} />
          <span className="text-charcoal/70">Never tested (78%)</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-8 rounded-full" style={{ background: C.olive }} />
          <span className="text-charcoal/70">Have tested (22%)</span>
        </span>
      </div>

      {/* Testing method breakdown */}
      <div className="mt-8 w-full max-w-md space-y-3">
        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal/40">
          Of the 22% who test, methods used:
        </p>
        {testingBreakdown.map((item) => (
          <div key={item.method} className="flex items-center gap-3">
            <div className="h-2 w-full max-w-[120px] overflow-hidden rounded-full bg-charcoal/5">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${item.pct}%`, background: C.amber }}
              />
            </div>
            <span className="shrink-0 font-sans text-sm font-semibold text-charcoal/80">
              {item.pct}%
            </span>
            <span className="font-sans text-sm text-charcoal/60">{item.method}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   OIL TYPES — Horizontal bar with inline labels + %
   ══════════════════════════════════════════════════════ */

const oilData = [
  { name: 'Soybean', value: 46, color: C.danger },
  { name: 'Canola', value: 28, color: C.amberDark },
  { name: 'Fruit oil (palm)', value: 8, color: C.amber },
  { name: 'Peanut', value: 7, color: C.amberLight },
  { name: 'High Oleic', value: 4, color: C.olive },
  { name: 'Other', value: 7, color: C.light },
]

export function OilTypesBar() {
  return (
    <div className="mt-4">
      <div className="space-y-3">
        {oilData.map((item) => (
          <div key={item.name} className="group">
            <div className="mb-1 flex items-baseline justify-between font-sans">
              <span className="text-sm font-medium text-charcoal/80">{item.name}</span>
              <span className="text-sm font-bold text-charcoal">{item.value}%</span>
            </div>
            <div className="h-8 w-full overflow-hidden rounded bg-charcoal/5">
              <div
                className="flex h-full items-center rounded transition-all duration-700 group-hover:brightness-110"
                style={{
                  width: `${(item.value / 50) * 100}%`,
                  background: item.color,
                  minWidth: '2rem',
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 font-sans text-xs text-charcoal/30">
        Soybean oil alone accounts for nearly half of all US commercial frying.
        USDA data shows soybean at 54% of total US edible oil consumption (~27B lbs/year).
      </p>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   PURCHASE CRITERIA — Horizontal bar (not vertical)
   ══════════════════════════════════════════════════════ */

const criteriaData = [
  { name: 'Price per unit', value: 71, icon: '💰', insight: 'Cheapest wins — regardless of cycle life' },
  { name: 'Distributor recommendation', value: 14, icon: '🤝', insight: 'Often driven by distributor margins' },
  { name: 'Flavor / brand tradition', value: 9, icon: '👅', insight: 'Habit over data' },
  { name: 'Performance data', value: 6, icon: '📊', insight: 'The only science-based criterion' },
]

export function PurchaseCriteriaBar() {
  return (
    <div className="mt-4 space-y-5">
      {criteriaData.map((item) => (
        <div key={item.name} className="group">
          <div className="mb-2 flex items-center gap-2 font-sans">
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium text-charcoal/80">{item.name}</span>
            <span className="ml-auto text-2xl font-bold text-charcoal">{item.value}%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-charcoal/5">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${item.value}%`,
                background: item.value === 71 ? C.charcoal : item.value === 6 ? C.olive : C.amber,
              }}
            />
          </div>
          <p className="mt-1 font-sans text-xs text-charcoal/40">{item.insight}</p>
        </div>
      ))}
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   FILTRATION VISUAL — Three radial gauges
   ══════════════════════════════════════════════════════ */

export function FiltrationGauges() {
  const data = [
    { name: 'Filter daily', value: 34, fill: C.olive, label: 'Best practice' },
    { name: 'Reactive', value: 41, fill: C.amber, label: '"When it looks bad"' },
    { name: 'No equipment', value: 25, fill: C.danger, label: 'Zero capability' },
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item) => (
        <div key={item.name} className="text-center">
          <div className="mx-auto h-28 w-28 sm:h-36 sm:w-36">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="65%"
                outerRadius="90%"
                startAngle={180}
                endAngle={0}
                data={[{ value: item.value, fill: item.fill }]}
              >
                <RadialBar
                  dataKey="value"
                  cornerRadius={10}
                  background={{ fill: C.light }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <p className="font-sans text-2xl font-bold text-charcoal sm:text-3xl">{item.value}%</p>
          <p className="mt-1 font-sans text-xs font-medium text-charcoal/60">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   INTERNATIONAL COMPARISON — Styled bar with flags
   ══════════════════════════════════════════════════════ */

const intlData = [
  { name: 'Athens, Greece', flag: '🇬🇷', value: 17, context: 'Regulated market — TPM testing required', fill: C.olive },
  { name: 'Delhi, India', flag: '🇮🇳', value: 65, context: 'Weak enforcement despite regulations', fill: C.amber },
  { name: 'United States', flag: '🇺🇸', value: 78, context: 'No regulation, no testing, no data', fill: C.danger },
]

export function InternationalBar() {
  return (
    <div className="mt-4 space-y-6">
      {intlData.map((item) => (
        <div key={item.name} className="group">
          <div className="mb-2 flex items-center gap-2 font-sans">
            <span className="text-xl">{item.flag}</span>
            <span className="text-sm font-semibold text-charcoal/80">{item.name}</span>
            <span className="ml-auto text-3xl font-bold" style={{ color: item.fill }}>
              {item.value}%
            </span>
          </div>
          <div className="h-5 w-full overflow-hidden rounded-full bg-charcoal/5">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{ width: `${item.value}%`, background: item.fill }}
            />
          </div>
          <p className="mt-1 font-sans text-xs text-charcoal/40">{item.context}</p>
        </div>
      ))}
      <p className="font-sans text-xs text-charcoal/30">
        Athens &amp; Delhi data from published food safety monitoring studies.
        U.S. figure reflects percentage of operators who have never tested TPM at all.
      </p>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   AWARENESS STAT — Large animated number display
   ══════════════════════════════════════════════════════ */

const awarenessData = [
  { value: '91%', label: 'Unaware any country mandates TPM testing', detail: '20+ countries have TPM thresholds' },
  { value: '96%', label: 'Unaware of the 25% TPM discard standard', detail: 'Used in France, Belgium, Spain, Netherlands' },
  { value: '98%', label: 'Unaware of Codex Alimentarius limits', detail: 'The global food safety reference' },
  { value: '84%', label: "Cannot name a single oil degradation pathway", detail: 'Hydrolysis, oxidation, polymerization' },
]

export function AwarenessGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {awarenessData.map((item) => (
        <div key={item.value} className="border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
          <p className="font-sans text-5xl font-bold text-amber md:text-6xl">{item.value}</p>
          <p className="mt-3 font-sans text-sm leading-snug text-white/80">{item.label}</p>
          <p className="mt-2 font-sans text-xs text-white/30">{item.detail}</p>
        </div>
      ))}
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   CHANGE FREQUENCY — Visual timeline
   ══════════════════════════════════════════════════════ */

export function ChangeFrequencyVisual() {
  const scenarios = [
    {
      oil: 'HO Sunflower + daily filtration',
      actual: '7–10 days to 25% TPM',
      schedule: '3 days',
      verdict: 'Wastes 4–7 days of good oil',
      color: C.olive,
    },
    {
      oil: 'Conv. Soybean, no filtration',
      actual: '<2 days to 25% TPM',
      schedule: '3 days',
      verdict: 'Serves food in degraded oil for 1+ day',
      color: C.danger,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="font-sans text-6xl font-bold text-charcoal md:text-7xl">3 days</p>
        <p className="mt-2 font-sans text-sm text-charcoal/50">
          Median oil change frequency — regardless of everything
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {scenarios.map((s) => (
          <div
            key={s.oil}
            className="border-l-4 bg-charcoal/5 p-5"
            style={{ borderColor: s.color }}
          >
            <p className="font-sans text-sm font-semibold text-charcoal">{s.oil}</p>
            <p className="mt-1 font-sans text-xs text-charcoal/50">Actual life: {s.actual}</p>
            <p className="font-sans text-xs text-charcoal/50">Schedule: {s.schedule}</p>
            <p
              className="mt-2 font-sans text-sm font-bold"
              style={{ color: s.color }}
            >
              → {s.verdict}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
