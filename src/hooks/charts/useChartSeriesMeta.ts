import { useMemo } from 'react'

import type { IChartSeries } from '@/types/charts/lineChart.types'

export function useChartSeriesMeta(
	allLabel: string,
	theme: 'light' | 'dark',
	selectedSeries: IChartSeries[],
	initialSeries: IChartSeries[]
) {
	const chartKey = useMemo(() => {
		return [theme, ...selectedSeries.map(s => s.name)].join('-')
	}, [theme, selectedSeries])

	const filterOptions = useMemo(() => {
		return [allLabel, ...initialSeries.map(s => s.name)]
	}, [allLabel, initialSeries])

	const hasData = useMemo(() => selectedSeries.length > 0, [selectedSeries])

	return {
		chartKey,
		filterOptions,
		hasData
	}
}
