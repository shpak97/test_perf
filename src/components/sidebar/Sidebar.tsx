'use client'

import cn from 'clsx'
import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

import { VERSION } from '@/constants/constants'

import { useSidebarStore } from '@/store/sidebar.store'

import Menu from '../menu/Menu'

import LanguageSwitcher from './LanguageSwitcher'
import SiteLogo from './SiteLogo'
import ThemeModeSwitcher from './ThemeModeSwitcher'
import ToggleSidebarButton from './ToggleSidebarButton'
import Version from './Version'
import { EXTRA_MENU, SIDEBAR_MENU } from './menu.data'

interface SidebarProps {
	className?: string
}

/** Лівий навігаційний сайдбар з режимом «collapse». */
const Sidebar = memo(function Sidebar({ className }: SidebarProps) {
	const isCollapsed = useSidebarStore(s => s.isSidebarCollapsed)

	const containerClass = twMerge(
		cn(
			'group/sidebar flex h-full shrink-0 flex-col bg-gradient text-white transition-all',
			isCollapsed ? 'collapsed w-23.75 items-center px-3' : 'w-74.5 px-6'
		),
		className
	)

	return (
		<aside className={containerClass}>
			{/* logo */}
			<div className='py-6'>
				<SiteLogo href='/' />
			</div>

			{/* scrollable content */}
			<div className='scroll-hidden flex min-h-[calc(100%-90px)] flex-col overflow-y-auto'>
				{/* main menu */}
				<Menu
					items={SIDEBAR_MENU}
					className='flex-1 border-y border-white/5 py-6'
				/>

				{/* collapse toggle */}
				<div className='border-b border-white/5 py-6'>
					<ToggleSidebarButton isSidebarCollapsed={isCollapsed} />
				</div>

				{/* extra menu */}
				<Menu
					items={EXTRA_MENU}
					className='pb-6'
				/>

				{/* switches */}
				<div className='flex items-center justify-between gap-2 pb-6 group-[.collapsed]/sidebar:flex-col'>
					<ThemeModeSwitcher />
					<LanguageSwitcher />
				</div>

				{/* version */}
				<Version version={VERSION} />
			</div>
		</aside>
	)
})

Sidebar.displayName = 'Sidebar'

export default Sidebar
