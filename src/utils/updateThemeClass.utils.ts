import { IS_CLIENT } from '@/constants/constants'

export function updateThemeClass(theme: 'light' | 'dark'): void {
	if (!IS_CLIENT) return

	const root = document.documentElement
	root.classList.toggle('dark', theme === 'dark')
}
