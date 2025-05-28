import Image from 'next/image'
import Link from 'next/link'
import { memo, useCallback } from 'react'
import { BiBuilding } from 'react-icons/bi'
import { FiEdit3, FiTrash } from 'react-icons/fi'

import LimitBadge from '@/ui/badges/LimitBadge'

import type { IOrganization } from '@/types/organization.types'

// Константи для розмірів
const ICON_SIZE = 32
const ACTION_ICON_SIZE = 20

interface OrganisationRowProps {
	organization: IOrganization
	onEdit?: (organizationId: string) => void
	onDelete?: (organizationId: string) => void
}

/**
 * Компонент рядка таблиці організацій
 * Оптимізований з мемоізацією та обробниками подій
 */
const OrganisationRow = memo<OrganisationRowProps>(function OrganisationRow({
	organization,
	onEdit,
	onDelete
}) {
	const {
		id: organizationId,
		name: organizationName,
		logo: organizationLogo,
		owner,
		role,
		teamsCount,
		usersCount,
		sitesCount,
		usedRequest,
		remainingRequests
	} = organization

	const { id: ownerId, avatar, firstName, lastName } = owner
	const ownerName = `${firstName || ''} ${lastName || ''}`.trim()

	// Мемоізовані обробники подій
	const handleEdit = useCallback(() => {
		onEdit?.(organizationId)
	}, [onEdit, organizationId])

	const handleDelete = useCallback(() => {
		onDelete?.(organizationId)
	}, [onDelete, organizationId])

	return (
		<tr className='group/table-row border-t border-gray-100 transition-colors last:border-b hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-700'>
			<td className='px-4 py-3 first:pl-5 last:pr-5'>
				<Link
					href={`/organization/${organizationId}`}
					className='flex items-center gap-2.5'
				>
					{organizationLogo ? (
						<Image
							src={organizationLogo}
							alt={`${organizationName} logo`}
							width={ICON_SIZE}
							height={ICON_SIZE}
							className='rounded'
						/>
					) : (
						<BiBuilding
							size={ICON_SIZE}
							className='text-gray-400'
							aria-label='Organization icon'
						/>
					)}
					<span>{organizationName}</span>
				</Link>
			</td>

			{/* Owner */}
			<td className='px-4 py-3 first:pl-5 last:pr-5'>
				<Link
					href={`/user/${ownerId}`}
					className='flex items-center gap-2.5'
				>
					<Image
						src={avatar || '/images/icons/icon-profile-anonimus.svg'}
						className='rounded-full'
						alt={`${ownerName} avatar`}
						width={ICON_SIZE}
						height={ICON_SIZE}
					/>
					<span>{ownerName}</span>
				</Link>
			</td>

			{/* Role */}
			<td className='px-4 py-3 first:pl-5 last:pr-5'>
				<span className='capitalize'>{role}</span>
			</td>

			{/* Teams Count */}
			<td className='px-4 py-3 first:pl-5 last:pr-5'>
				<Link href={`/organization/${organizationId}/teams`}>{teamsCount}</Link>
			</td>

			{/* Users Count */}
			<td className='px-4 py-3 first:pl-5 last:pr-5'>
				<span>{usersCount}</span>
			</td>

			{/* Sites Count */}
			<td className='px-4 py-3 first:pl-5 last:pr-5'>
				<Link href={`/organization/${organizationId}/sites`}>{sitesCount}</Link>
			</td>

			{/* Used Requests */}
			<td className='px-4 py-3 first:pl-5 last:pr-5'>
				<LimitBadge color='orange'>{usedRequest}</LimitBadge>
			</td>

			{/* Remaining Requests */}
			<td className='px-4 py-3 first:pl-5 last:pr-5'>
				<LimitBadge>{remainingRequests}</LimitBadge>
			</td>

			{/* Actions */}
			<td className='px-4 py-3 first:pl-5 last:pr-5'>
				<div className='invisible flex gap-x-2.5 opacity-0 transition-opacity group-hover/table-row:visible group-hover/table-row:opacity-100'>
					{onEdit && (
						<button
							onClick={handleEdit}
							aria-label={`Edit ${organizationName}`}
							title='Edit organization'
						>
							<FiEdit3 size={ACTION_ICON_SIZE} />
						</button>
					)}
					{onDelete && (
						<button
							onClick={handleDelete}
							className='text-red-500'
							aria-label={`Delete ${organizationName}`}
							title='Delete organization'
						>
							<FiTrash size={ACTION_ICON_SIZE} />
						</button>
					)}
				</div>
			</td>
		</tr>
	)
})

export default OrganisationRow
