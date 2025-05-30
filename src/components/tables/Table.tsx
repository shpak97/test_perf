import Tbody from './Tbody'
import Thead from './Thead'
import type { ISearchMetrics, ITableProps, ITableRowData } from '@/types/table.types'

const BODY_HEIGHT = 570 // 10 рядків × 57 px

interface ITableWithSearchProps<T extends ITableRowData> extends ITableProps<T> {
	searchMetrics?: ISearchMetrics
}

const Table = <T extends ITableRowData>({
	theadData,
	tbodyData,
	renderRow,
	searchMetrics
}: ITableWithSearchProps<T>) => {
	const getDisplayText = () => {
		if (!searchMetrics) {
			return `Showing ${tbodyData.length}`
		}

		const { resultCount, totalCount, isSearching } = searchMetrics

		if (resultCount === totalCount) {
			return `Showing ${totalCount} results`
		}

		return `Showing ${resultCount} of ${totalCount}${isSearching ? ' (searching...)' : ''}`
	}

	return (
		<div className='overflow-hidden rounded-lg border border-gray-100 dark:border-green-800'>
			<div
				className='max-h-[616px] overflow-x-auto overflow-y-auto'
				style={{ maxHeight: BODY_HEIGHT + 56.5 }} /* 56.5 px — висота шапки */
			>
				<table className='border-colapse w-full min-w-[1522px] text-left text-base leading-none'>
					<Thead theadData={theadData} />
					<Tbody
						tbodyData={tbodyData}
						renderRow={renderRow}
					/>
				</table>
			</div>
			<div className='px-5 py-3 text-sm text-gray-300'>{getDisplayText()}</div>
		</div>
	)
}

export default Table
