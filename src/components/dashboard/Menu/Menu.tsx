import { usePathname } from 'next/navigation'

import { MenuItem } from './MenuItem'
import type { IMenuItem } from './menuItem.types'

export function Menu({ items }: { items: IMenuItem[] }) {
	const pathname = usePathname()
	console.log(pathname)
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
