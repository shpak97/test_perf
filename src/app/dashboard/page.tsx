import type { Metadata } from 'next'
import Link from 'next/link'

import { PORTAL_URL } from '@/constants/constants'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return (
		<div>
			<Link href={PORTAL_URL}>Portal</Link>
		</div>
	)
}
