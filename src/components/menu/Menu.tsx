import cn from 'clsx'
import { usePathname } from 'next/navigation'

import { isPathActive } from '@/utils/isPathActive.utils'

import { MenuItem } from './MenuItem'
import type { IMenuItem } from '@/types/menuItem.types'

interface MenuProps {
	items: IMenuItem[]
	className?: string
}

export function Menu({ items, className }: MenuProps) {
	const pathname = usePathname()

	return (
		<ul className={cn('flex flex-col gap-y-2', className)}>
			{items.map(item => (
				<MenuItem
					key={item.id}
					item={item}
					isActive={isPathActive(item.href, pathname)}
				/>
			))}
		</ul>
	)
}
