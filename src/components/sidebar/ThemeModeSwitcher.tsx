'use client'

import cn from 'clsx'
import { memo, useCallback, useEffect } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

import { useSetTheme, useTheme } from '@/store/app.store'

import { updateThemeClass } from '@/utils/updateThemeClass.utils'

/** Перемикач світла/темної теми з анімованим повзунком. */
export const ThemeModeSwitcher = memo(function ThemeModeSwitcher() {
	const theme = useTheme()
	const toggleTheme = useSetTheme()
	const isDark = theme === 'dark'

	/* ставимо / прибираємо клас "dark" на <html> */
	useEffect(() => updateThemeClass(theme), [theme])

	const handleClick = useCallback(() => {
		toggleTheme()
	}, [toggleTheme])

	return (
		<div className='flex items-center gap-2.5 text-sm leading-none'>
			<button
				type='button'
				aria-label='Toggle theme'
				onClick={handleClick}
				className={cn(
					'relative flex h-8 w-16 rounded-full p-1 transition-colors group-[.collapsed]/sidebar:w-11.75',
					isDark ? 'bg-green-600' : 'bg-green-700'
				)}
			>
				{/* повзунок */}
				<span
					className={cn(
						'absolute flex h-6 w-6 items-center justify-center rounded-full bg-white transition-all',
						isDark ? 'left-9 group-[.collapsed]/sidebar:left-4.5' : 'left-1'
					)}
				>
					{isDark ? (
						<LuMoon
							className='text-green-800'
							aria-hidden
						/>
					) : (
						<LuSun
							className='text-green-800'
							aria-hidden
						/>
					)}
				</span>
			</button>

			<span className='select-none group-[.collapsed]/sidebar:hidden'>
				{isDark ? 'Dark' : 'Light'}
			</span>
		</div>
	)
})

ThemeModeSwitcher.displayName = 'ThemeModeSwitcher'
