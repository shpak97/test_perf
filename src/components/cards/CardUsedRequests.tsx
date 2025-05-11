'use client'

import { useEffect, useState } from 'react'

import { formatNumberWithCommas } from '@/utils/formatNumberWithCommas.utils'

import type { IUsedData } from '@/types/charts/usedData.types'

interface CardUsedRequestsProps {
	data: IUsedData
}

export function CardUsedRequests({ data }: CardUsedRequestsProps) {
	const [loaded, setLoaded] = useState(false)

	const percent: number = Math.min((100 * data.used) / data.total, 100)

	useEffect(() => {
		const timeout = setTimeout(() => setLoaded(true), 50)
		return () => clearTimeout(timeout)
	}, [])

	return (
		<div className='leading-none'>
			<div className='mb-4'>Requests used</div>

			<div className='mb-4 h-4 w-full overflow-hidden rounded-lg bg-gray-100'>
				<div
					className='h-full bg-green-600 transition-[width] duration-1000 ease-in-out'
					style={{ width: loaded ? `${percent}%` : '0%' }}
				/>
			</div>

			<div className='flex gap-x-2.5'>
				<span>Used {formatNumberWithCommas(data.used)}</span>
				<span className='text-gray-500'>Out of {formatNumberWithCommas(data.total)}</span>
			</div>
		</div>
	)
}
