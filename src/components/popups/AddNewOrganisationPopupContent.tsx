'use client'

import { memo } from 'react'

import { usePopup } from '@/hooks/usePopup'

/**
 * Контент попапа для додавання нової організації
 */
const AddNewOrganisationPopupContent = memo(function AddNewOrganisationPopupContent() {
	const { close, searchParams } = usePopup('add-organisation')

	return (
		<div>
			<div className='mb-4'>
				<p>Create a new organisation here.</p>
				{Object.keys(searchParams).length > 0 && (
					<div className='mt-2 rounded bg-gray-50 p-2'>
						<p className='text-sm text-gray-600'>Search params:</p>
						<pre className='text-xs'>{JSON.stringify(searchParams, null, 2)}</pre>
					</div>
				)}
			</div>

			<div className='flex justify-end gap-2'>
				<button
					onClick={close}
					className='rounded-md bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200'
				>
					Cancel
				</button>
				<button
					onClick={() => {
						// Тут логіка створення організації
						alert('Organisation created!')
						close()
					}}
					className='rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700'
				>
					Create
				</button>
			</div>
		</div>
	)
})

export default AddNewOrganisationPopupContent
