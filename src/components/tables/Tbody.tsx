import type { ReactElement } from 'react'

import type { ITableRowData } from '@/types/table.types'

interface ITbodyProps<T extends ITableRowData> {
	tbodyData: T[]
	renderRow: (item: T) => ReactElement
}

const Tbody = <T extends ITableRowData>({ tbodyData, renderRow }: ITbodyProps<T>) => {
	return <tbody>{tbodyData.map(renderRow)}</tbody>
}

export default Tbody
