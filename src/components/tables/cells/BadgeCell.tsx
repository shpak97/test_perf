import { memo } from 'react'

import LimitBadge from '@/ui/badges/LimitBadge'

interface IBadgeCellProps {
	children: string | number
	color?: 'orange' | undefined
}

const BadgeCell = memo(function BadgeCell({ children, color }: IBadgeCellProps) {
	return (
		<td className='px-4 py-3 first:pl-5 last:pr-5'>
			<LimitBadge color={color}>{children}</LimitBadge>
		</td>
	)
})

export default BadgeCell
