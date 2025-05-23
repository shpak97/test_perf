'use client'

import { memo } from 'react'
import type { IconType } from 'react-icons'

interface PopupHeaderProps {
	title?: string
	Icon?: IconType
	iconSize?: number
	onClose: () => void
}

/**
 * Header попапа з заголовком, іконкою та кнопкою закриття
 * Структура аналогічна ContentTitle компоненту
 */
const PopupHeader = memo(function PopupHeader({
	title,
	Icon,
	iconSize = 24,
	onClose
}: PopupHeaderProps) {
	return (
		<div className='flex items-center justify-between border-b border-gray-100 p-6'>
			{/* Ліва частина: іконка + заголовок */}
			<div className='flex items-center gap-2.5'>
				{Icon && (
					<Icon
						size={iconSize}
						aria-hidden
					/>
				)}
				{title && <h3 className='text-lg leading-none font-semibold'>{title}</h3>}
			</div>

			{/* Права частина: кнопка закриття */}
			<button
				onClick={e => {
					e.preventDefault()
					e.stopPropagation()
					onClose()
				}}
				className='rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600'
				aria-label='Close popup'
			>
				{/* Хрестик - поки текст, потім можна замінити на іконку */}
				<span className='text-xl leading-none'>×</span>
			</button>
		</div>
	)
})

export default PopupHeader
