import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { MenuItem } from './MenuItem'
import type { IMenuItem } from './menuItem.types'

export function useClientPathname(): string | null {
	const pathname = usePathname()
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		setIsReady(true)
	}, [])

	return isReady ? pathname : null
}
export function Menu({ items }: { items: IMenuItem[] }) {
	const pathname = usePathname()

	if (!pathname) return null // або skeleton / fallback
	return (
		<ul className='flex flex-col gap-y-2'>
			{items.map(menuItem => (
				<MenuItem
					key={menuItem.id}
					item={menuItem}
					// isActive={isPathActive(menuItem.href, pathname)}
					isActive={pathname === menuItem.href}
				/>
			))}
		</ul>
	)
}
