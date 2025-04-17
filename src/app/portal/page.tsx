import Link from 'next/link'

import { DASHBOARD_FULL_URL } from '@/constants/constants'

export default function PagePortal() {
	return (
		<div className='bg-gradient-graphic-3 flex h-14 gap-6'>
			<Link href={DASHBOARD_FULL_URL}>Dash</Link>
		</div>
	)
}
