import cn from 'clsx'
import { FiPlus } from 'react-icons/fi'

interface ButtonPlussProps {
	children: React.ReactNode
	className?: string
	onClick?: () => void
}

const ButtonPluss = ({ children, className, onClick }: ButtonPlussProps) => {
	return (
		<button
			className={cn(
				'bg-green-550 flex items-center gap-2.5 rounded-lg px-4 py-2.75 text-[15px] leading-none text-white select-none hover:bg-green-600 active:bg-green-800',
				className
			)}
			onClick={onClick}
		>
			<FiPlus size={20} />
			{children}
		</button>
	)
}

export default ButtonPluss
