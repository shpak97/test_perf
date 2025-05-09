import cn from 'clsx'

interface ChartFiltersProps {
	options: string[]
	active: string
	onChange: (value: string) => void
	className?: string
}

export function ChartFilters({ options, active, onChange, className }: ChartFiltersProps) {
	return (
		<div className={cn('flex flex-wrap items-center pb-5', className)}>
			{options.map(option => (
				<button
					key={option}
					onClick={() => onChange(option)}
					className={cn(
						'cursor-pointer rounded-lg px-5 py-2.5 text-sm leading-none transition-all select-none hover:bg-green-600 hover:text-white active:bg-green-700 active:text-white',
						{
							'bg-green-550 pointer-events-none text-white shadow-(--button-shadow)':
								active === option
						}
					)}
				>
					{option}
				</button>
			))}
		</div>
	)
}
