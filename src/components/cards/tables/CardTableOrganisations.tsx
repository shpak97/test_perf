'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { BiBuilding } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { FiEdit3, FiSearch, FiTrash } from 'react-icons/fi'
import { LuFilter } from 'react-icons/lu'

import { ContentTitle } from '@/components/content/ContentTitle'
import IconTableSort from '@/components/icons/IconTableSort'

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
			id: '1',
			name: 'Organization name',
			logo: ''
		},
		owner: {
			id: '1',
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
			id: '2',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '2',
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
			id: '3',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '3',
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
			id: '4',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '4',
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
			id: '5',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '5',
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
			id: '6',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '6',
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
			id: '7',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '7',
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
			id: '8',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '8',
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
			id: '9',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '9',
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
			id: '10',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '10',
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
			id: '11',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '11',
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
			id: '12',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '12',
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
			id: '13',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '13',
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
			id: '14',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '14',
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
			id: '15',
			name: 'Organization name',
			logo: '/images/fakeImg/fakeOrganisation.svg'
		},
		owner: {
			id: '15',
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

const CardTableOrganisations = () => {
	const BODY_HEIGHT = 570 // 10 рядків × 57 px

	return (
		<>
			<div>
				<ContentTitle
					title='Organisations'
					Icon={BiBuilding}
				/>
				<form action='search'>
					<div className='relative'>
						{/* іконка лупи */}
						<FiSearch
							size={20}
							className='absolute top-1/2 left-4 -translate-y-1/2'
						/>

						{/* поле пошуку — робимо його peer */}
						<input
							type='text'
							placeholder='Search'
							className='peer block w-full rounded-lg border border-gray-100 py-3.25 pr-6.25 pl-11.25 text-base leading-5 transition-colors outline-none placeholder:text-green-800 placeholder:opacity-30 hover:border-gray-300 focus:border-green-600'
						/>

						{/* кнопка «очистити» — показуємо лише коли peer НЕ у стані :placeholder-shown */}
						<button
							type='reset'
							className='invisible absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-blue-100 p-1 opacity-0 transition-opacity peer-[:not(:placeholder-shown)]:visible peer-[:not(:placeholder-shown)]:opacity-100'
						>
							<CgClose size={12} />
						</button>
					</div>
				</form>
				<button>
					<ContentTitle
						title='Filter'
						Icon={LuFilter}
					/>
				</button>
			</div>
			<div className='overflow-hidden rounded-lg border border-gray-100 dark:border-green-800'>
				<div
					className='max-h-[616px] overflow-x-auto overflow-y-auto'
					style={{ maxHeight: BODY_HEIGHT + 56.5 }} /* 56.5 px — висота шапки */
				>
					<table className='border-colapse w-full min-w-[1522px] text-left text-base leading-none'>
						<thead className='sticky top-0 z-10 bg-gray-50 dark:bg-green-800'>
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
										{!col.filtered ? (
											col.name
										) : (
											<button className='flex w-full items-center justify-between'>
												{col.name}
												<span className='flex flex-col gap-1.5'>
													<IconTableSort
														className='rotate-180 text-gray-300 dark:text-green-700'
														size={4}
													/>
													<IconTableSort
														size={4}
														className='text-gray-300 dark:text-green-700'
													/>
												</span>
											</button>
										)}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{tbodyData.map(row => (
								<tr
									key={row.id}
									className='group/table-row border-t border-gray-100 transition-colors last:border-b hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-700'
								>
									<td className='px-4 py-3 first:pl-5 last:pr-5'>
										<Link
											href={`/organization/${row.organization.id}`}
											className='flex items-center gap-2.5'
										>
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
										</Link>
									</td>
									<td className='px-4 py-3 first:pl-5 last:pr-5'>
										<Link
											href={`/user/${row.owner.id}`}
											className='flex items-center gap-2.5'
										>
											<Image
												src={row.owner.logo || '/images/icons/icon-profile-anonimus.svg'}
												className='rounded-full'
												alt={`${row.owner.name} avatar`}
												width={32}
												height={32}
											/>
											{row.owner.name}
										</Link>
									</td>
									<td className='px-4 py-3 first:pl-5 last:pr-5'>{row.role}</td>
									<td className='px-4 py-3 first:pl-5 last:pr-5'>
										<Link href={`/organization/${row.organization.id}/teams`}>
											{row.teamsCount}
										</Link>
									</td>
									<td className='px-4 py-3 first:pl-5 last:pr-5'>{row.usersCount}</td>
									<td className='px-4 py-3 first:pl-5 last:pr-5'>
										<Link href={`/organization/${row.organization.id}/sites`}>
											{row.sitesCount}
										</Link>
									</td>
									<td className='px-4 py-3 first:pl-5 last:pr-5'>
										<LimitBadge color='orange'>{row.usedRequest}</LimitBadge>
									</td>
									<td className='px-4 py-3 first:pl-5 last:pr-5'>
										<LimitBadge>{row.remainingRequests}</LimitBadge>
									</td>
									<td className='px-4 py-3 first:pl-5 last:pr-5'>
										<span className='invisible flex gap-x-2.5 opacity-0 transition-opacity group-hover/table-row:visible group-hover/table-row:opacity-100'>
											<button>
												<FiEdit3 size={20} />
											</button>
											<button>
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
				<div className='px-5 py-3 text-sm text-gray-500'>Showing 10 of 97</div>
			</div>
		</>
	)
}

export default CardTableOrganisations
