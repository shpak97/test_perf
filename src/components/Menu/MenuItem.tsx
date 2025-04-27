import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import type { IMenuItem } from '../../types/menuItem.types'

interface Props {
	item: IMenuItem
	isActive: boolean
}
export function MenuItem({ item, isActive }: Props) {
	return (
		<li
			className={cn({
				'group-[.collapsed]:hidden': 1 !== item.level
			})}
		>
			<Link
				href={item.href}
				className={cn(
					'flex items-center gap-x-2 rounded-md px-3.25 py-2.5 text-white transition-all hover:bg-green-600 active:bg-green-700',
					isActive ? 'bg-green-600' : 'bg-white/5',
					{
						'pl-10.5': 2 === item.level && !item.icon,
						'pl-17.5': 3 === item.level && !item.icon
					}
				)}
			>
				{item.icon && (
					<Image
						src={item.icon}
						width='20'
						height='20'
						alt={`${item.label} menu icon`}
					/>
				)}
				<span className='font-gilroy flex-1 text-base leading-5 font-semibold group-[.collapsed]:hidden'>
					{item.label}
				</span>
				{item.hasChildren && (
					<Image
						src='/images/icons/icon-arrow.svg'
						width='20'
						height='20'
						alt={`${item.label} menu icon`}
						className='rotate-90 group-[.collapsed]:hidden'
					/>
				)}
			</Link>
		</li>
	)
}
