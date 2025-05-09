import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContentCardProps {
	children: ReactNode
	className?: string
}

export function ContentCard({ children, className }: ContentCardProps) {
	const baseClasses =
		'overflow-hidden rounded-xl border border-gray-100 bg-white p-5 dark:border-green-800 dark:bg-green-900'

	return <div className={twMerge(baseClasses, className)}>{children}</div>
}
