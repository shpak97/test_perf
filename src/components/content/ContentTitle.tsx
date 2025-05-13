'use client'

import { memo } from 'react'
import type { IconType } from 'react-icons'

interface ContentTitleProps {
	title: string
	Icon?: IconType
	/** Індивідуальний розмір іконки (за замовчуванням 24 px) */
	iconSize?: number
	/** Додаткові Tailwind‑класи */
	className?: string
}

/** Заголовок блока з опціональною іконкою. */
export const ContentTitle = memo(function ContentTitle({
	title,
	Icon,
	iconSize = 24,
	className
}: ContentTitleProps) {
	return (
		<h3 className={`flex items-center gap-2.5 text-lg leading-none ${className ?? ''}`}>
			{Icon && (
				<Icon
					size={iconSize}
					aria-hidden
				/>
			)}
			<span>{title}</span>
		</h3>
	)
})
