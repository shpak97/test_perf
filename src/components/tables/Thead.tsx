import TheadRow from './rows/TheadRow'
import type { ITableColumn } from '@/types/table.types'

interface ITheadProps {
	theadData: ITableColumn[]
}

const Thead = ({ theadData }: ITheadProps) => {
	return (
		<thead className='sticky top-0 z-10 bg-gray-50 dark:bg-green-800'>
			<TheadRow theadData={theadData} />
		</thead>
	)
}

export default Thead
