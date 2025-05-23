'use client'

import { useEffect, useMemo, useState } from 'react'

import formatNumberWithCommas from '@/utils/formatNumberWithCommas.utils'

import type { IUsedData } from '@/types/charts/usedData.types'

interface CardChartUsedRequestsProps {
	data: IUsedData
}

/** Прогрес‑бар використаних запитів. Анімація розгортання запускається одразу після маунту. */
const CardChartUsedRequests = ({ data }: CardChartUsedRequestsProps) => {
	const [animate, setAnimate] = useState(false)

	/** процент (0 – 100) із захистом від ділення на 0 та переповнення */
	const percent = useMemo(
		() => (data.total ? Math.min((data.used / data.total) * 100, 100) : 0),
		[data.used, data.total]
	)

	/* запускаємо анімацію на наступному тіку, щоб CSS‑transition спрацювала */
	useEffect(() => {
		const id = requestAnimationFrame(() => setAnimate(true))
		return () => cancelAnimationFrame(id)
	}, [])

	return (
		<div className='leading-none'>
			<h3 className='mb-4 font-medium'>Requests used</h3>

			<div className='mb-4 h-4 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-green-800'>
				<div
					className='h-full bg-green-600 transition-[width] duration-1000 ease-in-out'
					style={{ width: animate ? `${percent}%` : '0%' }}
				/>
			</div>

			<div className='flex gap-x-2.5 text-sm'>
				<span>Used {formatNumberWithCommas(data.used)}</span>
				<span className='text-gray-500'>Out of {formatNumberWithCommas(data.total)}</span>
			</div>
		</div>
	)
}

export default CardChartUsedRequests
