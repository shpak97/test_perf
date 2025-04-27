import cn from 'clsx'
import Image from 'next/image'

import { useSidebarStore } from '@/store/sidebar.store'

export function ToggleSidebarButton({
	isSidebarCollapsed = false
}: {
	isSidebarCollapsed: boolean
}) {
	const toggleSidebarCollapsed = useSidebarStore(state => state.toggleSidebarCollapsed)
	return (
		<button
			onClick={toggleSidebarCollapsed}
			className={cn(
				'mx-auto block cursor-pointer rounded-full bg-white/10 p-2 transition-colors hover:bg-green-600 active:bg-green-700'
			)}
		>
			<Image
				src='/images/icons/icon-arrow.svg'
				width='24'
				height='24'
				alt='Toggle Sidebar button Icon'
				className={cn('transition-all', { '-rotate-180': !isSidebarCollapsed })}
			/>
		</button>
	)
}
