import type { ApexOptions } from 'apexcharts'
import ReactDOMServer from 'react-dom/server'

import { TooltipLineChart } from './TolltipLineChart'

export const LINE_CHART_COLORS: Record<string, string> = {
	companies: '#0D383A',
	users: '#1F9D60',
	requests: '#79EF50',
	teams: '#2966FF',
	sites: '#F63D21'
}

export const LINE_CHART_BASE_CONFIG: ApexOptions = {
	chart: {
		fontFamily: 'var(--default-font-family)',
		background: 'transparent',
		parentHeightOffset: 0,
		zoom: { enabled: false },
		toolbar: { show: false }
	},
	stroke: { width: 3 },
	grid: {
		show: true,
		strokeDashArray: 4,
		padding: { top: 0, right: 0, bottom: 20, left: 30 }
	},
	legend: {
		show: true,
		showForSingleSeries: true,
		horizontalAlign: 'left',
		fontSize: '14px',
		formatter: legendName => `<div class="ml-2 leading-none">${legendName}</div>`,
		itemMargin: { horizontal: 8, vertical: 2 },
		markers: { size: 4, strokeWidth: 0 }
	},
	markers: {
		size: 5,
		strokeWidth: 1,
		hover: { size: 6 }
	},
	tooltip: {
		shared: true,
		custom: props => ReactDOMServer.renderToStaticMarkup(<TooltipLineChart {...props} />)
	},
	xaxis: {
		offsetY: 20,
		axisTicks: { show: false },
		crosshairs: {
			show: true,
			position: 'front',
			stroke: { color: '#1F9D60', width: 1, dashArray: 0 }
		},
		axisBorder: { show: false },
		labels: { style: { fontSize: '10px' } },
		tooltip: { enabled: false }
	},
	yaxis: {
		tooltip: { enabled: false },
		labels: { style: { fontSize: '10px' } }
	},
	dataLabels: { enabled: false }
}

export const LINE_CHART_LIGHT_CONFIG: ApexOptions = {
	chart: { foreColor: 'var(--color-green-800)' },
	theme: { mode: 'light' },
	grid: { borderColor: '#EDF0EF' }
}

export const LINE_CHART_DARK_CONFIG: ApexOptions = {
	chart: { foreColor: 'var(--color-white)' },
	theme: { mode: 'dark' },
	grid: { borderColor: '#0D383A' }
}

export const LINE_CHART_GRADIENT_BASE_CONFIG: ApexOptions = {
	fill: {
		type: 'gradient',
		gradient: {
			opacityFrom: 0.5,
			opacityTo: 0
		}
	}
}

export const createLineChartConfig = (
	theme: 'dark' | 'light',
	series: { name: string }[],
	labels: string[] = [],
	type: 'line' | 'area' = 'area'
): ApexOptions => {
	const colors = series.map(s => LINE_CHART_COLORS[s.name.toLowerCase()] || '#79EF50')

	const themeConfig = theme === 'dark' ? LINE_CHART_DARK_CONFIG : LINE_CHART_LIGHT_CONFIG

	return {
		...LINE_CHART_BASE_CONFIG,
		chart: {
			...LINE_CHART_BASE_CONFIG.chart,
			...themeConfig.chart,
			type
		},
		grid: {
			...LINE_CHART_BASE_CONFIG.grid,
			...themeConfig.grid
		},
		tooltip: {
			...LINE_CHART_BASE_CONFIG.tooltip,
			theme
		},
		theme: themeConfig.theme,
		colors,
		labels
	}
}
