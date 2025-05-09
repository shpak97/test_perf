import type { IChartSeries } from '@/types/charts/lineChart.types'

export const filterChartSeries = (
	allSeries: IChartSeries[],
	selectedName: string,
	allLabel = 'all'
): IChartSeries[] => {
	if (selectedName === allLabel) return allSeries
	const match = allSeries.find(s => s.name === selectedName)
	return match ? [match] : []
}
