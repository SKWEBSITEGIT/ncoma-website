'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  ZAxis,
  ReferenceLine,
  LabelList,
} from 'recharts'

/* ── Shared ── */

const COLORS = {
  amber: '#C8841A',
  charcoal: '#1F1F1F',
  olive: '#5C6A3E',
  offwhite: '#FAF6F0',
  muted: '#8A8D8F',
  lightBorder: '#E8E2D8',
  lowPUFA: '#5C6A3E',
  midPUFA: '#C8841A',
  highPUFA: '#C0392B',
}

const tooltipStyle = {
  background: '#1F1F1F',
  border: 'none',
  borderRadius: '6px',
  color: '#FAF6F0',
  fontSize: '13px',
  fontFamily: 'Inter, sans-serif',
  padding: '8px 12px',
}

function getPUFAColor(pufa: number): string {
  if (pufa <= 15) return COLORS.lowPUFA
  if (pufa <= 35) return COLORS.midPUFA
  return COLORS.highPUFA
}

/* ── Full Rankings Data ── */

const oilRankings = [
  { name: 'HO Palm Olein (OxG)', cycles: 355, pufa: 14, mufa: 52, osi: 45 },
  { name: 'Conv. Palm Olein', cycles: 300, pufa: 12, mufa: 40, osi: 35 },
  { name: 'Beef Tallow', cycles: 280, pufa: 4, mufa: 42, osi: 30 },
  { name: 'Coconut Oil', cycles: 250, pufa: 2, mufa: 6, osi: 35 },
  { name: 'Ghee', cycles: 220, pufa: 4, mufa: 26, osi: 28 },
  { name: 'HO Sunflower', cycles: 210, pufa: 9, mufa: 82, osi: 25 },
  { name: 'Lard', cycles: 200, pufa: 11, mufa: 45, osi: 22 },
  { name: 'HO Canola', cycles: 190, pufa: 15, mufa: 75, osi: 22 },
  { name: 'HO Soybean', cycles: 180, pufa: 16, mufa: 73, osi: 20 },
  { name: 'Refined Olive', cycles: 160, pufa: 11, mufa: 73, osi: 15 },
  { name: 'EVOO', cycles: 150, pufa: 11, mufa: 73, osi: 18 },
  { name: 'Mid-Oleic Sunflower', cycles: 150, pufa: 26, mufa: 65, osi: 16 },
  { name: 'Rice Bran', cycles: 140, pufa: 35, mufa: 39, osi: 14 },
  { name: 'Avocado', cycles: 140, pufa: 14, mufa: 71, osi: 15 },
  { name: 'Peanut', cycles: 130, pufa: 32, mufa: 46, osi: 12 },
  { name: 'Canola (Conv.)', cycles: 120, pufa: 28, mufa: 63, osi: 12 },
  { name: 'Conv. Sunflower', cycles: 107, pufa: 66, mufa: 20, osi: 6 },
  { name: 'Cottonseed', cycles: 90, pufa: 52, mufa: 18, osi: 9 },
  { name: 'Corn', cycles: 85, pufa: 55, mufa: 28, osi: 8 },
  { name: 'Soybean (Conv.)', cycles: 72, pufa: 58, mufa: 23, osi: 7 },
  { name: 'Grapeseed', cycles: 60, pufa: 71, mufa: 17, osi: 5 },
]

// Reversed for horizontal bar chart (top = best)
const rankingsReversed = [...oilRankings].reverse()

/* ── Performance Rankings Bar Chart ── */

