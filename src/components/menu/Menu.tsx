'use client'

import cn from 'clsx'
import { usePathname } from 'next/navigation'
import { memo, useMemo } from 'react'

import isPathActive from '@/utils/isPathActive.utils'

import { MenuItem } from './MenuItem'
import type { IMenuItem } from '@/types/menuItem.types'

interface MenuProps {
	/** Масив пунктів меню у правильному порядку. */
	items: readonly IMenuItem[]
	/** Додаткові Tailwind‑класи для контейнера `<ul>`. */
	className?: string
}

/** Вертикальне навігаційне меню (підтримує вкладені рівні в `MenuItem`). */
export const Menu = memo(function Menu({ items, className }: MenuProps) {
	const pathname = usePathname()

	/* кешуємо обчислення active‑шляхів, щоб не робити це для кожного пункту окремо */
	const activeMap = useMemo(() => {
		const map = new Map<string, boolean>()
		items.forEach(item => {
			map.set(item.id, isPathActive(item.href, pathname))
		})
		return map
	}, [items, pathname])

	return (
		<nav aria-label='Main navigation'>
			<ul className={cn('flex flex-col gap-y-2', className)}>
				{items.map(item => (
					<MenuItem
						key={item.id}
						item={item}
						isActive={activeMap.get(item.id) ?? false}
					/>
				))}
			</ul>
		</nav>
	)
})
