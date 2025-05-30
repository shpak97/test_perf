import cn from 'clsx'
import { CgClose } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'

interface InputSearchProps {
	className?: string
	placeholder?: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	onReset?: () => void
}

const InputSearch = ({
	className,
	placeholder = 'Search',
	value = '',
	onChange,
	onReset
}: InputSearchProps) => {
	const hasValue = value && value.length > 0

	const handleReset = () => {
		if (onReset) {
			onReset()
		}
	}

	return (
		<div className={cn('relative dark:text-green-600', className)}>
			<FiSearch
				size={20}
				className='absolute top-1/2 left-4 -translate-y-1/2'
			/>
			<input
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className='peer block w-full rounded-lg border border-gray-100 py-3.25 pr-6.25 pl-11.25 text-base leading-5 transition-colors outline-none placeholder:text-green-800 placeholder:opacity-30 hover:border-gray-300 focus:border-green-600 dark:border-green-800 dark:placeholder:text-green-600 dark:hover:border-green-700'
			/>
			{hasValue && onReset && (
				<button
					type='button'
					onClick={handleReset}
					className='dark:bg-green-850 absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-blue-100 p-1 text-blue-800 transition-opacity dark:text-green-600'
				>
					<CgClose size={12} />
				</button>
			)}
		</div>
	)
}

export default InputSearch
