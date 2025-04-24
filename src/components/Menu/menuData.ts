import type { IMenuItem } from './menuItem.types'

export const data: IMenuItem[] = [
	{
		id: '1',
		href: '/',
		label: 'Dashboard',
		icon: '/images/icons/icon-dashboard.svg'
	},
	{
		id: '2',
		href: '/users',
		label: 'Users',
		icon: '/images/icons/icon-users.svg'
	},
	{
		id: '3',
		href: '/organizations',
		label: 'Organizations',
		icon: '/images/icons/icon-organizations.svg'
	},
	{
		id: '4',
		href: '/teams',
		label: 'Teams',
		icon: '/images/icons/icon-teams.svg'
	},
	{
		id: '5',
		href: '/sites',
		label: 'Sites',
		icon: '/images/icons/icon-sites.svg',
		children: [
			{
				id: '5-1',
				href: '/synthetic',
				label: 'Synthetic'
			},
			{
				id: '5-2',
				href: '/crux',
				label: 'CrUX'
			},
			{
				id: '5-3',
				href: '/site-settings',
				label: 'Site settings'
			}
		]
	}
]
