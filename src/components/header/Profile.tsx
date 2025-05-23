'use client'

import cn from 'clsx'
import { memo } from 'react'
import { FiEdit3, FiLogOut } from 'react-icons/fi'
import { LuChevronDown } from 'react-icons/lu'

import { Popover, usePopover } from '@/components/popovers/Popover'
import PopoverButton from '@/components/popovers/PopoverButton'
import PopoverContent from '@/components/popovers/PopoverContent'
import PopoverItem from '@/components/popovers/PopoverItem'
import ProfileAvatar from '@/components/ui/ProfileAvatar'

import type { IUser } from '@/types/user.types'

interface ProfileProps {
	user: IUser
}

/** Кнопка‑профіль з меню «Edit / Logout». */
const Profile = memo(function Profile({ user }: ProfileProps) {
	const { avatar, firstName, lastName, role } = user

	return (
		<Popover>
			<PopoverButton className='flex items-center gap-2'>
				<ProfileAvatar
					src={avatar}
					size={40}
				/>

				<span className='flex flex-col gap-1.5 text-left capitalize'>
					<span className='leading-none font-bold'>
						{firstName} {lastName}
					</span>
					<span className='text-xs leading-none text-gray-400'>{role}</span>
				</span>

				<ChevronIcon />
			</PopoverButton>

			<PopoverContent>
				<PopoverItem
					label='Edit profile'
					href='/edit'
					Icon={FiEdit3}
				/>
				<PopoverItem
					label='Logout'
					Icon={FiLogOut}
					onClick={() => console.log('Logout clicked')}
				/>
			</PopoverContent>
		</Popover>
	)
})

/* ---------- допоміжна конка ---------- */
const ChevronIcon = memo(function ChevronIcon() {
	const isOpen = usePopover()(state => state.isOpen)

	return (
		<LuChevronDown
			size={20}
			className={cn('transition-transform duration-200', {
				'rotate-180': isOpen
			})}
			aria-hidden
		/>
	)
})

export default Profile
