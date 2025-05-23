import cn from 'clsx'
import { CgClose } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'

interface InputSearchProps {
	className?: string
}

const InputSearch = ({ className }: InputSearchProps) => {
	return (
		<div className={cn('relative dark:text-green-600', className)}>
			<FiSearch
				size={20}
				className='absolute top-1/2 left-4 -translate-y-1/2'
			/>
			<input
				type='text'
				placeholder='Search'
				className='peer block w-full rounded-lg border border-gray-100 py-3.25 pr-6.25 pl-11.25 text-base leading-5 transition-colors outline-none placeholder:text-green-800 placeholder:opacity-30 hover:border-gray-300 focus:border-green-600 dark:border-green-800 dark:placeholder:text-green-600 dark:hover:border-green-700'
			/>
			<button
				type='reset'
				className='dark:bg-green-850 invisible absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-blue-100 p-1 text-blue-800 opacity-0 transition-opacity peer-[:not(:placeholder-shown)]:visible peer-[:not(:placeholder-shown)]:opacity-100 dark:text-green-600'
			>
				<CgClose size={12} />
			</button>
		</div>
	)
}

export default InputSearch
