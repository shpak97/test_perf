import Link from 'next/link'
import type React from 'react'

import { getDashboardUrl } from '@/utils/navigation'

type DashboardLinkProps = {
	href: string
	children: React.ReactNode
	className?: string
}

export function DashboardLink({ href, children, className, ...props }: DashboardLinkProps) {
	const fullUrl = getDashboardUrl(href)

	return (
		<Link
			href={fullUrl}
			className={className}
			{...props}
		>
			{children}
		</Link>
	)
}
