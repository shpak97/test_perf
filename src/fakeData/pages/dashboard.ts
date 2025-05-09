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
		used: 300
	}
}
