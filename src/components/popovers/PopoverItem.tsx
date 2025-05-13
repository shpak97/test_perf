'use client'

import cn from 'clsx'
import Link from 'next/link'
import { type MouseEventHandler, type ReactNode, forwardRef, memo } from 'react'
import type { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

import { usePopover } from '@/components/popovers/Popover'

interface BaseProps {
	label: string
	Icon?: IconType
	iconClassName?: string
	className?: string
}

type LinkProps = BaseProps & {
	href: string
	onClick?: MouseEventHandler<HTMLAnchorElement>
}

type ButtonProps = BaseProps & {
	href?: never
	onClick?: MouseEventHandler<HTMLButtonElement>
}

export type PopoverItemProps = LinkProps | ButtonProps

/** Пункт меню поповера — посилання або кнопка. */
export const PopoverItem = memo(
	forwardRef<HTMLButtonElement | HTMLAnchorElement, PopoverItemProps>(function PopoverItem(
		{ label, href, onClick, Icon, iconClassName, className },
		ref
	) {
		const close = usePopover()(s => s.close)

		const handleClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
			close()
			onClick?.(e as never)
		}

		/* базові класи + можливі зовнішні */
		const wrapperClass = twMerge(
			'flex w-full items-center gap-2.5 px-3.75 py-2.5 text-left transition-colors hover:bg-green-100 dark:hover:bg-green-700',
			className
		)

		const content: ReactNode = (
			<>
				{Icon && (
					<Icon
						size={24}
						className={iconClassName}
						aria-hidden
					/>
				)}
				<span className='leading-none whitespace-nowrap'>{label}</span>
			</>
		)

		/* -------- посилання -------- */
		if (href) {
			return (
				<Link
					ref={ref as never}
					href={href}
					onClick={handleClick as never}
					className={wrapperClass}
				>
					{content}
				</Link>
			)
		}

		/* -------- кнопка -------- */
		return (
			<button
				ref={ref as never}
				type='button'
				onClick={handleClick as never}
				className={cn(wrapperClass, 'cursor-pointer')}
			>
				{content}
			</button>
		)
	})
)

PopoverItem.displayName = 'PopoverItem'
