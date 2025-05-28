import type { ReactNode } from 'react'

interface ITextCellProps {
	children: ReactNode
	className?: string
}

const TextCell = ({ children, className }: ITextCellProps) => {
	return (
		<td className='px-4 py-3 first:pl-5 last:pr-5'>
			<span className={className}>{children}</span>
		</td>
	)
}

export default TextCell
