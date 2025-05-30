// Базовый интерфейс для элемента с ID (для ключей в React)
export interface ITableRowData {
	id: string
	[key: string]: unknown
}

// Интерфейс для колонки таблицы
export interface ITableColumn {
	name: string
	filtered: boolean
}

// Дженерик интерфейс для пропсов таблицы
export interface ITableProps<T extends ITableRowData> {
	theadData: ITableColumn[]
	tbodyData: T[]
	renderRow: (row: T) => React.ReactElement
}

// Интерфейс для структуры таблицы с бекенда (columns & rows)
export interface ITableData<T extends ITableRowData> {
	columns: ITableColumn[]
	rows: T[]
}

// Frontend filtering types
export interface ITableFilter {
	field: string
	operator: 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'greaterThan' | 'lessThan'
	value: string | number
}

export interface ITableSort {
	field: string
	direction: 'asc' | 'desc'
}

export interface ITableState {
	filters: ITableFilter[]
	sort: ITableSort | null
	page: number
	pageSize: number
}

export interface ITableFilterFunction<T> {
	(data: T[], filters: ITableFilter[]): T[]
}

// Search metrics interface for Table component
export interface ISearchMetrics {
	resultCount: number
	totalCount: number
	isSearching?: boolean
}
