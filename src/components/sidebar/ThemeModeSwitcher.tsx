import cn from 'clsx'
import { useEffect } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

import { useSetTheme, useTheme } from '@/store/app.store'

import { updateThemeClass } from '@/utils/updateThemeClass'

export function ThemeModeSwitcher() {
	const theme = useTheme()
	const setTheme = useSetTheme()
	const isDark = theme === 'dark'

	useEffect(() => {
		updateThemeClass(theme)
	}, [theme])

	return (
		<div className='font-gilroy flex items-center gap-x-2.5 text-base leading-none'>
			<button
				type='button'
				onClick={setTheme}
				className={cn(
					'relative flex h-8 w-16 cursor-pointer rounded-full p-1 transition-colors group-[.collapsed]/sidebar:w-11.75',
					isDark ? 'bg-green-600' : 'bg-green-700'
				)}
				aria-label='Toggle theme'
			>
				<span
					className={cn(
						'absolute flex h-6 w-6 items-center justify-center rounded-full bg-white transition-all',
						isDark ? 'left-9 group-[.collapsed]/sidebar:left-4.5' : 'left-1'
					)}
				>
					{isDark ? <LuMoon className='text-green-800' /> : <LuSun className='text-green-800' />}
				</span>
			</button>

			<span className='group-[.collapsed]/sidebar:hidden'>{isDark ? 'Dark' : 'Light'}</span>
		</div>
	)
}
