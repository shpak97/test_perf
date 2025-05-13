/* ───────────── utils/chart.utils.ts ───────────── */
import type { IChartSeries } from '@/types/charts/lineChart.types'

/**
 * Повертає масив серій згідно з вибраною міткою.
 *
 * 1. Якщо `selectedName` === `allLabel` → повертаємо увесь масив без копіювання.
 * 2. Якщо є збіг за `name` → повертаємо масив з однією серією.
 * 3. Інакше → порожній масив (даних немає).
 *
 * ⚠️ `allSeries` не мутується.
 */
export function filterChartSeries(
	allSeries: readonly IChartSeries[],
	selectedName: string,
	allLabel = 'all'
): IChartSeries[] {
	if (selectedName === allLabel) return allSeries as IChartSeries[]

	const found = allSeries.find(({ name }) => name === selectedName)
	return found ? [found] : []
}
