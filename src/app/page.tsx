import type { Metadata } from 'next'

import CardProfile from '@/components/cards/CardProfile'
import CardChartUsedLimits from '@/components/cards/charts/CardChartUsedLimits'
import CardChartUsedRequests from '@/components/cards/charts/CardChartUsedRequests'
import CardTableOrganisations from '@/components/cards/tables/CardTableOrganisations'
import ContentCard from '@/components/content/ContentCard'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { dashboardData } from '@/fakeData/pages/dashboard'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

const DashboardPage = () => {
	const { user, limits, usedRequests } = dashboardData
	return (
		<div className='grid grid-cols-4 gap-x-6.25 gap-y-7.25'>
			<ContentCard className='col-span-1 px-0 pb-0'>
				<CardProfile user={user} />
			</ContentCard>

			<ContentCard className='col-span-3'>
				<CardChartUsedLimits data={limits} />
			</ContentCard>

			<ContentCard className='col-span-4'>
				<CardChartUsedRequests data={usedRequests} />
			</ContentCard>

			<ContentCard className='col-span-4'>
				<CardTableOrganisations />
			</ContentCard>
		</div>
	)
}
export default DashboardPage
