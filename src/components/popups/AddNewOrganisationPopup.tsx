'use client'

import { memo, useEffect } from 'react'

interface AddNewOrganisationPopupProps {
	onClose: () => void
}

const AddNewOrganisationPopup = memo(function AddNewOrganisationPopup({
	onClose
}: AddNewOrganisationPopupProps) {
	// Блокуємо скрол при відкритті попапа
	useEffect(() => {
		// Зберігаємо поточний overflow
		const originalOverflow = document.body.style.overflow
		// Блокуємо скрол
		document.body.style.overflow = 'hidden'

		// Повертаємо при закритті попапа
		return () => {
			document.body.style.overflow = originalOverflow
		}
	}, [])

	return (
		<>
			{/* Оверлей, який частково закриває контент (30% непрозорості) */}
			<div
				className='fixed inset-0 z-40 bg-black/30'
				onClick={onClose}
			/>

			{/* Сам попап */}
			<div className='pointer-events-none fixed inset-0 z-50 flex items-center justify-center'>
				<div
					className='pointer-events-auto rounded-lg bg-white p-6 shadow-xl'
					// Зупиняємо поширення подій, щоб клік на вміст попапа не закривав його
					onClick={e => e.stopPropagation()}
				>
					<h2 className='mb-4 text-xl font-semibold'>Add New Organisation</h2>
					<div className='mt-4 flex justify-end'>
						<button
							onClick={onClose}
							className='rounded-md bg-gray-100 px-4 py-2'
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</>
	)
})

export default AddNewOrganisationPopup
