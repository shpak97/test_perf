'use client'

import cn from 'clsx'

import { VERSION } from '@/constants/constants'

import { useSidebarStore } from '@/store/sidebar.store'

import { Menu } from '../menu/Menu'

import { LanguageSwitcher } from './LanguageSwitcher'
import { SiteLogo } from './SiteLogo'
import { ThemeModeSwitcher } from './ThemeModeSwitcher'
import { ToggleSidebarButton } from './ToggleSidebarButton'
import { Version } from './Version'
import { EXTRA_MENU, SIDEBAR_MENU } from './menu.data'

export function Sidebar() {
	const isCollapsed = useSidebarStore(state => state.isSidebarCollapsed)

	const containerClass = cn(
		'bg-gradient group/sidebar flex h-full shrink-0 flex-col px-6 text-white transition-all',
		isCollapsed ? 'collapsed w-23.75 items-center' : 'w-74.5'
	)

	return (
		<aside className={containerClass}>
			<div className='py-6'>
				<SiteLogo href='/' />
			</div>

			<div className='scroll-hidden flex min-h-[calc(100%-90px)] flex-col overflow-y-auto'>
				<Menu
					items={SIDEBAR_MENU}
					className='mb-6 flex-1 border-y border-white/5 py-6'
				/>

				<div className='mb-6 border-b border-white/5 pb-6'>
					<ToggleSidebarButton isSidebarCollapsed={isCollapsed} />
				</div>

				<Menu
					items={EXTRA_MENU}
					className='pb-6'
				/>

				<div className='flex items-center justify-between gap-x-2 gap-y-4 pb-6 group-[.collapsed]/sidebar:flex-col'>
					<ThemeModeSwitcher />
					<LanguageSwitcher />
				</div>

				<Version version={VERSION} />
			</div>
		</aside>
	)
}
