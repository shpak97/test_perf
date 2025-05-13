'use client'

import { type MouseEventHandler, type ReactNode, forwardRef, memo } from 'react'
import { twMerge } from 'tailwind-merge'

import { usePopover } from '@/components/popovers/Popover'

interface PopoverButtonProps {
	children: ReactNode
	/** Додаткові Tailwind‑класи. */
	className?: string
	/** Додатковий onClick (виконається після toggle). */
	onClick?: MouseEventHandler<HTMLButtonElement>
}

/** Кнопка‑триггер для Popover. Текст/іконки передаються children. */
export const PopoverButton = memo(
	forwardRef<HTMLButtonElement, PopoverButtonProps>(function PopoverButton(
		{ children, className, onClick },
		ref
	) {
		const toggle = usePopover()(s => s.toggle)

		const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
			toggle()
			onClick?.(e)
		}

		return (
			<button
				ref={ref}
				type='button'
				onClick={handleClick}
				className={twMerge(
					'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600',
					className
				)}
			>
				{children}
			</button>
		)
	})
)

PopoverButton.displayName = 'PopoverButton'
