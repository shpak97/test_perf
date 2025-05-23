/* ─────────────────────  hooks/usePopup.ts  ───────────────────── */
import { useCallback } from 'react'

import { useClosePopup, useCurrentPopup, useOpenPopup } from '@/store/popup.store'

/**
 * Хук для управління конкретним попапом
 * @param popupId - унікальний ідентифікатор попапа
 */
export const usePopup = (popupId: string) => {
	const openPopup = useOpenPopup()
	const closePopup = useClosePopup()
	const currentPopup = useCurrentPopup()

	const open = useCallback(
		(searchParams?: Record<string, string>) => {
			openPopup(popupId, searchParams)
		},
		[openPopup, popupId]
	)

	const close = useCallback(() => {
		closePopup()
	}, [closePopup])

	// Перевіряємо чи відкритий цей попап
	const isOpen = currentPopup?.id === popupId

	// Отримуємо дані попапа (тільки якщо він активний)
	const data = currentPopup?.id === popupId ? currentPopup : null

	// Отримуємо search params (тільки якщо цей попап активний)
	const searchParams = currentPopup?.id === popupId ? currentPopup.searchParams || {} : {}

	return {
		open,
		close,
		isOpen,
		data,
		searchParams
	}
}
