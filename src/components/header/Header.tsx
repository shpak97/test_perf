'use client'

import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

import Profile from './Profile'
import { FAKE_USER } from '@/fakeData/user'
import type { IUser } from '@/types/user.types'

interface HeaderProps {
	user?: IUser
	className?: string
}

/** Фіксований верхній бар із профілем (праворуч). */
const Header = memo(function Header({ user = FAKE_USER, className }: HeaderProps) {
	return (
		<header
			className={twMerge(
				'flex shrink-0 items-start justify-end border-b border-gray-100 bg-white px-7.5 py-4 dark:border-green-800 dark:bg-green-900',
				className
			)}
		>
			<Profile user={user} />
		</header>
	)
})
export default Header
