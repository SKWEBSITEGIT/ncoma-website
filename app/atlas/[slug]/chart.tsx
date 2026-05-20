'use client'

import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts'

const COLORS = {
  SAFA: '#ef9a9a',
  MUFA: '#C8841A',
  PUFA: '#90caf9',
}

export function FattyAcidChart({ safa, mufa, pufa }: { safa: number; mufa: number; pufa: number }) {
  const data = [
    { name: 'SAFA', value: safa },
    { name: 'MUFA', value: mufa },
    { name: 'PUFA', value: pufa },
  ]

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
            label={({ name, value }) => `${name} ${value}%`}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={COLORS[entry.name as keyof typeof COLORS]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
