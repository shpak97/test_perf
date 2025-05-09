import { BiBuilding } from 'react-icons/bi'
import { FiGlobe, FiSettings, FiUser } from 'react-icons/fi'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { LuLayoutGrid, LuUsers } from 'react-icons/lu'

import type { IMenuItem } from '../../types/menuItem.types'

export const SIDEBAR_MENU: IMenuItem[] = [
	{
		id: '1',
		level: 1,
		href: '/',
		label: 'Dashboard',
		Icon: LuLayoutGrid
	},
	{
		id: '2',
		level: 1,
		href: '/users',
		label: 'Users',
		Icon: FiUser
	},
	{
		id: '3',
		level: 1,
		href: '/organizations',
		label: 'Organizations',
		Icon: BiBuilding
	},
	{
		id: '4',
		level: 1,
		href: '/teams',
		label: 'Teams',
		Icon: LuUsers
	},
	{
		id: '5',
		level: 1,
		href: '/sites',
		label: 'Sites',
		Icon: FiGlobe,
		hasChildren: true
	}

	// {
	// 	id: '5-1',
	// 	level: 2,
	// 	href: '/synthetic',
	// 	label: 'Synthetic',
	// 	hasChildren: true
	// },
	// {
	// 	id: '5-1-1',
	// 	level: 3,
	// 	href: '/dashboard',
	// 	label: 'Dashboard'
	// },
	// {
	// 	id: '5-1-2',
	// 	level: 3,
	// 	href: '/shapshot',
	// 	label: 'Shapshot'
	// },
	// {
	// 	id: '5-1-3',
	// 	level: 3,
	// 	href: '/budget',
	// 	label: 'Budget'
	// },
	// {
	// 	id: '5-2',
	// 	level: 2,
	// 	href: '/crux',
	// 	label: 'CrUX',
	// 	hasChildren: true
	// },
	// {
	// 	id: '5-2-1',
	// 	level: 3,
	// 	href: '/dashboard',
	// 	label: 'Dashboard'
	// },
	// {
	// 	id: '5-2-2',
	// 	level: 3,
	// 	href: '/shapshot',
	// 	label: 'Shapshot'
	// },
	// {
	// 	id: '5-3',
	// 	level: 2,
	// 	href: '/site-settings',
	// 	label: 'Site settings',
	// 	hasChildren: true
	// },
	// {
	// 	id: '5-3-1',
	// 	level: 3,
	// 	href: '/general',
	// 	label: 'General'
	// },
	// {
	// 	id: '5-3-2',
	// 	level: 3,
	// 	href: '/manage-pages',
	// 	label: 'Manage pages'
	// }
]
export const EXTRA_MENU: IMenuItem[] = [
	{
		id: '1',
		level: 1,
		href: '/settings',
		label: 'Settings',
		Icon: FiSettings
	},
	{
		id: '2',
		level: 1,
		href: '/documentation',
		label: 'Documentation',
		Icon: IoDocumentTextOutline
	}
]
