import Image from 'next/image'
import Link from 'next/link'

interface SiteLogoProps {
	href: string
}

export function SiteLogo({ href }: SiteLogoProps) {
	return (
		<Link
			href={href}
			className='flex items-center gap-x-3'
		>
			<Image
				src='/images/logo.svg'
				width={42}
				height={42}
				alt='Perfaria logo'
				priority
			/>
			<span className='font-montserrat text-2xl leading-none group-[.collapsed]/sidebar:hidden'>
				Perfaria
			</span>
		</Link>
	)
}
