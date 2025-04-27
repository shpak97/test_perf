import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { getLocalStorageValue } from '@/utils/getLocalStorageValue'

type State = {
	theme: 'light' | 'dark'
	language: string
}

type Action = {
	setTheme: () => void
	setLanguage: (language: State['language']) => void
}

const initialThemeStore = getLocalStorageValue<State>('theme', {
	theme: 'light',
	language: 'ENG'
})

export const useAppStore = create<State & Action>()(
	persist(
		(set, get) => ({
			theme: initialThemeStore.theme,
			language: initialThemeStore.language,
			setTheme: () =>
				set(state => ({
					...state,
					theme: get().theme === 'dark' ? 'light' : 'dark'
				})),
			setLanguage: language => set(() => ({ language }))
		}),
		{
			name: 'theme',
			partialize: state => ({
				theme: state.theme,
				language: state.language
			})
		}
	)
)

export const useTheme = () => useAppStore(state => state.theme)
export const useSetTheme = () => useAppStore(state => state.setTheme)
