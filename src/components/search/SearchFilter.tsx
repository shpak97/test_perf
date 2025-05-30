import React, { useEffect, useMemo, useRef, useState } from 'react'

import InputSearch from '@/ui/inputs/InputSearch'

import useSearch from '@/hooks/useSearch'

interface ISearchFilterProps<T> {
	data: T[]
	searchFields: Array<keyof T | string>
	onFilteredData: (filteredData: T[]) => void
	onMetricsChange: (metrics: {
		resultCount: number
		totalCount: number
		isSearching: boolean
	}) => void
	placeholder?: string
	className?: string
	minSearchLength?: number
}

const SearchFilter = <T extends Record<string, unknown>>({
	data,
	searchFields,
	onFilteredData,
	onMetricsChange,
	placeholder = 'Search...',
	className = 'w-[540px]',
	minSearchLength = 1
}: ISearchFilterProps<T>) => {
	const [inputValue, setInputValue] = useState('')

	const { setSearchQuery, filteredData, resultCount, totalCount, isSearching } = useSearch({
		data,
		searchFields,
		delay: 200 // Швидший відгук
	})

	// Мемоізуємо метрики щоб уникнути безкінечного ререндеру
	const metrics = useMemo(
		() => ({
			resultCount,
			totalCount,
			isSearching
		}),
		[resultCount, totalCount, isSearching]
	)

	// Використовуємо ref для відстеження попередніх значень
	const prevFilteredDataRef = useRef<T[]>(filteredData)
	const prevMetricsRef = useRef<typeof metrics>(metrics)

	// Передаємо відфільтровані дані назовні тільки якщо вони змінились
	useEffect(() => {
		if (prevFilteredDataRef.current !== filteredData) {
			onFilteredData(filteredData)
			prevFilteredDataRef.current = filteredData
		}
	}, [filteredData, onFilteredData])

	// Передаємо метрики назовні тільки якщо вони змінились
	useEffect(() => {
		if (
			!prevMetricsRef.current ||
			prevMetricsRef.current.resultCount !== metrics.resultCount ||
			prevMetricsRef.current.totalCount !== metrics.totalCount ||
			prevMetricsRef.current.isSearching !== metrics.isSearching
		) {
			onMetricsChange(metrics)
			prevMetricsRef.current = metrics
		}
	}, [metrics, onMetricsChange])

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setInputValue(value)
		// Шукаємо навіть з 1 символа
		if (value.length >= minSearchLength || value.length === 0) {
			setSearchQuery(value)
		}
	}

	const handleSearchReset = () => {
		setInputValue('')
		setSearchQuery('')
	}

	return (
		<div className={className}>
			<InputSearch
				placeholder={placeholder}
				value={inputValue}
				onChange={handleSearchChange}
				onReset={handleSearchReset}
			/>
		</div>
	)
}

export default SearchFilter
