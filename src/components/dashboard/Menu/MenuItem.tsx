'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Menu } from './Menu'
import type { IMenuItem } from './menuItem.types'

interface Props {
	item: IMenuItem
	isActive: boolean
}
export function MenuItem({ item, isActive }: Props) {
	const hasChildren = Array.isArray(item.children) && item.children.length > 0
	return (
		<li className='flex flex-col gap-y-2'>
			<Link
				href={item.href}
				className={cn(
					'flex items-center gap-x-2 rounded-md px-[13px] py-2.5 text-white transition hover:bg-green-600',
					isActive ? 'bg-green-600' : 'bg-white/5'
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
				{item.label}
				{item.children && hasChildren && (
					<Image
						src='/images/icons/icon-arrow.svg'
						width='20'
						height='20'
						alt={`${item.label} menu icon`}
					/>
				)}
			</Link>
			{item.children && hasChildren && <Menu items={item.children} />}
		</li>
	)
}
