'use client'

import cn from 'clsx'
import type { ReactNode } from 'react'

import { usePopover } from '@/components/popovers/Popover'

interface PopoverButtonProps {
	children: ReactNode
	className?: string
}

export function PopoverButton({ children, className }: PopoverButtonProps) {
	const toggle = usePopover()(state => state.toggle)

	return (
		<button
			type='button'
			onClick={toggle}
			className={cn('cursor-pointer', className)}
		>
			{children}
		</button>
	)
}
