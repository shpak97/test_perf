'use client'

import type { ApexOptions } from 'apexcharts'

/* --------- локальні типи --------- */
interface ApexTooltipContext {
	globals: {
		series: number[][]
		seriesNames: string[]
		colors: string[]
		categoryLabels: string[]
		labels: string[]
	}
	config: ApexOptions & { colors?: string[] }
}

interface TooltipLineChartProps {
	series: number[][]
	dataPointIndex: number
	w: ApexTooltipContext
}

/** Кастомний tooltip для ApexCharts (Line / Area). */
export function TooltipLineChart({ series, dataPointIndex, w }: TooltipLineChartProps) {
	const {
		globals: { seriesNames, categoryLabels, labels },
		config: { colors = [] }
	} = w

	const label = categoryLabels[dataPointIndex] ?? labels[dataPointIndex] ?? ''

	return (
		<div className='rounded-lg bg-green-50 p-2.5 text-xs text-green-800'>
			<p className='mb-2.5 border-b border-green-300 pb-2.5 font-bold'>{label}</p>

			{series.map((values, i) => {
				const value = values[dataPointIndex]
				if (value === undefined || value === null) return null

				return (
					<div
						key={seriesNames[i] ?? i}
						className='mb-1.5 flex items-center justify-between gap-2 last:mb-0'
					>
						<span
							className='inline-block h-2 w-2 shrink-0 rounded-full'
							style={{ backgroundColor: colors[i] }}
						/>
						<span className='flex-1 truncate'>{seriesNames[i]}</span>
						<span className='font-bold'>{value}</span>
					</div>
				)
			})}
		</div>
	)
}
