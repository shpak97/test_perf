import TheadCell from '../cells/TheadCell'

import type { ITableColumn } from '@/types/table.types'

interface ITheadRowProps {
	theadData: ITableColumn[]
}

const TheadRow = ({ theadData }: ITheadRowProps) => {
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
}

export default TheadRow
