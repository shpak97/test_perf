'use client'

import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'
import { forwardRef, memo } from 'react'
import { twMerge } from 'tailwind-merge'

interface SiteLogoProps extends LinkProps {
	/** Tailwind‑класи для оболонки (посилання). */
	className?: string
	/** Розмір логотипу в px (квадрат). Default 42. */
	size?: number
}

/** Клік‑логотип сайту (іконка + назва), ховається у collapsed sidebar. */
const SiteLogo = memo(
	forwardRef<HTMLAnchorElement, SiteLogoProps>(function SiteLogo(
		{ href, className, size = 42, ...rest },
		ref
	) {
		return (
			<Link
				ref={ref}
				href={href}
				{...rest}
				className={twMerge('flex items-center gap-3', className)}
			>
				<Image
					src='/images/logo.svg'
					width={size}
					height={size}
					priority
					alt='Perfaria logo'
				/>

				<span className='font-montserrat text-2xl leading-none group-[.collapsed]/sidebar:hidden'>
					Perfaria
				</span>
			</Link>
		)
	})
)

SiteLogo.displayName = 'SiteLogo'

export default SiteLogo
