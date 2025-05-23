'use client'

import { type ReactNode, memo } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContentCardProps {
	children: ReactNode
	/** Додаткові Tailwind‑класи, які об’єднаються з базовими. */
	className?: string
}

/* базові стилі у змінній — створюються один раз */
const BASE_CLASSES =
	'overflow-hidden rounded-xl border border-gray-100 bg-white p-5 dark:border-green-800 dark:bg-green-900'

/** Універсальна картка‑контейнер із корисними дефолтами. */
const ContentCard = memo(function ContentCard({ children, className }: ContentCardProps) {
	return <section className={twMerge(BASE_CLASSES, className)}>{children}</section>
})

export default ContentCard
