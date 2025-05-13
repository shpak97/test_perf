'use client'

import { type HTMLAttributes, type ReactNode, forwardRef, memo } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeaderCardWrapperProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	/** Додаткові Tailwind‑класи. */
	className?: string
}

/** Верхня частина картки (заголовок) — додає стандартний `pb‑5`. */
export const HeaderCardWrapper = memo(
	forwardRef<HTMLDivElement, HeaderCardWrapperProps>(function HeaderCardWrapper(
		{ children, className, ...rest },
		ref
	) {
		return (
			<div
				ref={ref}
				className={twMerge('pb-5', className)}
				{...rest}
			>
				{children}
			</div>
		)
	})
)

HeaderCardWrapper.displayName = 'HeaderCardWrapper'
