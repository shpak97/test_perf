import type { IMenuItem } from '../../types/menuItem.types'

export const SIDEBAR_MENU: IMenuItem[] = [
	{
		id: '1',
		level: 1,
		href: '/',
		label: 'Dashboard',
		icon: '/images/icons/icon-dashboard.svg'
	},
	{
		id: '2',
		level: 1,
		href: '/users',
		label: 'Users',
		icon: '/images/icons/icon-users.svg'
	},
	{
		id: '3',
		level: 1,
		href: '/organizations',
		label: 'Organizations',
		icon: '/images/icons/icon-organizations.svg'
	},
	{
		id: '4',
		level: 1,
		href: '/teams',
		label: 'Teams',
		icon: '/images/icons/icon-teams.svg'
	},
	{
		id: '5',
		level: 1,
		href: '/sites',
		label: 'Sites',
		icon: '/images/icons/icon-sites.svg',
		hasChildren: false
	},
	{
		id: '5-1',
		level: 2,
		href: '/synthetic',
		label: 'Synthetic',
		hasChildren: true
	}
	{
		id: '5-1-1',
		level: 3,
		href: '/dashboard',
		label: 'Dashboard'
	},
	{
		id: '5-1-2',
		level: 3,
		href: '/shapshot',
		label: 'Shapshot'
	},
	{
		id: '5-1-3',
		level: 3,
		href: '/budget',
		label: 'Budget'
	},
	{
		id: '5-2',
		level: 2,
		href: '/crux',
		label: 'CrUX',
		hasChildren: true
	},
	{
		id: '5-2-1',
		level: 3,
		href: '/dashboard',
		label: 'Dashboard'
	},
	{
		id: '5-2-2',
		level: 3,
		href: '/shapshot',
		label: 'Shapshot'
	},
	{
		id: '5-3',
		level: 2,
		href: '/site-settings',
		label: 'Site settings',
		hasChildren: true
	},
	{
		id: '5-3-1',
		level: 3,
		href: '/general',
		label: 'General'
	},
	{
		id: '5-3-2',
		level: 3,
		href: '/manage-pages',
		label: 'Manage pages'
	}
]
export const EXTRA_MENU: IMenuItem[] = [
	{
		id: '1',
		level: 1,
		href: '/settings',
		label: 'Settings',
		icon: '/images/icons/icon-settings.svg'
	},
	{
		id: '2',
		level: 1,
		href: '/documentation',
		label: 'Documentation',
		icon: '/images/icons/icon-documentation.svg'
	}
]
