'use client'

import cn from 'clsx'
import { forwardRef, memo } from 'react'
import { LuChevronLeft } from 'react-icons/lu'

import { useSidebarStore } from '@/store/sidebar.store'

interface ToggleSidebarButtonProps {
	isSidebarCollapsed: boolean
	className?: string
}

/** Кнопка‑стрілка для згортання / розгортання сайдбара. */
export const ToggleSidebarButton = memo(
	forwardRef<HTMLButtonElement, ToggleSidebarButtonProps>(function ToggleSidebarButton(
		{ isSidebarCollapsed, className },
		ref
	) {
		const toggleSidebar = useSidebarStore(s => s.toggleSidebarCollapsed)

		return (
			<button
				ref={ref}
				type='button'
				onClick={toggleSidebar}
				aria-label='Toggle sidebar'
				className={cn(
					'mx-auto block rounded-full bg-white/10 p-3 transition-colors transition-transform hover:bg-green-600 active:bg-green-700',
					{ 'rotate-180': isSidebarCollapsed },
					className
				)}
			>
				<LuChevronLeft aria-hidden />
			</button>
		)
	})
)

ToggleSidebarButton.displayName = 'ToggleSidebarButton'
