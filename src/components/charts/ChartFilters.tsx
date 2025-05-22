'use client'

import cn from 'clsx'
import { memo } from 'react'

interface ChartFiltersProps {
	options: readonly string[]
	active: string
	onChange: (value: string) => void
	className?: string
}

/** Однорівневий текстовий фільтр (radio‑buttons style). */
export const ChartFilters = memo(function ChartFilters({
	options,
	active,
	onChange,
	className
}: ChartFiltersProps) {
	return (
		<div className={cn('flex flex-wrap items-center gap-2 pb-5', className)}>
			{options.map(option => {
				const isActive = option === active

				return (
					<button
						key={option}
						type='button'
						onClick={() => onChange(option)}
						disabled={isActive}
						className={cn(
							'rounded-lg px-5 py-2.5 text-sm leading-none transition-all select-none hover:bg-green-600 hover:text-white active:bg-green-700 active:text-white',
							{
								'bg-green-550 pointer-events-none text-white shadow-(--button-shadow)': isActive
							}
						)}
					>
						{option}
					</button>
				)
			})}
		</div>
	)
})
