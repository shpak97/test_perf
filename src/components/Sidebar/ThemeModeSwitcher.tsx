import cn from 'clsx'
import Image from 'next/image'
import { useEffect } from 'react'

import { useSetTheme, useTheme } from '@/store/app.store'

import { updateThemeClass } from '@/utils/updateThemeClass'

export function ThemeModeSwitcher() {
	const theme = useTheme()
	const setTheme = useSetTheme()
	const isDark = 'dark' === theme
	const iconSrc = isDark ? '/images/icons/icon-dark-mode.svg' : '/images/icons/icon-light-mode.svg'

	useEffect(() => {
		updateThemeClass(theme)
	}, [theme])

	return (
		<div className='font-gilroy flex items-center gap-x-2.5 text-base leading-none text-white'>
			<button
				onClick={setTheme}
				className={cn(
					'relative flex h-8 w-16 cursor-pointer rounded-full p-1 transition-colors group-[.collapsed]:w-11.75',
					isDark ? 'bg-green-600' : 'bg-green-700'
				)}
			>
				<span
					className={cn(
						'absolute flex h-6 w-6 items-center justify-center rounded-full bg-white transition-all',
						isDark ? 'left-9 group-[.collapsed]:left-4.5' : 'left-1'
					)}
				>
					<Image
						src={iconSrc}
						width='16'
						height='16'
						alt='Theme Mode Icon'
					/>
				</span>
			</button>
			<span className='group-[.collapsed]:hidden'>{isDark ? 'Dark' : 'Light'}</span>
		</div>
	)
}
