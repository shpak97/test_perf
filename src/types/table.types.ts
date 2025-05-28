import type { ReactElement } from 'react'

// Базовый интерфейс для элемента с ID (для ключей в React)
export interface ITableRowData {
	id: string
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
	renderRow: (item: T) => ReactElement
}

// Интерфейс для структуры таблицы с бекенда (columns & rows)
export interface ITableData<T extends ITableRowData> {
	columns: ITableColumn[]
	rows: T[]
}
