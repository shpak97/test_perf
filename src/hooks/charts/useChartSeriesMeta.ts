import { useMemo } from 'react'

import type { IChartSeries } from '@/types/charts/lineChart.types'

/**
 * Повертає службові дані для компонента з лінійним графіком:
 * ​  – `chartKey` → форсує ремоунт ApexCharts при зміні теми / серій
 * ​  – `filterOptions` → масив міток для фільтра (уключаючи all‑label)
 * ​  – `hasData` → чи є що показувати
 */
const useChartSeriesMeta = (
	allLabel: string,
	theme: 'light' | 'dark',
	selectedSeries: IChartSeries[],
	initialSeries: readonly IChartSeries[]
) => {
	/* -------- chartKey -------- */
	const chartKey = useMemo(() => {
		// Уникаємо повторного join, якщо серії не мінялись
		const names = selectedSeries.map(s => s.name).join('-')
		return `${theme}-${names}`
	}, [theme, selectedSeries])

	/* -------- filter options -------- */
	const filterOptions = useMemo(() => {
		// Унікальні мітки, щоб не дублювати allLabel, якщо раптом співпадає з назвою серії
		const unique = new Set<string>([allLabel])
		initialSeries.forEach(s => unique.add(s.name))
		return Array.from(unique)
	}, [allLabel, initialSeries])

	/* -------- flag: чи є дані -------- */
	const hasData = selectedSeries.length > 0

	return { chartKey, filterOptions, hasData } as const
}

export default useChartSeriesMeta
