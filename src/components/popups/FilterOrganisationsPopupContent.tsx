'use client'

import { memo } from 'react'

import { usePopup } from '@/hooks/usePopup'

/**
 * Контент попапа для фільтрації організацій
 */
const FilterOrganisationsPopupContent = memo(function FilterOrganisationsPopupContent() {
	const { close, searchParams } = usePopup('filter-organisations')

	const handleApplyFilters = () => {
		// Тут буде логіка застосування фільтрів
		console.log('Applying filters with params:', searchParams)
		close()
	}

	const handleResetFilters = () => {
		// Тут буде логіка скидання фільтрів
		console.log('Resetting filters')
		close()
	}

	return (
		<div className='space-y-6'>
			<div className='space-y-4'>
				{/* Role Filter */}
				<div>
					<label className='mb-2 block text-sm font-medium text-gray-700'>Role</label>
					<select className='w-full rounded-md border border-gray-300 px-3 py-2'>
						<option value=''>All Roles</option>
						<option value='admin'>Admin</option>
						<option value='moderator'>Moderator</option>
						<option value='member'>Member</option>
					</select>
				</div>

				{/* Team Count Filter */}
				<div>
					<label className='mb-2 block text-sm font-medium text-gray-700'>Teams Count</label>
					<div className='flex gap-2'>
						<input
							type='number'
							placeholder='Min'
							className='w-full rounded-md border border-gray-300 px-3 py-2'
						/>
						<input
							type='number'
							placeholder='Max'
							className='w-full rounded-md border border-gray-300 px-3 py-2'
						/>
					</div>
				</div>

				{/* Users Count Filter */}
				<div>
					<label className='mb-2 block text-sm font-medium text-gray-700'>Users Count</label>
					<div className='flex gap-2'>
						<input
							type='number'
							placeholder='Min'
							className='w-full rounded-md border border-gray-300 px-3 py-2'
						/>
						<input
							type='number'
							placeholder='Max'
							className='w-full rounded-md border border-gray-300 px-3 py-2'
						/>
					</div>
				</div>
			</div>

			{/* Показуємо search params якщо є */}
			{Object.keys(searchParams).length > 0 && (
				<div className='rounded bg-blue-50 p-3'>
					<h4 className='font-medium text-blue-900'>Current Parameters:</h4>
					<pre className='mt-2 text-sm text-blue-700'>{JSON.stringify(searchParams, null, 2)}</pre>
				</div>
			)}

			{/* Buttons */}
			<div className='flex justify-end gap-3'>
				<button
					onClick={handleResetFilters}
					className='rounded-md bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200'
				>
					Reset
				</button>
				<button
					onClick={close}
					className='rounded-md bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200'
				>
					Cancel
				</button>
				<button
					onClick={handleApplyFilters}
					className='rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700'
				>
					Apply Filters
				</button>
			</div>
		</div>
	)
})

export default FilterOrganisationsPopupContent
