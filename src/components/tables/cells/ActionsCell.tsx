import { memo } from 'react'
import { FiEdit3, FiTrash } from 'react-icons/fi'

const ACTION_ICON_SIZE = 20

interface IActionsCellProps {
	onEdit?: () => void
	onDelete?: () => void
	editLabel?: string
	deleteLabel?: string
}

const ActionsCell = memo(function ActionsCell({
	onEdit,
	onDelete,
	editLabel,
	deleteLabel
}: IActionsCellProps) {
	return (
		<td className='px-4 py-3 first:pl-5 last:pr-5'>
			<div className='invisible flex gap-x-2.5 opacity-0 transition-opacity group-hover/table-row:visible group-hover/table-row:opacity-100'>
				{onEdit && (
					<button
						onClick={onEdit}
						aria-label={editLabel}
						title='Edit'
					>
						<FiEdit3 size={ACTION_ICON_SIZE} />
					</button>
				)}
				{onDelete && (
					<button
						onClick={onDelete}
						className='text-red-500'
						aria-label={deleteLabel}
						title='Delete'
					>
						<FiTrash size={ACTION_ICON_SIZE} />
					</button>
				)}
			</div>
		</td>
	)
})

export default ActionsCell
