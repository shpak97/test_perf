'use client'

import { memo } from 'react'

import { usePopup } from '@/hooks/usePopup'

import PopupHeader from './PopupHeader'
import { PopupRegistry } from './PopupRegistry'

interface PopupWrapperProps {
	popupId: string
}

/**
 * Основний компонент попапа з оверлеєм та стандартною структурою
 */
const PopupWrapper = memo(function PopupWrapper({ popupId }: PopupWrapperProps) {
	const { close, isOpen } = usePopup(popupId)
	const popupData = PopupRegistry.get(popupId)

	if (!isOpen || !popupData) return null

	const handleOverlayClick = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		close()
	}

	const handleContentClick = (e: React.MouseEvent) => {
		// Зупиняємо поширення подій, щоб клік на вміст попапа не закривав його
		e.stopPropagation()
	}

	return (
		<>
			{/* Оверлей */}
			<div
				className='fixed inset-0 z-40 bg-black/30'
				onClick={handleOverlayClick}
			/>

			{/* Контейнер попапа */}
			<div className='pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4'>
				<div
					className={`pointer-events-auto max-h-[90vh] w-full max-w-md overflow-auto rounded-lg bg-white shadow-xl ${popupData.className || ''}`}
					onClick={handleContentClick}
				>
					{/* Header */}
					{(popupData.title || popupData.Icon) && (
						<PopupHeader
							title={popupData.title}
							Icon={popupData.Icon}
							onClose={close}
						/>
					)}

					{/* Content */}
					{popupData.component && <div className='p-6'>{popupData.component}</div>}

					{/* Fallback content якщо нічого не передано */}
					{!popupData.component && !popupData.title && !popupData.Icon && (
						<div className='p-6'>
							<div className='flex justify-end'>
								<button
									onClick={close}
									className='rounded-md bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200'
								>
									Close
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
})

export default PopupWrapper
