'use client'

import { type ReactNode, memo, useEffect } from 'react'
import type { IconType } from 'react-icons'

import { PopupRegistry } from './PopupRegistry'

interface PopupProps {
	id: string
	title?: string
	Icon?: IconType
	children: ReactNode
	className?: string
}

/**
 * Універсальний компонент попапа
 * Реєструє попап в глобальній системі та надає контент
 */
const Popup = memo(function Popup({ id, title, Icon, children, className }: PopupProps) {
	// Реєструємо попап в системі при монтуванні
	useEffect(() => {
		PopupRegistry.register({
			id,
			title,
			Icon,
			component: children,
			className
		})

		// Видаляємо з реєстру при анмаунті
		return () => {
			PopupRegistry.unregister(id)
		}
	}, [id, title, Icon, children, className])

	// Цей компонент не рендерить нічого сам
	// Контент рендериться через PopupProvider
	return null
})

export default Popup
