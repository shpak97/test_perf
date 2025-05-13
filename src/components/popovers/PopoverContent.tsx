'use client'

import cn from 'clsx'
import { type ReactNode, memo } from 'react'

import { usePopover } from '@/components/popovers/Popover'

/* ---------- позиціонування ---------- */
export type PopoverPosition =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right'
	| 'left-top'
	| 'left-bottom'
	| 'right-top'
	| 'right-bottom'

const POPOVER_POSITIONS: Record<PopoverPosition, string> = {
	'top-left': 'bottom-full',
	'top-right': 'right-0 bottom-full',
	'bottom-left': 'top-full',
	'bottom-right': 'right-0 top-full',
	'left-top': 'right-full top-0',
	'left-bottom': 'right-full top-full',
	'right-top': 'left-full top-0',
	'right-bottom': 'left-full'
}

/* ---------- props ---------- */
interface PopoverContentProps {
	children: ReactNode
	position?: PopoverPosition
	className?: string
}

/** Контейнер із контентом поповера, який плавно зʼявляється / зникає. */
export const PopoverContent = memo(function PopoverContent({
	children,
	position = 'bottom-right',
	className
}: PopoverContentProps) {
	const isOpen = usePopover()(s => s.isOpen)

	return (
		<div
			role='dialog'
			aria-hidden={!isOpen}
			className={cn(
				'invisible absolute overflow-hidden rounded-lg bg-white opacity-0 shadow-[var(--theme-shadow)] transition-opacity duration-150 dark:bg-green-800',
				POPOVER_POSITIONS[position],
				{ 'visible opacity-100': isOpen },
				className
			)}
		>
			{children}
		</div>
	)
})

PopoverContent.displayName = 'PopoverContent'
