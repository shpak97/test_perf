'use client'

import dynamic from 'next/dynamic'

import { LINE_CHART_GRADIENT_BASE_CONFIG, createLineChartConfig } from './charts.config'
import type { IChartSeries } from '@/types/charts/lineChart.types'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface LineChartProps {
	type: 'line' | 'area'
	series: IChartSeries[]
	theme: 'light' | 'dark'
	labels: string[]
}

export function LineChart({ type, series, theme, labels }: LineChartProps) {
	const chartOptions = createLineChartConfig(theme, series, labels)
	const finalOptions =
		type === 'area' ? { ...chartOptions, ...LINE_CHART_GRADIENT_BASE_CONFIG } : chartOptions

	return (
		<ApexChart
			options={finalOptions}
			series={series}
			type={type}
			height='100%'
			width='100%'
		/>
	)
}
