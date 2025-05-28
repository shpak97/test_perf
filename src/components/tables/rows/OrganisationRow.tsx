import { memo, useCallback } from 'react'
import { BiBuilding } from 'react-icons/bi'

import ActionsCell from '../cells/ActionsCell'
import BadgeCell from '../cells/BadgeCell'
import ImageLinkCell from '../cells/ImageLinkCell'
import LinkCell from '../cells/LinkCell'
import TextCell from '../cells/TextCell'

import type { IOrganization } from '@/types/organization.types'

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
			{/* Organization */}
			<ImageLinkCell
				href={`/organization/${organizationId}`}
				imageSrc={organizationLogo}
				imageAlt={`${organizationName} logo`}
				fallbackIcon={
					<BiBuilding
						size={32}
						className='text-gray-400'
						aria-label='Organization icon'
					/>
				}
				text={organizationName}
				imageClassName='rounded'
			/>

			{/* Owner */}
			<ImageLinkCell
				href={`/user/${ownerId}`}
				imageSrc={avatar || '/images/icons/icon-profile-anonimus.svg'}
				imageAlt={`${ownerName} avatar`}
				text={ownerName}
				imageClassName='rounded-full'
			/>

			{/* Role */}
			<TextCell className='capitalize'>{role}</TextCell>

			{/* Teams Count */}
			<LinkCell href={`/organization/${organizationId}/teams`}>{teamsCount}</LinkCell>

			{/* Users Count */}
			<TextCell>{usersCount}</TextCell>

			{/* Sites Count */}
			<LinkCell href={`/organization/${organizationId}/sites`}>{sitesCount}</LinkCell>

			{/* Used Requests */}
			<BadgeCell color='orange'>{usedRequest}</BadgeCell>

			{/* Remaining Requests */}
			<BadgeCell>{remainingRequests}</BadgeCell>

			{/* Actions */}
			<ActionsCell
				onEdit={onEdit ? handleEdit : undefined}
				onDelete={onDelete ? handleDelete : undefined}
				editLabel={`Edit ${organizationName}`}
				deleteLabel={`Delete ${organizationName}`}
			/>
		</tr>
	)
})

export default OrganisationRow
