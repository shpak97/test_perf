import type { IconType } from 'react-icons'

interface ContentTitleProps {
	title: string
	Icon?: IconType
}

export function ContentTitle({ title, Icon }: ContentTitleProps) {
	return (
		<div className='flex items-center gap-2.5 text-lg leading-none'>
			{Icon && (
				<Icon
					size={24}
					aria-hidden
				/>
			)}
			<span>{title}</span>
		</div>
	)
}
