'use client'

import cn from 'clsx'

import { SiteLogo } from '@/components/ui/SiteLogo'

import { VERSION } from '@/constants/constants'

import { useSidebarStore } from '@/store/sidebar.store'

import { Menu } from '../Menu/Menu'

import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeModeSwitcher } from './ThemeModeSwitcher'
import { ToggleSidebarButton } from './ToggleSidebarButton'
import { Version } from './Version'
import { EXTRA_MENU, SIDEBAR_MENU } from './menu.data'

export function Sidebar() {
	const isSidebarCollapsed = useSidebarStore(state => state.isSidebarCollapsed)
	return (
		<aside
			className={cn(
				'bg-gradient group flex h-full flex-col px-6 transition-all',
				isSidebarCollapsed ? 'collapsed w-23.75 items-center' : 'w-74.5'
			)}
		>
			<div className='py-6'>
				<SiteLogo href='/' />
			</div>
			<div className='flex min-h-[calc(100%-90px)] flex-col overflow-y-auto'>
				<Menu
					items={SIDEBAR_MENU}
					className='mb-6 flex-1 border-y border-white/5 py-6'
				/>
				<div className='mb-6 border-b border-white/5 pb-6'>
					<ToggleSidebarButton isSidebarCollapsed={isSidebarCollapsed} />
				</div>
				<Menu
					items={EXTRA_MENU}
					className='pb-6'
				/>
				<div className='flex items-center justify-between gap-x-2 gap-y-4 pb-6 group-[.collapsed]:flex-col'>
					<ThemeModeSwitcher />
					<LanguageSwitcher />
				</div>
				<Version version={VERSION} />
			</div>
		</aside>
	)
}
