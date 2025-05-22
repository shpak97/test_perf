'use client'

import Image, { type ImageProps } from 'next/image'
import { forwardRef, memo } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProfileAvatarProps extends Omit<ImageProps, 'src' | 'width' | 'height' | 'alt'> {
	/** Шлях до аватара або undefined — тоді підставляємо іконку за замовчуванням. */
	src?: string
	/** Квадратний розмір у px (за замовчуванням 40). */
	size?: number
	/** Tailwind‑класи. */
	className?: string
}

const FALLBACK_SRC = '/images/icons/icon-profile-anonimus.svg'

/** Круглий аватар користувача з фолбеком. */
const ProfileAvatar = memo(
	forwardRef<HTMLImageElement, ProfileAvatarProps>(
		({ src, size = 40, className, ...rest }, ref) => {
			return (
				<Image
					ref={ref}
					src={src || FALLBACK_SRC}
					width={size}
					height={size}
					alt='User avatar'
					className={twMerge('inline-block rounded-full object-cover', className)}
					priority
					{...rest}
				/>
			)
		}
	)
)

ProfileAvatar.displayName = 'ProfileAvatar'

export default ProfileAvatar
