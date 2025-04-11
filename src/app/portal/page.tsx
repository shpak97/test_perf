import Link from 'next/link'

import { DASHBOARD_URL } from '@/constants/constants'

export default function ImprovedPortal() {
	return (
		<div className='bg-gradient-graphic-3 flex h-14 gap-6'>
			<Link href='/about'>Про нас</Link>
			<Link href={DASHBOARD_URL}>Dash</Link>
			<Link href={`${DASHBOARD_URL}/test`}>Dash test</Link>
		</div>
	)
}
