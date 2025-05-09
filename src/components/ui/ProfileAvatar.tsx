import cn from 'clsx'
import Image from 'next/image'

interface ProfileAvatarProps {
	src?: string
	size: number
	className?: string
}

export function ProfileAvatar({ src, size, className }: ProfileAvatarProps) {
	const fallbackSrc = '/images/icons/icon-profile-anonimus.svg'

	return (
		<Image
			src={src || fallbackSrc}
			width={size}
			height={size}
			alt='User avatar'
			className={cn('inline-block rounded-full', className)}
		/>
	)
}
