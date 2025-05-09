import { FiGlobe } from 'react-icons/fi'

export function LanguageSwitcher() {
	return (
		<button
			type='button'
			className='group/language-switcher flex cursor-pointer items-center leading-none'
		>
			<FiGlobe
				size={40}
				className='rounded-full p-2 transition-colors group-hover/language-switcher:bg-white/10 group-active/language-switcher:bg-green-700'
				aria-hidden
			/>
			<span className='ml-2 group-[.collapsed]/sidebar:hidden'>ENG</span>
		</button>
	)
}
