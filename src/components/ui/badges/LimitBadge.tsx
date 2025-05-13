'use client'

import { type HTMLAttributes, type ReactNode, forwardRef, memo } from 'react'
import { twMerge } from 'tailwind-merge'

/* ---------- кольори ---------- */
export type LimitBadgeColor = 'green' | 'orange'

const COLOR_MAP: Record<LimitBadgeColor, string> = {
	green: 'bg-green-200 text-green-600',
	orange: 'bg-red-100 text-red-500'
}

interface LimitBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color' | 'children'> {
	children: ReactNode
	color?: LimitBadgeColor
}

/** Маленький бейдж для лімітів (“Used / Remaining”). */
export const LimitBadge = memo(
	forwardRef<HTMLSpanElement, LimitBadgeProps>(function LimitBadge(
		{ children, color = 'green', className, ...rest },
		ref
	) {
		return (
			<span
				ref={ref}
				className={twMerge(
					'inline-block rounded-full px-2 py-1 text-xs leading-none',
					COLOR_MAP[color],
					className
				)}
				{...rest}
			>
				{children}
			</span>
		)
	})
)

LimitBadge.displayName = 'LimitBadge'
