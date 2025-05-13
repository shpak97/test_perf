import { useCallback, useMemo, useState } from 'react'

import { filterChartSeries } from '@/utils/chart.utils'

import type { IChartSeries } from '@/types/charts/lineChart.types'

export function useChartSeries(initial: IChartSeries[], allLabel = 'all', showAllOption = true) {
	const [selectedSeries, setSelectedSeries] = useState<IChartSeries[]>([...initial])

	/* активна мітка */
	const selectedLabel = useMemo(() => {
		if (showAllOption && selectedSeries.length === initial.length) return allLabel
		return selectedSeries[0]?.name ?? ''
	}, [selectedSeries, initial.length, showAllOption, allLabel])

	/* оновлення серій */
	const updateSeries = useCallback(
		(value: string) => {
			setSelectedSeries(filterChartSeries(initial, value, allLabel))
		},
		[initial, allLabel]
	)

	return { selectedSeries, selectedLabel, updateSeries } as const
}