export function PerformanceRankingsChart() {
  return (
    <div style={{ width: '100%', height: 820 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={rankingsReversed}
          layout="vertical"
          margin={{ top: 4, right: 60, bottom: 4, left: 4 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={false}
            stroke={COLORS.lightBorder}
          />
          <XAxis
            type="number"
            domain={[0, 400]}
            tick={{ fontSize: 12, fill: COLORS.muted, fontFamily: 'Inter' }}
            axisLine={false}
            tickLine={false}
            label={{
              value: 'Fry cycles to 25% TPM',
              position: 'insideBottom',
              offset: -2,
              fontSize: 12,
              fill: COLORS.muted,
              fontFamily: 'Inter',
            }}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={150}
            tick={{ fontSize: 12, fill: COLORS.charcoal, fontFamily: 'Inter' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null
              const d = payload[0].payload
              return (
                <div style={tooltipStyle}>
                  <p style={{ fontWeight: 600, marginBottom: 4 }}>{d.name}</p>
                  <p>{d.cycles} fry cycles</p>
                  <p style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>
                    PUFA {d.pufa}% · MUFA {d.mufa}% · OSI {d.osi}h
                  </p>
                </div>
              )
            }}
          />
          <Bar dataKey="cycles" radius={[0, 4, 4, 0]} barSize={26}>
            <LabelList
              dataKey="cycles"
              position="right"
              style={{ fontSize: 11, fill: COLORS.muted, fontFamily: 'Inter' }}
            />
            {rankingsReversed.map((oil, i) => (
              <Cell key={i} fill={getPUFAColor(oil.pufa)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

/* ── PUFA vs Fry Cycles Scatter Plot ── */

const scatterData = oilRankings.map((oil) => ({
  x: oil.pufa,
  y: oil.cycles,
  name: oil.name,
  z: oil.osi,
}))

export function PUFAScatterChart() {
  return (
    <div style={{ width: '100%', height: 440 }}>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 30, bottom: 30, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={COLORS.lightBorder} />
          <XAxis
            type="number"
            dataKey="x"
            name="PUFA"
            domain={[0, 80]}
            tick={{ fontSize: 12, fill: COLORS.muted, fontFamily: 'Inter' }}
            axisLine={false}
            tickLine={false}
            label={{
              value: 'PUFA content (%)',
              position: 'insideBottom',
              offset: -12,
              fontSize: 12,
              fill: COLORS.muted,
              fontFamily: 'Inter',
            }}
            tickFormatter={(v) => `${v}%`}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Fry Cycles"
            domain={[0, 400]}
            tick={{ fontSize: 12, fill: COLORS.muted, fontFamily: 'Inter' }}
            axisLine={false}
            tickLine={false}
            label={{
              value: 'Fry cycles to 25% TPM',
              angle: -90,
              position: 'insideLeft',
              offset: 10,
              fontSize: 12,
              fill: COLORS.muted,
              fontFamily: 'Inter',
            }}
          />
          <ZAxis type="number" dataKey="z" range={[60, 220]} />
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null
              const d = payload[0].payload
              return (
                <div style={tooltipStyle}>
                  <p style={{ fontWeight: 600, marginBottom: 4 }}>{d.name}</p>
                  <p>PUFA: {d.x}% · Cycles: {d.y}</p>
                  <p style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>
                    OSI: {d.z}h
                  </p>
                </div>
              )
            }}
          />
          <ReferenceLine
            x={15}
            stroke={COLORS.olive}
            strokeDasharray="6 4"
            strokeWidth={1.5}
            label={{
              value: '15% PUFA threshold',
              position: 'insideTopRight',
              fontSize: 11,
              fill: COLORS.olive,
              fontFamily: 'Inter',
            }}
          />
          <Scatter data={scatterData} fill={COLORS.amber}>
            {scatterData.map((entry, i) => (
              <Cell key={i} fill={getPUFAColor(entry.x)} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

/* ── Sunflower Comparison Chart ── */

const sunflowerData = [
  {
    name: 'Conv. Sunflower',
    cycles: 107,
    pufa: 66,
    mufa: 20,
    osi: 6,
  },
  {
    name: 'HO Sunflower',
    cycles: 210,
    pufa: 9,
    mufa: 82,
    osi: 25,
  },
]

export function SunflowerComparisonChart() {
  return (
    <div style={{ width: '100%', height: 280 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sunflowerData}
          margin={{ top: 16, right: 40, bottom: 8, left: 8 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={COLORS.lightBorder}
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 14, fill: COLORS.charcoal, fontFamily: 'Inter', fontWeight: 600 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 240]}
            tick={{ fontSize: 12, fill: COLORS.muted, fontFamily: 'Inter' }}
            axisLine={false}
            tickLine={false}
            label={{
              value: 'Fry cycles',
              angle: -90,
              position: 'insideLeft',
              offset: 10,
              fontSize: 12,
              fill: COLORS.muted,
              fontFamily: 'Inter',
            }}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null
              const d = payload[0].payload
              return (
                <div style={tooltipStyle}>
                  <p style={{ fontWeight: 600, marginBottom: 4 }}>{d.name}</p>
                  <p>{d.cycles} fry cycles</p>
                  <p style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>
                    PUFA {d.pufa}% · MUFA {d.mufa}% · OSI {d.osi}h
                  </p>
                </div>
              )
            }}
          />
          <Bar dataKey="cycles" radius={[6, 6, 0, 0]} barSize={80}>
            <LabelList
              dataKey="cycles"
              position="top"
              style={{ fontSize: 16, fontWeight: 700, fill: COLORS.charcoal, fontFamily: 'Inter' }}
            />
            {sunflowerData.map((d, i) => (
              <Cell key={i} fill={i === 0 ? COLORS.highPUFA : COLORS.olive} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

/* ── Chart Legend ── */

export function ChartLegend() {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-sm text-charcoal/70">
      <span className="flex items-center gap-2">
        <span className="inline-block h-3 w-3 rounded-sm" style={{ background: COLORS.lowPUFA }} />
        Low PUFA (&le;15%)
      </span>
      <span className="flex items-center gap-2">
        <span className="inline-block h-3 w-3 rounded-sm" style={{ background: COLORS.midPUFA }} />
        Medium PUFA (16-35%)
      </span>
      <span className="flex items-center gap-2">
        <span className="inline-block h-3 w-3 rounded-sm" style={{ background: COLORS.highPUFA }} />
        High PUFA (&gt;35%)
      </span>
    </div>
  )
}
