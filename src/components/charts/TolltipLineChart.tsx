'use client'

import type { ApexOptions } from 'apexcharts'

interface ApexTooltipContext {
	globals: {
		series: number[][]
		seriesNames: string[]
		colors: string[]
		seriesIndex: number
		categoryLabels: string[]
		labels: string[]
	}
	config: ApexOptions
}

interface TooltipLineChartProps {
	series: number[][]
	dataPointIndex: number
	w: ApexTooltipContext
}

export function TooltipLineChart({ series, dataPointIndex, w }: TooltipLineChartProps) {
	const {
		globals: { seriesNames, categoryLabels, labels },
		config: { colors = [] }
	} = w

	const label = categoryLabels?.[dataPointIndex] || labels?.[dataPointIndex] || ''

	return (
		<div className='rounded-lg bg-green-50 p-2.5 text-xs text-green-800'>
			<div className='mb-2.5 border-b border-b-green-300 pb-2.5 font-bold'>{label}</div>

			{series.map((data, index) => {
				const value = data[dataPointIndex]
				if (value == null) return null

				return (
					<div
						key={index}
						className='mb-1.5 flex items-center justify-between gap-2 last:mb-0'
					>
						<span
							className='inline-block h-2 w-2 rounded-full'
							style={{ backgroundColor: colors[index] }}
						/>
						<span className='flex-1'>{seriesNames[index]}</span>
						<span className='font-bold'>{value}</span>
					</div>
				)
			})}
		</div>
	)
}
