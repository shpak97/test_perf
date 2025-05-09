import { useState } from 'react'

import { filterChartSeries } from '@/utils/chart.utils'

import type { IChartSeries } from '@/types/charts/lineChart.types'

export function useChartSeries(initial: IChartSeries[], allLabel = 'all', showAllOption = true) {
	const [selectedSeries, setSelectedSeries] = useState<IChartSeries[]>(initial)

	const selectedLabel =
		showAllOption && selectedSeries.length === initial.length ? allLabel : selectedSeries[0].name

	const updateSeries = (value: string) => {
		setSelectedSeries(filterChartSeries(initial, value, allLabel))
	}

	return {
		selectedSeries,
		selectedLabel,
		updateSeries
	}
}
