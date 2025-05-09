'use client'

import cn from 'clsx'
import Link from 'next/link'
import { type MouseEventHandler, type ReactNode, useCallback } from 'react'
import type { IconType } from 'react-icons'

import { usePopover } from '@/components/popovers/Popover'

interface PopoverItemProps {
	label: string
	href?: string
	onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
	Icon?: IconType
	iconClassName?: string
	className?: string
}

export function PopoverItem({
	label,
	href,
	onClick,
	Icon,
	className,
	iconClassName
}: PopoverItemProps) {
	const close = usePopover()(state => state.close)

	const handleClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = useCallback(
		event => {
			close()
			onClick?.(event)
		},
		[close, onClick]
	)

	const wrapperClass = cn(
		'flex w-full items-center gap-2.5 px-3.75 py-2.5 transition-colors hover:bg-green-100 dark:hover:bg-green-700 cursor-pointer',
		className
	)

	const renderContent = (): ReactNode => (
		<>
			{Icon && (
				<Icon
					size={24}
					className={iconClassName}
				/>
			)}
			<span className='leading-none whitespace-nowrap'>{label}</span>
		</>
	)

	if (href) {
		return (
			<Link
				href={href}
				onClick={handleClick}
				className={wrapperClass}
			>
				{renderContent()}
			</Link>
		)
	}

	return (
		<button
			type='button'
			onClick={handleClick}
			className={wrapperClass}
		>
			{renderContent()}
		</button>
	)
}
