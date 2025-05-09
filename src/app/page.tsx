import type { Metadata } from 'next'

import { CardProfile } from '@/components/cards/CardProfile'
import { CardUsedLimits } from '@/components/cards/CardUsedLimits'
import { CardUsedRequests } from '@/components/cards/CardUsedRequests'
import { ContentCard } from '@/components/content/ContentCard'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { dashboardData } from '@/fakeData/pages/dashboard'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	const { user, limits, usedRequests } = dashboardData
	return (
		<div className='grid grid-cols-4 gap-x-6.25 gap-y-7.25'>
			<ContentCard className='col-span-1 px-0 pb-0'>
				<CardProfile user={user} />
			</ContentCard>

			<ContentCard className='col-span-3'>
				<CardUsedLimits data={limits} />
			</ContentCard>

			<ContentCard className='col-span-4'>
				<CardUsedRequests data={usedRequests} />
			</ContentCard>
		</div>
	)
}
