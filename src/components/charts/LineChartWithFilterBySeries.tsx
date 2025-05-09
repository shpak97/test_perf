import { ChartFilters } from './ChartFilters'
import { LineChart } from './LineChart'
import type { IChartSeries } from '@/types/charts/lineChart.types'

interface LineChartWithFilterBySeriesProps {
	options: string[]
	active: string
	onChange: (value: string) => void
	series: IChartSeries[]
	labels: string[]
	theme: 'light' | 'dark'
	chartKey: string
}

export function LineChartWithFilterBySeries({
	options,
	active,
	onChange,
	series,
	labels,
	theme,
	chartKey
}: LineChartWithFilterBySeriesProps) {
	return (
		<>
			<ChartFilters
				options={options}
				active={active}
				onChange={onChange}
			/>
			<div className='relative h-[291px] w-full'>
				<LineChart
					key={chartKey}
					theme={theme}
					series={series}
					labels={labels}
					type='area'
				/>
			</div>
		</>
	)
}
