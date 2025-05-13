'use client'

import { memo, useMemo } from 'react'
import { FiBarChart2 } from 'react-icons/fi'

import { NoData } from '@/ui/NoData'

import { useTheme } from '@/store/app.store'

import { useChartSeries } from '@/hooks/charts/useChartSeries'
import { useChartSeriesMeta } from '@/hooks/charts/useChartSeriesMeta'

import { LineChartWithFilterBySeries } from '../../charts/LineChartWithFilterBySeries'
import { ContentTitle } from '../../content/ContentTitle'
import { ClientOnlyWrapper } from '../../wrappers/ClientOnlyWrapper'
import { ContentCardWrapper } from '../../wrappers/ContentCardWrapper'
import { HeaderCardWrapper } from '../../wrappers/HeaderCardWrapper'

import type { ILineChart } from '@/types/charts/lineChart.types'

interface CardChartUsedLimitsProps {
	data: ILineChart
}

/** Карточка «Used limits» з графіком та фільтром по серіях */
export const CardChartUsedLimits = memo(function CardChartUsedLimits({
	data
}: CardChartUsedLimitsProps) {
	const theme = useTheme()
	const ALL_LABEL = 'General'

	/* --- керування обраними серіями --- */
	const { selectedSeries, selectedLabel, updateSeries } = useChartSeries(data.series, ALL_LABEL)

	/* --- обчислення meta для графіка / фільтрів --- */
	const { chartKey, filterOptions, hasData } = useChartSeriesMeta(
		ALL_LABEL,
		theme,
		selectedSeries,
		data.series
	)

	/* --- мемо‑плейсхолдер для клієнтського завантаження --- */
	const placeholder = useMemo(() => 'Loading…', [])

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
					placeholder={placeholder}
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
})
