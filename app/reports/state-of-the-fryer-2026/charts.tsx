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
} from 'recharts'

const COLORS = {
  amber: '#C8841A',
  charcoal: '#1F1F1F',
  muted: '#8A8D8F',
  light: '#E8E2D8',
  warmGray: '#B5AFA6',
  softAmber: '#D4A04A',
}

/* ── Testing Gap Donut ── */

const testingData = [
  { name: 'Never tested TPM', value: 78 },
  { name: 'Have tested TPM', value: 22 },
]

export function TestingDonut() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-72 w-72 sm:h-80 sm:w-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={testingData}
              cx="50%"
              cy="50%"
              innerRadius="55%"
              outerRadius="80%"
              paddingAngle={3}
              dataKey="value"
              strokeWidth={0}
            >
              <Cell fill={COLORS.charcoal} />
              <Cell fill={COLORS.amber} />
            </Pie>
            <Tooltip
              formatter={(value) => `${value}%`}
              contentStyle={{
                background: '#1F1F1F',
                border: 'none',
                borderRadius: '4px',
                color: '#FAF6F0',
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex items-center gap-6 font-sans text-sm">
        <span className="flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ background: COLORS.charcoal }}
          />
          Never tested (78%)
        </span>
        <span className="flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ background: COLORS.amber }}
          />
          Have tested (22%)
        </span>
      </div>
    </div>
  )
}

/* ── Oil Types Horizontal Bar ── */

const oilData = [
  { name: 'Soybean', value: 42 },
  { name: 'Canola', value: 28 },
  { name: 'Palm', value: 15 },
  { name: 'Peanut', value: 7 },
  { name: 'High Oleic', value: 4 },
  { name: 'Other', value: 4 },
]

export function OilTypesBar() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={oilData}
          layout="vertical"
          margin={{ top: 8, right: 40, bottom: 8, left: 8 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={false}
            stroke="#E8E2D8"
          />
          <XAxis
            type="number"
            domain={[0, 50]}
            tick={{ fontSize: 12, fill: '#8A8D8F', fontFamily: 'Inter' }}
            tickFormatter={(v) => `${v}%`}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={80}
            tick={{ fontSize: 13, fill: '#1F1F1F', fontFamily: 'Inter' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => `${value}%`}
            contentStyle={{
              background: '#1F1F1F',
              border: 'none',
              borderRadius: '4px',
              color: '#FAF6F0',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
            }}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={28}>
            {oilData.map((_, i) => (
              <Cell
                key={i}
                fill={i === 0 ? COLORS.amber : i === 1 ? COLORS.softAmber : COLORS.light}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

/* ── Purchase Criteria Bar ── */

const criteriaData = [
  { name: 'Price', value: 71 },
  { name: 'Distributor Rec.', value: 14 },
  { name: 'Flavor', value: 9 },
  { name: 'Performance Data', value: 6 },
]

export function PurchaseCriteriaBar() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={criteriaData}
          margin={{ top: 8, right: 24, bottom: 8, left: 8 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E8E2D8"
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: '#1F1F1F', fontFamily: 'Inter' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 80]}
            tick={{ fontSize: 12, fill: '#8A8D8F', fontFamily: 'Inter' }}
            tickFormatter={(v) => `${v}%`}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => `${value}%`}
            contentStyle={{
              background: '#1F1F1F',
              border: 'none',
              borderRadius: '4px',
              color: '#FAF6F0',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
            }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={48}>
            {criteriaData.map((_, i) => (
              <Cell
                key={i}
                fill={i === 0 ? COLORS.charcoal : i === 1 ? COLORS.amber : COLORS.muted}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

/* ── International Comparison ── */

const intlData = [
  { name: 'Athens', value: 17, label: '17% exceeded' },
  { name: 'Delhi', value: 65, label: '65%+ exceeded' },
  { name: 'U.S. (est.)', value: 78, label: '78% never tested' },
]

export function InternationalBar() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={intlData}
          margin={{ top: 8, right: 24, bottom: 8, left: 8 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E8E2D8"
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 13, fill: '#1F1F1F', fontFamily: 'Inter' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fontSize: 12, fill: '#8A8D8F', fontFamily: 'Inter' }}
            tickFormatter={(v) => `${v}%`}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => `${value}%`}
            contentStyle={{
              background: '#1F1F1F',
              border: 'none',
              borderRadius: '4px',
              color: '#FAF6F0',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
            }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={56}>
            {intlData.map((_, i) => (
              <Cell
                key={i}
                fill={
                  i === 0
                    ? COLORS.amber
                    : i === 1
                      ? COLORS.softAmber
                      : COLORS.charcoal
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
