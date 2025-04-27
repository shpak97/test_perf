import { IS_CLIENT } from '@/constants/constants'

export function updateThemeClass(theme: 'light' | 'dark'): void {
	if (!IS_CLIENT) {
		return
	}
	const root = document.documentElement

	if (theme === 'dark') {
		root.classList.add('dark')
	} else {
		root.classList.remove('dark')
	}
}
