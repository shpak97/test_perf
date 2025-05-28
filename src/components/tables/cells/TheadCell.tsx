import cn from 'clsx'
import { memo } from 'react'

import IconTableSort from '../../icons/IconTableSort'

import type { ITableColumn } from '@/types/table.types'

interface ITheadCellProps {
	col: ITableColumn
	idx: number
	totalColumns: number
}

const TheadCell = memo(function TheadCell({ col, idx, totalColumns }: ITheadCellProps) {
	return (
		<th
			key={col.name}
			className={cn('px-4 py-5', idx === 0 && 'pl-5', idx === totalColumns - 1 && 'pr-5')}
		>
			{!col.filtered ? (
				col.name
			) : (
				<button className='flex w-full items-center justify-between'>
					{col.name}
					<span className='flex flex-col gap-1.5'>
						<IconTableSort
							className='rotate-180 text-gray-300 dark:text-green-700'
							size={4}
						/>
						<IconTableSort
							size={4}
							className='text-gray-300 dark:text-green-700'
						/>
					</span>
				</button>
			)}
		</th>
	)
})

export default TheadCell
