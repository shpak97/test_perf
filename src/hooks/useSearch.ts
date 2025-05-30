import { useCallback, useEffect, useMemo, useState } from 'react'

interface IUseSearchProps<T> {
	data: T[]
	searchFields: Array<keyof T | string> // можна вказати прості поля або шляхи до вкладених полів
	delay?: number
	minLength?: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useSearch = <T extends Record<string, any>>({
	data,
	searchFields,
	delay = 300,
	minLength = 1
}: IUseSearchProps<T>) => {
	const [searchQuery, setSearchQuery] = useState('')
	const [debouncedQuery, setDebouncedQuery] = useState('')

	// Дебаунсинг пошукового запиту
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedQuery(searchQuery)
		}, delay)

		return () => clearTimeout(timeoutId)
	}, [searchQuery, delay])

	// Функція для отримання значення по шляху (наприклад, 'owner.firstName')
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const getNestedValue = useCallback((obj: any, path: string): string => {
		return path.split('.').reduce((current, key) => {
			return current && current[key] ? current[key] : ''
		}, obj)
	}, [])

	// Мемоізуємо searchFields для уникнення зайвих обчислень
	const memoizedSearchFields = useMemo(() => searchFields, [searchFields])

	// Фільтрація даних на основі дебаунсованого пошукового запиту
	const filteredData = useMemo(() => {
		// Повертаємо всі дані якщо запит коротший за мінімальну довжину
		if (!debouncedQuery.trim() || debouncedQuery.length < minLength) {
			return data
		}

		const query = debouncedQuery.toLowerCase()

		return data.filter(item => {
			return memoizedSearchFields.some(field => {
				const fieldStr = String(field)
				let value: string

				// Якщо поле містить крапку, це шлях до вкладеного поля
				if (fieldStr.includes('.')) {
					value = getNestedValue(item, fieldStr)
				} else {
					value = item[field as keyof T]
				}

				// Перетворюємо значення в рядок і шукаємо збіг
				return String(value).toLowerCase().includes(query)
			})
		})
	}, [data, debouncedQuery, memoizedSearchFields, minLength, getNestedValue])

	return {
		searchQuery,
		debouncedQuery,
		setSearchQuery,
		filteredData,
		resultCount: filteredData.length,
		totalCount: data.length,
		isSearching: searchQuery !== debouncedQuery
	}
}

export default useSearch
