'use client'

import { useEffect, useState } from 'react'

import type { IUsedData } from '@/types/charts/usedData.types'

interface CardUsedRequestsProps {
	data: IUsedData
}
export function CardUsedRequests({ data }: CardUsedRequestsProps) {
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setLoaded(true)
	}, [])

	return (
		<div className='leading-none'>
			<div className='mb-4'>Requests used</div>

			<div className='mb-4 h-4 w-full overflow-hidden rounded-lg bg-gray-100'>
				<div
					className={`h-full bg-green-600 transition-[width] duration-1000 ease-in-out ${
						loaded ? 'w-[20%]' : 'w-0'
					}`}
				></div>
			</div>

			<div className='flex gap-x-2.5'>
				<span>{data.total}</span>
				<span className='text-gray-500'>Out of 100,000</span>
			</div>
		</div>
	)
}
