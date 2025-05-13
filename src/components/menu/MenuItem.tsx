'use client'

import cn from 'clsx'
import Link from 'next/link'
import { memo, useMemo } from 'react'
import { LuChevronDown } from 'react-icons/lu'

import type { IMenuItem } from '@/types/menuItem.types'

interface MenuItemProps {
	item: IMenuItem
	isActive: boolean
}

/** Один пункт бічного меню (підтримує рівні 1‑3 та вкладеність). */
export const MenuItem = memo(function MenuItem({ item, isActive }: MenuItemProps) {
	const { href, label, Icon, level, hasChildren } = item

	/* розрахунок відступу лише для пунктів без іконки */
	const paddingClass = useMemo(() => {
		if (Icon) return ''
		return level === 2 ? 'pl-10.5' : level === 3 ? 'pl-17.5' : ''
	}, [Icon, level])

	return (
		<li className={cn({ 'group-[.collapsed]/sidebar:hidden': level !== 1 })}>
			<Link
				href={href}
				className={cn(
					'flex items-center gap-x-2 rounded-md px-3.25 py-2.5 leading-5 font-semibold transition-colors',
					isActive ? 'bg-green-600 text-white' : 'bg-white/5 hover:bg-green-600 hover:text-white',
					paddingClass
				)}
			>
				{Icon && (
					<Icon
						size={20}
						aria-hidden
						className={cn({ 'group-[.collapsed]/sidebar:hidden': level !== 1 })}
					/>
				)}

				<span className='flex-1 group-[.collapsed]/sidebar:hidden'>{label}</span>

				{hasChildren && (
					<LuChevronDown
						size={20}
						aria-hidden
						className='p-0.5 group-[.collapsed]/sidebar:hidden'
					/>
				)}
			</Link>
		</li>
	)
})
