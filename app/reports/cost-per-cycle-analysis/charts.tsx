'use client'

import { useState } from 'react'
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

/* ── Brand Palette ── */

const C = {
  amber: '#C8841A',
  amberLight: '#D9A54B',
  amberDark: '#A06A10',
  charcoal: '#1F1F1F',
  offwhite: '#FAF6F0',
  muted: '#8A8D8F',
  light: '#E8E2D8',
  olive: '#5C6A3E',
  oliveLight: '#7A8B56',
  danger: '#C0392B',
  dangerLight: '#E74C3C',
}

const tooltipStyle: React.CSSProperties = {
  background: C.charcoal,
  border: 'none',
  borderRadius: '8px',
  color: C.offwhite,
  fontSize: '13px',
  fontFamily: 'Inter, system-ui, sans-serif',
  padding: '14px 18px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
  lineHeight: '1.6',
}

function getPUFAColor(pufa: number): string {
  if (pufa <= 15) return C.olive
  if (pufa <= 35) return C.amber
  return C.danger
}

function getPUFALabel(pufa: number): string {
  if (pufa <= 15) return 'Low PUFA'
  if (pufa <= 35) return 'Medium PUFA'
  return 'High PUFA'
}

/* ── Full Rankings Data ── */

const oilRankings = [
  { name: 'HO Palm Olein (OxG)', short: 'HO Palm Olein', cycles: 355, pufa: 14, mufa: 52, osi: 45, type: 'fruit' },
  { name: 'Conv. Palm Olein', short: 'Palm Olein', cycles: 300, pufa: 12, mufa: 40, osi: 35, type: 'fruit' },
  { name: 'Beef Tallow', short: 'Beef Tallow', cycles: 280, pufa: 4, mufa: 42, osi: 30, type: 'animal' },
  { name: 'Coconut Oil', short: 'Coconut', cycles: 250, pufa: 2, mufa: 6, osi: 35, type: 'fruit' },
  { name: 'Ghee', short: 'Ghee', cycles: 220, pufa: 4, mufa: 26, osi: 28, type: 'animal' },
  { name: 'HO Sunflower', short: 'HO Sunflower', cycles: 210, pufa: 9, mufa: 82, osi: 25, type: 'seed' },
  { name: 'Lard', short: 'Lard', cycles: 200, pufa: 11, mufa: 45, osi: 22, type: 'animal' },
  { name: 'HO Canola', short: 'HO Canola', cycles: 190, pufa: 15, mufa: 75, osi: 22, type: 'seed' },
  { name: 'HO Soybean', short: 'HO Soybean', cycles: 180, pufa: 16, mufa: 73, osi: 20, type: 'seed' },
  { name: 'Refined Olive', short: 'Olive', cycles: 160, pufa: 11, mufa: 73, osi: 15, type: 'fruit' },
  { name: 'EVOO', short: 'EVOO', cycles: 150, pufa: 11, mufa: 73, osi: 18, type: 'fruit' },
  { name: 'Mid-Oleic Sunflower', short: 'Mid-Oleic Sun.', cycles: 150, pufa: 26, mufa: 65, osi: 16, type: 'seed' },
  { name: 'Rice Bran', short: 'Rice Bran', cycles: 140, pufa: 35, mufa: 39, osi: 14, type: 'seed' },
  { name: 'Avocado', short: 'Avocado', cycles: 140, pufa: 14, mufa: 71, osi: 15, type: 'fruit' },
  { name: 'Peanut', short: 'Peanut', cycles: 130, pufa: 32, mufa: 46, osi: 12, type: 'seed' },
  { name: 'Canola (Conv.)', short: 'Canola', cycles: 120, pufa: 28, mufa: 63, osi: 12, type: 'seed' },
  { name: 'Conv. Sunflower', short: 'Sunflower', cycles: 107, pufa: 66, mufa: 20, osi: 6, type: 'seed' },
  { name: 'Cottonseed', short: 'Cottonseed', cycles: 90, pufa: 52, mufa: 18, osi: 9, type: 'seed' },
  { name: 'Corn', short: 'Corn', cycles: 85, pufa: 55, mufa: 28, osi: 8, type: 'seed' },
  { name: 'Soybean (Conv.)', short: 'Soybean', cycles: 72, pufa: 58, mufa: 23, osi: 7, type: 'seed' },
  { name: 'Grapeseed', short: 'Grapeseed', cycles: 60, pufa: 71, mufa: 17, osi: 5, type: 'seed' },
]

