import { FAKE_USER } from '../user'

import type { IDashboard } from '@/types/pages/dashboard.type'

export const dashboardData: IDashboard = {
	user: FAKE_USER,
	limits: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		series: [
			{
				name: 'Companies',
				data: [50, 100, 150, 51, 42, 109, 100]
			},
			{
				name: 'Users',
				data: [40, 90, 140, 51, 42, 109, 100]
			},
			{
				name: 'Requests',
				data: [30, 80, 130, 51, 42, 109, 100]
			},
			{
				name: 'Teams',
				data: [20, 70, 120, 51, 42, 109, 100]
			},
			{
				name: 'Sites',
				data: [10, 60, 110, 51, 42, 109, 100]
			}
		]
	},
	usedRequests: {
		total: 1000,
		used: 450
	},
	organisationsTable: {
		columns: [
			{
				name: 'Organization',
				filtered: true
			},
			{
				name: 'Owner',
				filtered: true
			},
			{
				name: 'Role',
				filtered: true
			},
			{
				name: 'Teams',
				filtered: true
			},
			{
				name: 'Users',
				filtered: true
			},
			{
				name: 'Sites',
				filtered: true
			},
			{
				name: 'Used Requests',
				filtered: true
			},
			{
				name: 'Remaining Requests',
				filtered: true
			},
			{
				name: 'Actions',
				filtered: false
			}
		],
		rows: [
			{
				id: '1',
				name: 'Organization name',
				logo: '/images/fakeImg/fakeOrganisation.svg',
				owner: {
					id: '1',
					email: 'string@gmail.com',
					firstName: 'David',
					lastName: 'Smith',
					avatar: '/images/fakeImg/fakeUser.png',
					role: 'string',
					paymentPlan: 'string',
					isHold: false
				},
				role: 'Moderator',
				teamsCount: 3,
				usersCount: 23,
				sitesCount: 333,
				usedRequest: 23,
				remainingRequests: 4444,
				isEditable: true,
				isRemovable: true
			}
		]
	}
}
