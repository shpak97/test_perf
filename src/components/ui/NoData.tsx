'use client'

import cn from 'clsx'

import { IconUnhappy } from '../icons/IconUnhappy'

interface NoDataProps {
	className?: string
	placeholder?: string
}

export function NoData({ className, placeholder }: NoDataProps) {
	return (
		<div className={cn('flex h-full w-full items-center justify-center', className)}>
			<div className='inline-block text-center'>
				<IconUnhappy />
				{placeholder && <div className='mt-4 text-sm text-gray-300'>{placeholder}</div>}
			</div>
		</div>
	)
}
