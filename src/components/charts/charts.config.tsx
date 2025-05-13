/* ───────── charts/lineChart.config.ts ───────── */
import type { ApexOptions } from 'apexcharts'
import ReactDOMServer from 'react-dom/server'

import { TooltipLineChart } from './TolltipLineChart'

/* ---------- кольори серій ---------- */
export const LINE_CHART_COLORS = {
	companies: '#0D383A',
	users: '#1F9D60',
	requests: '#79EF50',
	teams: '#2966FF',
	sites: '#F63D21'
} as const

type SeriesKey = keyof typeof LINE_CHART_COLORS

/* ---------- базова конфігурація (light / dark патчі додаємо окремо) ---------- */
const BASE_CONFIG: ApexOptions = {
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
		formatter: (name: string) => `<div class="ml-2 leading-none">${name}</div>`,
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
			stroke: { color: '#1F9D60', width: 1 }
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
} satisfies ApexOptions

/* ---------- light / dark патчі ---------- */
const LIGHT_PATCH: ApexOptions = {
	chart: { foreColor: '#0D383A' }, // зел.‑800 у HEX
	theme: { mode: 'light' },
	grid: { borderColor: '#EDF0EF' }
}

const DARK_PATCH: ApexOptions = {
	chart: { foreColor: '#FFFFFF' },
	theme: { mode: 'dark' },
	grid: { borderColor: '#0D383A' }
}

/* ---------- градієнт fill (area only) ---------- */
const GRADIENT_FILL: ApexOptions = {
	fill: {
		type: 'gradient',
		gradient: { opacityFrom: 0.5, opacityTo: 0 }
	}
}

/* ---------- helper: мапимо назви серій у кольори ---------- */
const mapSeriesToColors = (series: { name: string }[]): string[] =>
	series.map(s => LINE_CHART_COLORS[s.name.toLowerCase() as SeriesKey] ?? '#79EF50')

/* ---------- фабрика конфігів ---------- */
export const createLineChartConfig = (
	theme: 'light' | 'dark',
	series: { name: string }[],
	labels: string[] = [],
	type: 'line' | 'area' = 'area'
): ApexOptions => {
	const themePatch = theme === 'dark' ? DARK_PATCH : LIGHT_PATCH
	const colors = mapSeriesToColors(series)

	return {
		...BASE_CONFIG,
		...themePatch,
		...(type === 'area' && GRADIENT_FILL),

		chart: {
			...BASE_CONFIG.chart!,
			...themePatch.chart,
			type
		},
		grid: {
			...BASE_CONFIG.grid!,
			...themePatch.grid
		},
		tooltip: {
			...BASE_CONFIG.tooltip,
			theme
		},

		colors,
		labels
	}
}
