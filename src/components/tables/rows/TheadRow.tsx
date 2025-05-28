import { memo } from 'react'

import { TheadCell } from '../cells'

import type { ITableColumn } from '@/types/table.types'

interface ITheadRowProps {
	theadData: ITableColumn[]
}

const TheadRow = memo(function TheadRow({ theadData }: ITheadRowProps) {
	return (
		<tr>
			{theadData.map((col, idx) => (
				<TheadCell
					key={col.name}
					col={col}
					idx={idx}
					totalColumns={theadData.length}
				/>
			))}
		</tr>
	)
})

export default TheadRow
