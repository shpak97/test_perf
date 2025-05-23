'use client'

import { memo, useEffect } from 'react'

import { useCurrentPopup } from '@/store/popup.store'

import PopupWrapper from './PopupWrapper'

interface PopupProviderProps {
	children: React.ReactNode
}

/**
 * Провайдер який рендерить поточний активний попап
 * Використовується в root layout для показу попапів
 */
const PopupProvider = memo(function PopupProvider({ children }: PopupProviderProps) {
	const currentPopup = useCurrentPopup()

	// Блокуємо скрол якщо є відкритий попап
	useEffect(() => {
		if (currentPopup) {
			// Зберігаємо поточний overflow
			const originalOverflow = document.body.style.overflow
			// Блокуємо скрол
			document.body.style.overflow = 'hidden'

			// Повертаємо при закритті попапа
			return () => {
				document.body.style.overflow = originalOverflow
			}
		}
	}, [currentPopup])

	return (
		<>
			{children}
			{/* Рендеримо поточний попап якщо він є */}
			{currentPopup && <PopupWrapper popupId={currentPopup.id} />}
		</>
	)
})

export default PopupProvider
