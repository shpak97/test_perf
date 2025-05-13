'use client'

import { memo } from 'react'

import { ChartFilters } from './ChartFilters'
import { LineChart } from './LineChart'
import type { IChartSeries } from '@/types/charts/lineChart.types'

export interface LineChartWithFilterBySeriesProps {
	/** Список видимих опцій (у тому порядку, як треба показати) */
	options: readonly string[]
	/** Поточна активна опція */
	active: string
	/** Колбек перемикання */
	onChange: (value: string) => void
	/** Дані серій для графіка */
	series: IChartSeries[]
	labels?: string[]
	theme: 'light' | 'dark'
	/** Ключ для примусового ремаунта ApexCharts */
	chartKey: string
	className?: string
}

/** Графік + фільтр серій над ним. */
export const LineChartWithFilterBySeries = memo(function LineChartWithFilterBySeries({
	options,
	active,
	onChange,
	series,
	labels = [],
	theme,
	chartKey,
	className
}: LineChartWithFilterBySeriesProps) {
	return (
		<section className={className}>
			<ChartFilters
				options={options}
				active={active}
				onChange={onChange}
			/>

			<div className='relative h-[291px] w-full'>
				<LineChart
					key={chartKey} // повний ремаунт при зміні теми / серій
					theme={theme}
					series={series}
					labels={labels}
					type='area'
				/>
			</div>
		</section>
	)
})
