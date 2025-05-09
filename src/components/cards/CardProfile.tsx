import cn from 'clsx'
import Link from 'next/link'
import { FiSettings } from 'react-icons/fi'

import { ProfileAvatar } from '../ui/ProfileAvatar'

import type { IUser } from '@/types/user.types'

interface CardProfileProps {
	user: IUser
}

export function CardProfile({ user }: CardProfileProps) {
	const { avatar, firstName, lastName, email, isHold, paymentPlan } = user
	const statusText = isHold ? 'Holded' : paymentPlan
	const statusClass = isHold ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-600'

	return (
		<div className='flex h-full flex-col items-center gap-y-4'>
			<div className='flex flex-1 flex-col items-center justify-center gap-y-4 px-3.5'>
				<ProfileAvatar
					src={avatar}
					size={96}
				/>

				<div className='text-xl leading-none font-bold'>
					{firstName} {lastName}
				</div>

				<a
					href={`mailto:${email}`}
					className='block leading-none text-gray-500'
				>
					{email}
				</a>

				<div className={cn('inline-block rounded-3xl px-5 py-2.5 leading-none', statusClass)}>
					{statusText}
				</div>
			</div>

			<Link
				href='/settings'
				className='dark:hover:bg-green-850 flex w-full items-center justify-center gap-2.5 border-t border-t-gray-100 p-3.5 px-3.75 transition-colors hover:bg-green-50 active:bg-green-100 dark:border-t-green-800 dark:active:bg-green-700'
			>
				<FiSettings
					size={20}
					className='p-0.5'
				/>
				Profile settings
			</Link>
		</div>
	)
}
