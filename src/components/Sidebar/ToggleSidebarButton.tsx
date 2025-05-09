import cn from 'clsx'
import { LuChevronLeft } from 'react-icons/lu'

import { useSidebarStore } from '@/store/sidebar.store'

interface ToggleSidebarButtonProps {
	isSidebarCollapsed: boolean
}

export function ToggleSidebarButton({ isSidebarCollapsed }: ToggleSidebarButtonProps) {
	const toggleSidebar = useSidebarStore(state => state.toggleSidebarCollapsed)

	return (
		<button
			type='button'
			onClick={toggleSidebar}
			className={cn(
				'mx-auto block cursor-pointer rounded-full bg-white/10 p-3 transition-colors hover:bg-green-600 active:bg-green-700',
				{ 'rotate-180': isSidebarCollapsed }
			)}
			aria-label='Toggle sidebar'
		>
			<LuChevronLeft />
		</button>
	)
}
