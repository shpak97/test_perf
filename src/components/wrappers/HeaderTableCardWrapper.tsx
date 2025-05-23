'use client'

import { type HTMLAttributes, type ReactNode, forwardRef, memo } from 'react'
import { twMerge } from 'tailwind-merge'

import HeaderCardWrapper from './HeaderCardWrapper'

interface HeaderTableCardWrapperProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	/** Додаткові Tailwind‑класи. */
	className?: string
}

/**
 * Верхня частина таблиці — використовує HeaderCardWrapper з додатковими стилями
 * mb-6 flex items-center gap-7.5 border-b border-gray-100
 */
const HeaderTableCardWrapper = memo(
	forwardRef<HTMLDivElement, HeaderTableCardWrapperProps>(function HeaderTableCardWrapper(
		{ children, className, ...rest },
		ref
	) {
		return (
			<HeaderCardWrapper
				ref={ref}
				className={twMerge(
					'mb-6 flex items-center gap-7.5 border-b border-gray-100 dark:border-gray-800',
					className
				)}
				{...rest}
			>
				{children}
			</HeaderCardWrapper>
		)
	})
)

HeaderTableCardWrapper.displayName = 'HeaderTableCardWrapper'

export default HeaderTableCardWrapper
