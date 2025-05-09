'use client'

import { FiBarChart2 } from 'react-icons/fi'

import { NoData } from '@/ui/NoData'

import { useTheme } from '@/store/app.store'

import { useChartSeries } from '@/hooks/charts/useChartSeries'
import { useChartSeriesMeta } from '@/hooks/charts/useChartSeriesMeta'

import { LineChartWithFilterBySeries } from '../charts/LineChartWithFilterBySeries'
import { ContentTitle } from '../content/ContentTitle'
import { ClientOnlyWrapper } from '../wrappers/ClientOnlyWrapper'
import { ContentCardWrapper } from '../wrappers/ContentCardWrapper'
import { HeaderCardWrapper } from '../wrappers/HeaderCardWrapper'

import type { ILineChart } from '@/types/charts/lineChart.types'

interface CardUsedLimitsProps {
	data: ILineChart
}
export function CardUsedLimits({ data }: CardUsedLimitsProps) {
	const theme = useTheme()
	const allLabel = 'General'

	const { selectedSeries, selectedLabel, updateSeries } = useChartSeries(data.series, allLabel)

	const { chartKey, filterOptions, hasData } = useChartSeriesMeta(
		allLabel,
		theme,
		selectedSeries,
		data.series
	)
	console.log(chartKey)
	return (
		<>
			<HeaderCardWrapper>
				<ContentTitle
					title='Used limits'
					Icon={FiBarChart2}
				/>
			</HeaderCardWrapper>

			<ContentCardWrapper>
				<ClientOnlyWrapper
					className='min-h-[345px]'
					placeholder='Loading...'
				>
					{hasData ? (
						<LineChartWithFilterBySeries
							options={filterOptions}
							active={selectedLabel}
							onChange={updateSeries}
							series={selectedSeries}
							labels={data.labels}
							theme={theme}
							chartKey={chartKey}
						/>
					) : (
						<NoData
							className='min-h-[345px]'
							placeholder='No data'
						/>
					)}
				</ClientOnlyWrapper>
			</ContentCardWrapper>
		</>
	)
}
