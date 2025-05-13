'use client'

import cn from 'clsx'
import Link from 'next/link'
import { memo, useMemo } from 'react'
import { FiSettings } from 'react-icons/fi'

import { ProfileAvatar } from '../ui/ProfileAvatar'

import type { IUser } from '@/types/user.types'

interface CardProfileProps {
	user: IUser
}

/** Профіль‑картка з аватаром і швидким переходом у налаштування. */
export const CardProfile = memo(function CardProfile({ user }: CardProfileProps) {
	const { avatar, firstName, lastName, email, isHold, paymentPlan } = user

	/* об'єднуємо логіку статусу в мемо, аби не обчислювати щоразу */
	const { statusText, statusClass } = useMemo(() => {
		return isHold
			? { statusText: 'Holded', statusClass: 'bg-red-100 text-red-500' }
			: { statusText: paymentPlan, statusClass: 'bg-green-100 text-green-600' }
	}, [isHold, paymentPlan])

	return (
		<div className='flex h-full flex-col items-center gap-y-4'>
			{/* Основний контент */}
			<div className='flex flex-1 flex-col items-center justify-center gap-y-4 px-3.5'>
				<ProfileAvatar
					src={avatar}
					size={96}
				/>

				<p className='text-xl leading-none font-bold'>
					{firstName} {lastName}
				</p>

				<a
					href={`mailto:${email}`}
					className='leading-none text-gray-500'
				>
					{email}
				</a>

				<span
					className={cn(
						'inline-block rounded-3xl px-5 py-2.5 text-xs leading-none font-medium',
						statusClass
					)}
				>
					{statusText}
				</span>
			</div>

			{/* Кнопка «Налаштування профілю» */}
			<Link
				href='/settings'
				className='group dark:hover:bg-green-850 flex w-full items-center justify-center gap-2.5 border-t border-gray-100 p-3.5 transition-colors hover:bg-green-50 active:bg-green-100 dark:border-green-800 dark:active:bg-green-700'
			>
				<FiSettings
					size={20}
					className='transition-transform group-hover:rotate-90'
				/>
				<span className='font-medium'>Profile settings</span>
			</Link>
		</div>
	)
})
