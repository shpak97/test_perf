import cn from 'clsx'
import { usePathname } from 'next/navigation'

import { isPathActive } from '@/utils/isPathActive'

import type { IMenuItem } from '../../types/menuItem.types'

import { MenuItem } from './MenuItem'

export function Menu({ items, className }: { items: IMenuItem[]; className?: string }) {
	const pathname = usePathname()

	return (
		<ul className={cn('flex flex-col gap-y-2', className)}>
			{items.map(menuItem => (
				<MenuItem
					key={menuItem.id}
					item={menuItem}
					isActive={isPathActive(menuItem.href, pathname)}
				/>
			))}
		</ul>
	)
}
