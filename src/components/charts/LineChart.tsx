'use client'

import dynamic from 'next/dynamic'
import { memo, useMemo } from 'react'

import { createLineChartConfig } from './charts.config'
import type { IChartSeries } from '@/types/charts/lineChart.types'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

export interface LineChartProps {
	type?: 'line' | 'area'
	series: IChartSeries[]
	theme: 'light' | 'dark'
	labels?: string[]
}

/** Обгортка над ApexCharts з автоматичним конфігуруванням та мемоізацією. */
const LineChart = memo(({ type = 'area', series, theme, labels = [] }: LineChartProps) => {
	/** Конфігурація графіка перераховується тільки при зміні залежностей. */
	const options = useMemo(
		() => createLineChartConfig(theme, series, labels, type),
		[theme, series, labels, type]
	)

	/** Ключ форцує ремоунт при зміні теми, типу чи складу серій. */
	const chartKey = useMemo(
		() => `${theme}-${type}-${series.map(s => s.name).join('-')}`,
		[theme, type, series]
	)

	return (
		<ApexChart
			key={chartKey}
			options={options}
			series={series}
			type={type}
			height='100%'
			width='100%'
		/>
	)
})

LineChart.displayName = 'LineChart'

export default LineChart
