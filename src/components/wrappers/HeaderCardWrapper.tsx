'use client'

import { type HTMLAttributes, type ReactNode, forwardRef, memo } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeaderCardWrapperProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	/** Додаткові Tailwind‑класи. */
	className?: string
}

/** Верхня частина картки (заголовок) — додає стандартний `pb‑5`. */
const HeaderCardWrapper = memo(
	forwardRef<HTMLDivElement, HeaderCardWrapperProps>(function (
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

HeaderCardWrapper.displayName = 'HeaderTableCardWrapper'

export default HeaderCardWrapper
