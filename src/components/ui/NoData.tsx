'use client'

import { type HTMLAttributes, type ReactNode, forwardRef, memo } from 'react'
import { twMerge } from 'tailwind-merge'

import { IconUnhappy } from '../icons/IconUnhappy'

interface NoDataProps extends HTMLAttributes<HTMLDivElement> {
	/** Текст‑заглушка під іконкою. */
	placeholder?: ReactNode
	/** Можна передати власну іконку. */
	Icon?: typeof IconUnhappy
}

/** Центрований блок «Немає даних» (іконка + підпис). */
export const NoData = memo(
	forwardRef<HTMLDivElement, NoDataProps>(function NoData(
		{ className, placeholder = 'No data', Icon = IconUnhappy, ...rest },
		ref
	) {
		return (
			<div
				ref={ref}
				className={twMerge('flex h-full w-full items-center justify-center', className)}
				{...rest}
			>
				<div className='inline-block text-center'>
					<Icon />
					{placeholder && <div className='mt-4 text-sm text-gray-400'>{placeholder}</div>}
				</div>
			</div>
		)
	})
)

NoData.displayName = 'NoData'
