import cn from 'clsx'
import Link from 'next/link'
import { LuChevronDown } from 'react-icons/lu'

import type { IMenuItem } from '@/types/menuItem.types'

interface MenuItemProps {
	item: IMenuItem
	isActive: boolean
}

export function MenuItem({ item, isActive }: MenuItemProps) {
	const { href, label, Icon, level, hasChildren } = item

	const paddingClass =
		!Icon && level === 2 ? 'pl-10.5' : !Icon && level === 3 ? 'pl-17.5' : undefined

	return (
		<li className={cn({ 'group-[.collapsed]/sidebar:hidden': level !== 1 })}>
			<Link
				href={href}
				className={cn(
					'flex items-center gap-x-2 rounded-md px-3.25 py-2.5 transition-all hover:bg-green-600 active:bg-green-700',
					isActive ? 'bg-green-600' : 'bg-white/5',
					paddingClass
				)}
			>
				{Icon && <Icon size={20} />}
				<span className='font-gilroy flex-1 text-base leading-5 font-semibold group-[.collapsed]/sidebar:hidden'>
					{label}
				</span>
				{hasChildren && (
					<LuChevronDown
						size={20}
						className='p-0.5 group-[.collapsed]/sidebar:hidden'
					/>
				)}
			</Link>
		</li>
	)
}
