import cn from 'clsx'
import Image from 'next/image'
import { BiBuilding } from 'react-icons/bi'
import { FiEdit3, FiTrash } from 'react-icons/fi'

import { LimitBadge } from '@/ui/badges/LimitBadge'

// interface CardTableOrganisationsProps {}

const theadData = [
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
]

const tbodyData = [
	{
		id: '1',
		organization: {
			id: '',
			name: 'Organization name',
			logo: ''
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: ''
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444,
		isEditable: true,
		isRemovable: true
	},
	{
		id: '2',
		organization: {
			id: '',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: '/images/fakeImg/fakeUser.png'
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444,
		isEditable: false,
		isRemovable: true
	},
	{
		id: '3',
		organization: {
			id: '',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: '/images/fakeImg/fakeUser.png'
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444,
		isEditable: true,
		isRemovable: false
	},

	{
		id: '4',
		organization: {
			id: '',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: '/images/fakeImg/fakeUser.png'
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444,
		isEditable: false,
		isRemovable: false
	},
	{
		id: '5',
		organization: {
			id: '',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: '/images/fakeImg/fakeUser.png'
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444
	},
	{
		id: '6',
		organization: {
			id: '',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: '/images/fakeImg/fakeUser.png'
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444
	},

	{
		id: '7',
		organization: {
			id: '',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: '/images/fakeImg/fakeUser.png'
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444
	},
	{
		id: '8',
		organization: {
			id: '',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: '/images/fakeImg/fakeUser.png'
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444
	},
	{
		id: '9',
		organization: {
			id: '',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: '/images/fakeImg/fakeUser.png'
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444
	},

	{
		id: '10',
		organization: {
			id: '',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: '/images/fakeImg/fakeUser.png'
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444
	},
	{
		id: '11',
		organization: {
			id: '',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: '/images/fakeImg/fakeUser.png'
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444
	},
	{
		id: '12',
		organization: {
			id: '',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: '/images/fakeImg/fakeUser.png'
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444
	},

	{
		id: '13',
		organization: {
			id: '',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: '/images/fakeImg/fakeUser.png'
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444
	},
	{
		id: '14',
		organization: {
			id: '',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: '/images/fakeImg/fakeUser.png'
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444
	},
	{
		id: '15',
		organization: {
			id: '',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '',
			name: 'David Smith',
			logo: '/images/fakeImg/fakeUser.png'
		},
		role: 'Moderator',
		teamsCount: 3,
		usersCount: 23,
		sitesCount: 333,
		usedRequest: 23,
		remainingRequests: 4444
	}
]
export function CardTableOrganisations() {
	const BODY_HEIGHT = 570 // 10 рядків × 57 px

	return (
		<div className='rounded-lg border border-gray-100'>
			<div
				className='max-h-[616px] overflow-x-auto overflow-y-auto'
				style={{ maxHeight: BODY_HEIGHT + 56.5 }} /* 56.5 px — висота шапки */
			>
				<table className='border-colapse w-full min-w-[1522px] text-left text-base leading-none'>
					<thead className='sticky top-0 z-10 bg-gray-50'>
						<tr>
							{theadData.map((col, idx) => (
								<th
									key={col.name}
									className={cn(
										'px-4 py-5',
										idx === 0 && 'pl-5',
										idx === theadData.length - 1 && 'pr-5'
									)}
								>
									{col.name}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{tbodyData.map(row => (
							<tr
								key={row.id}
								className='border-t border-gray-100 transition-colors last:border-b hover:bg-green-50'
							>
								<td className='px-4 py-3 first:pl-5 last:pr-5'>
									<span className='flex items-center gap-2.5'>
										{row.organization.logo ? (
											<Image
												src={row.organization.logo}
												alt={`${row.organization.name} logo`}
												width={32}
												height={32}
											/>
										) : (
											<BiBuilding size={32} />
										)}
										{row.organization.name}
									</span>
								</td>
								<td className='px-4 py-3 first:pl-5 last:pr-5'>
									<span className='flex items-center gap-2.5'>
										<Image
											src={row.owner.logo || '/images/icons/icon-profile-anonimus.svg'}
											className='rounded-full'
											alt={`${row.owner.name} avatar`}
											width={32}
											height={32}
										/>
										{row.owner.name}
									</span>
								</td>
								<td className='px-4 py-3 first:pl-5 last:pr-5'>{row.role}</td>
								<td className='px-4 py-3 first:pl-5 last:pr-5'>{row.teamsCount}</td>
								<td className='px-4 py-3 first:pl-5 last:pr-5'>{row.usersCount}</td>
								<td className='px-4 py-3 first:pl-5 last:pr-5'>{row.sitesCount}</td>
								<td className='px-4 py-3 first:pl-5 last:pr-5'>
									<LimitBadge color='orange'>{row.usedRequest}</LimitBadge>
								</td>
								<td className='px-4 py-3 first:pl-5 last:pr-5'>
									<LimitBadge>{row.remainingRequests}</LimitBadge>
								</td>
								<td className='px-4 py-3 first:pl-5 last:pr-5'>
									<span className='flex gap-x-2.5'>
										<button className='cursor-pointer'>
											<FiEdit3 size={20} />
										</button>
										<button className='cursor-pointer'>
											<FiTrash
												size={20}
												className='text-red-500'
											/>
										</button>
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* footer / pagination */}
			<div className='px-5 py-3 text-sm text-gray-500'>Showing 10 of 97</div>
		</div>
	)
}
