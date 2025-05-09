import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { getLocalStorageValue } from '@/utils/getLocalStorageValue'

type Theme = 'light' | 'dark'
type Language = string

interface AppState {
	theme: Theme
	language: Language
	setTheme: () => void
	setLanguage: (language: Language) => void
}

const STORAGE_KEY = 'app-store'

const initialState = getLocalStorageValue<AppState>(STORAGE_KEY, {
	theme: 'light',
	language: 'ENG',
	setTheme: () => {},
	setLanguage: () => {}
})

export const useAppStore = create<AppState>()(
	persist(
		(set, get) => ({
			theme: initialState.theme,
			language: initialState.language,
			setTheme: () =>
				set(({ theme }) => ({
					theme: theme === 'dark' ? 'light' : 'dark'
				})),
			setLanguage: language => set(() => ({ language }))
		}),
		{
			name: STORAGE_KEY,
			partialize: ({ theme, language }) => ({ theme, language })
		}
	)
)

// Selectors
export const useTheme = () => useAppStore(state => state.theme)
export const useSetTheme = () => useAppStore(state => state.setTheme)
export const useLanguage = () => useAppStore(state => state.language)
export const useSetLanguage = () => useAppStore(state => state.setLanguage)
