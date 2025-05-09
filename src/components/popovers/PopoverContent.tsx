'use client'

import cn from 'clsx'
import type { ReactNode } from 'react'

import { usePopover } from '@/components/popovers/Popover'

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

type PopoverPosition =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right'
	| 'left-top'
	| 'left-bottom'
	| 'right-top'
	| 'right-bottom'

interface PopoverContentProps {
	children: ReactNode
	position?: PopoverPosition
}

export function PopoverContent({ children, position = 'bottom-right' }: PopoverContentProps) {
	const isOpen = usePopover()(state => state.isOpen)

	return (
		<div
			className={cn(
				'invisible absolute overflow-hidden rounded-lg bg-white opacity-0 shadow-(--theme-shadow) transition-opacity dark:bg-green-800',
				POPOVER_POSITIONS[position],
				{
					'visible opacity-100': isOpen
				}
			)}
		>
			{children}
		</div>
	)
}
