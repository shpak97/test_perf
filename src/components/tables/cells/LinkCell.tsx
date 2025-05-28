import Link from 'next/link'
import type { ReactNode } from 'react'
import { memo } from 'react'

interface ILinkCellProps {
	href: string
	children: ReactNode
	className?: string
}

const LinkCell = memo(function LinkCell({ href, children, className }: ILinkCellProps) {
	return (
		<td className='px-4 py-3 first:pl-5 last:pr-5'>
			<Link
				href={href}
				className={className}
			>
				{children}
			</Link>
		</td>
	)
})

export default LinkCell
