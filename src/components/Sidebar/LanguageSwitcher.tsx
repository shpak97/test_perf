import Image from 'next/image'

export function LanguageSwitcher() {
	return (
		<button className='flex cursor-pointer items-center leading-none text-white'>
			<Image
				src='/images/icons/icon-sites.svg'
				width='40'
				height='40'
				alt='Theme Mode Icon'
				className='p-2'
			/>
			<span className='group-[.collapsed]:hidden'>ENG</span>
		</button>
	)
}
