import { memo } from 'react'

import { TheadRow } from './rows'
import type { ITableColumn } from '@/types/table.types'

interface ITheadProps {
	theadData: ITableColumn[]
}

const Thead = memo(function Thead({ theadData }: ITheadProps) {
	return (
		<thead className='sticky top-0 z-10 bg-gray-50 dark:bg-green-800'>
			<TheadRow theadData={theadData} />
		</thead>
	)
})

export default Thead
