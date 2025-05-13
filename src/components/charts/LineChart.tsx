'use client'

import dynamic from 'next/dynamic'
import { memo, useMemo } from 'react'

import { LINE_CHART_GRADIENT_BASE_CONFIG, createLineChartConfig } from './charts.config'
import type { IChartSeries } from '@/types/charts/lineChart.types'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

export interface LineChartProps {
	type?: 'line' | 'area'
	series: IChartSeries[]
	theme: 'light' | 'dark'
	labels?: string[]
}

/** Обгортка над ApexCharts з автоконфігом і мемоізацією */
export const LineChart = memo(function LineChart({
	type = 'area',
	series,
	theme,
	labels = []
}: LineChartProps) {
	/* memo‑конфіг: перераховується лише при зміні залежностей */
	const options = useMemo(() => {
		const base = createLineChartConfig(theme, series, labels)
		return type === 'area' ? { ...base, ...LINE_CHART_GRADIENT_BASE_CONFIG } : base
	}, [theme, series, labels, type])

	/* ключ примусово перемальовує графік, якщо theme або назви серій змінились */
	const chartKey = useMemo(() => `${theme}-${series.map(s => s.name).join('-')}`, [theme, series])

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