const rankingsReversed = [...oilRankings].reverse()

/* ══════════════════════════════════════════════════════
   PERFORMANCE RANKINGS — Premium horizontal bar chart
   ══════════════════════════════════════════════════════ */

export function PerformanceRankingsChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div>
      {/* Top labels row */}
      <div className="mb-4 flex items-center justify-between font-sans text-xs text-charcoal/40">
        <span>← Fewer fry cycles</span>
        <span>More fry cycles →</span>
      </div>
      <div style={{ width: '100%', height: 880 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={rankingsReversed}
            layout="vertical"
            margin={{ top: 0, right: 70, bottom: 0, left: 0 }}
            onMouseMove={(state) => {
              if (state?.activeTooltipIndex !== undefined) {
                setActiveIndex(Number(state.activeTooltipIndex))
              }
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              stroke={C.light}
            />
            <XAxis
              type="number"
              domain={[0, 400]}
              tick={{ fontSize: 11, fill: C.muted, fontFamily: 'Inter' }}
              axisLine={false}
              tickLine={false}
              ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400]}
            />
            <YAxis
              type="category"
              dataKey="name"
              width={160}
              tick={({ x, y, payload }) => {
                const oil = rankingsReversed.find((o) => o.name === payload.value)
                return (
                  <g transform={`translate(${x},${y})`}>
                    <text
                      x={-8}
                      y={0}
                      dy={4}
                      textAnchor="end"
                      fill={C.charcoal}
                      fontSize={12}
                      fontFamily="Inter, system-ui, sans-serif"
                      fontWeight={oil && oil.cycles >= 280 ? 700 : 400}
                    >
                      {payload.value}
                    </text>
                  </g>
                )
              }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null
                const d = payload[0].payload
                const rank = oilRankings.findIndex((o) => o.name === d.name) + 1
                return (
                  <div style={tooltipStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span style={{
                        display: 'inline-block', width: 10, height: 10,
                        borderRadius: '50%', background: getPUFAColor(d.pufa),
                      }} />
                      <span style={{ fontWeight: 700, fontSize: 14 }}>{d.name}</span>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6, marginTop: 2 }}>
                      <p style={{ fontSize: 20, fontWeight: 700, color: C.amber }}>
                        {d.cycles} fry cycles
                      </p>
                      <p style={{ fontSize: 11, opacity: 0.6, marginTop: 4 }}>
                        Rank #{rank} · {getPUFALabel(d.pufa)} ({d.pufa}%) · MUFA {d.mufa}% · OSI {d.osi}h
                      </p>
                      <p style={{ fontSize: 11, opacity: 0.4, marginTop: 2 }}>
                        {d.type === 'fruit' ? '🫒 Fruit oil' : d.type === 'animal' ? '🥩 Animal fat' : '🌱 Seed oil'}
                      </p>
                    </div>
                  </div>
                )
              }}
            />
            {/* Reference lines for context */}
            <ReferenceLine
              x={72}
              stroke={C.danger}
              strokeDasharray="4 4"
              strokeWidth={1}
              label={{
                value: 'Soybean: 72',
                position: 'insideTopRight',
                fontSize: 10,
                fill: C.danger,
                fontFamily: 'Inter',
              }}
            />
            <Bar dataKey="cycles" radius={[0, 6, 6, 0]} barSize={28}>
              <LabelList
                dataKey="cycles"
                position="right"
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  fill: C.charcoal,
                  fontFamily: 'Inter',
                }}
              />
              {rankingsReversed.map((oil, i) => (
                <Cell
                  key={i}
                  fill={getPUFAColor(oil.pufa)}
                  opacity={activeIndex === null || activeIndex === i ? 1 : 0.3}
                  style={{ transition: 'opacity 0.2s' }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   PUFA vs FRY CYCLES — Scatter with labels
   ══════════════════════════════════════════════════════ */

const scatterData = oilRankings.map((oil) => ({
  x: oil.pufa,
  y: oil.cycles,
  name: oil.short,
  fullName: oil.name,
  z: oil.osi,
  type: oil.type,
}))

export function PUFAScatterChart() {
  return (
    <div>
      <div style={{ width: '100%', height: 480 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 30, bottom: 40, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.light} />
            <XAxis
              type="number"
              dataKey="x"
              name="PUFA"
              domain={[0, 80]}
              tick={{ fontSize: 12, fill: C.muted, fontFamily: 'Inter' }}
              axisLine={false}
              tickLine={false}
              label={{
                value: 'PUFA content (%) →',
                position: 'insideBottom',
                offset: -20,
                fontSize: 12,
                fill: C.muted,
                fontFamily: 'Inter',
              }}
              tickFormatter={(v) => `${v}%`}
            />
            <YAxis
              type="number"
              dataKey="y"
              name="Fry Cycles"
              domain={[0, 400]}
              tick={{ fontSize: 12, fill: C.muted, fontFamily: 'Inter' }}
              axisLine={false}
              tickLine={false}
              label={{
                value: 'Fry cycles to 25% TPM ↑',
                angle: -90,
                position: 'insideLeft',
                offset: 10,
                fontSize: 12,
                fill: C.muted,
                fontFamily: 'Inter',
              }}
            />
            <ZAxis type="number" dataKey="z" range={[80, 280]} />
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null
                const d = payload[0].payload
                return (
                  <div style={tooltipStyle}>
                    <p style={{ fontWeight: 700, fontSize: 14 }}>{d.fullName}</p>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6, marginTop: 6 }}>
                      <p><span style={{ color: C.amber, fontWeight: 700 }}>{d.y}</span> fry cycles</p>
                      <p style={{ fontSize: 11, opacity: 0.6, marginTop: 2 }}>
                        PUFA: {d.x}% · OSI: {d.z}h
                      </p>
                      <p style={{ fontSize: 11, opacity: 0.4, marginTop: 2 }}>
                        {d.type === 'fruit' ? '🫒 Fruit oil' : d.type === 'animal' ? '🥩 Animal fat' : '🌱 Seed oil'}
                      </p>
                    </div>
                  </div>
                )
              }}
            />
            {/* Danger zone highlight */}
            <ReferenceLine
              x={15}
              stroke={C.olive}
              strokeDasharray="6 4"
              strokeWidth={2}
              label={{
                value: '← Low PUFA zone',
                position: 'insideTopLeft',
                fontSize: 11,
                fill: C.olive,
                fontFamily: 'Inter',
                fontWeight: 600,
              }}
            />
            <ReferenceLine
              x={50}
              stroke={C.danger}
              strokeDasharray="6 4"
              strokeWidth={1.5}
              label={{
                value: 'Danger zone →',
                position: 'insideTopRight',
                fontSize: 11,
                fill: C.danger,
                fontFamily: 'Inter',
                fontWeight: 600,
              }}
            />
            <Scatter data={scatterData}>
              {scatterData.map((entry, i) => (
                <Cell
                  key={i}
                  fill={getPUFAColor(entry.x)}
                  stroke={C.charcoal}
                  strokeWidth={1}
                  strokeOpacity={0.15}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      {/* Labeled callouts for key oils */}
      <div className="mt-4 grid grid-cols-3 gap-3 font-sans text-xs">
        <div className="rounded bg-olive/10 p-3 text-center">
          <p className="font-bold text-olive">Best performers</p>
          <p className="text-charcoal/50">All under 15% PUFA</p>
        </div>
        <div className="rounded bg-amber/10 p-3 text-center">
          <p className="font-bold text-amber">Mid range</p>
          <p className="text-charcoal/50">16–35% PUFA</p>
        </div>
        <div className="rounded bg-red-500/10 p-3 text-center">
          <p className="font-bold text-red-600">Worst performers</p>
          <p className="text-charcoal/50">50%+ PUFA</p>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   SUNFLOWER COMPARISON — Side by side with details
   ══════════════════════════════════════════════════════ */

export function SunflowerComparisonChart() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        {/* Conventional */}
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full border-4 sm:h-40 sm:w-40" style={{ borderColor: C.danger }}>
            <div>
              <p className="font-sans text-3xl font-bold sm:text-4xl" style={{ color: C.danger }}>107</p>
              <p className="font-sans text-xs text-charcoal/50">cycles</p>
            </div>
          </div>
          <p className="font-sans text-sm font-bold text-charcoal">Conv. Sunflower</p>
          <div className="mt-3 space-y-1 font-sans text-xs text-charcoal/50">
            <p><span className="font-semibold text-charcoal/70">66%</span> PUFA</p>
            <p><span className="font-semibold text-charcoal/70">20%</span> MUFA</p>
            <p><span className="font-semibold text-charcoal/70">6h</span> OSI</p>
          </div>
          <p className="mt-3 inline-block rounded bg-red-500/10 px-3 py-1 font-sans text-xs font-semibold text-red-600">
            High PUFA = rapid degradation
          </p>
        </div>

        {/* High Oleic */}
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full border-4 sm:h-40 sm:w-40" style={{ borderColor: C.olive }}>
            <div>
              <p className="font-sans text-3xl font-bold sm:text-4xl" style={{ color: C.olive }}>210</p>
              <p className="font-sans text-xs text-charcoal/50">cycles</p>
            </div>
          </div>
          <p className="font-sans text-sm font-bold text-charcoal">HO Sunflower</p>
          <div className="mt-3 space-y-1 font-sans text-xs text-charcoal/50">
            <p><span className="font-semibold text-charcoal/70">9%</span> PUFA</p>
            <p><span className="font-semibold text-charcoal/70">82%</span> MUFA</p>
            <p><span className="font-semibold text-charcoal/70">25h</span> OSI</p>
          </div>
          <p className="mt-3 inline-block rounded bg-olive/10 px-3 py-1 font-sans text-xs font-semibold text-olive">
            Low PUFA = 2× fry life
          </p>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-charcoal/10 bg-charcoal/5 p-4 text-center">
        <p className="font-sans text-sm text-charcoal/70">
          <strong className="text-charcoal">Same plant. Same species.</strong>{' '}
          Nearly double the fry life — achieved entirely by breeding for a different fatty acid profile.
        </p>
      </div>
    </div>
  )
}

/* ── Chart Legend ── */

export function ChartLegend() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-lg border border-charcoal/10 bg-charcoal/5 px-6 py-4 font-sans text-sm">
      <span className="font-semibold text-charcoal/50">PUFA Level:</span>
      <span className="flex items-center gap-2">
        <span className="inline-block h-4 w-4 rounded" style={{ background: C.olive }} />
        <span className="text-charcoal/70">Low ≤15%</span>
      </span>
      <span className="flex items-center gap-2">
        <span className="inline-block h-4 w-4 rounded" style={{ background: C.amber }} />
        <span className="text-charcoal/70">Medium 16–35%</span>
      </span>
      <span className="flex items-center gap-2">
        <span className="inline-block h-4 w-4 rounded" style={{ background: C.danger }} />
        <span className="text-charcoal/70">High &gt;35%</span>
      </span>
      <span className="flex items-center gap-2">
        <span className="text-xs text-charcoal/40">🫒 Fruit oil</span>
        <span className="text-xs text-charcoal/40">🥩 Animal fat</span>
        <span className="text-xs text-charcoal/40">🌱 Seed oil</span>
      </span>
    </div>
  )
}
