'use client'

import { type ReactNode, forwardRef, memo } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContentCardWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	/** Додаткові Tailwind‑класи. */
	className?: string
}

/** Оболонка‑контейнер навколо картки (дозволяє кастомний відступ, позиціонування тощо). */
const ContentCardWrapper = memo(
	forwardRef<HTMLDivElement, ContentCardWrapperProps>(function ContentCardWrapper(
		{ children, className, ...rest },
		ref
	) {
		return (
			<div
				ref={ref}
				className={twMerge(className)}
				{...rest}
			>
				{children}
			</div>
		)
	})
)

ContentCardWrapper.displayName = 'ContentCardWrapper'

export default ContentCardWrapper
