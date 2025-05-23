/* ──────────────────────────────  store/app.store.ts  ───────────────────────────── */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import getLocalStorageValue from '@/utils/getLocalStorageValue.utils'

/* ─── типи ──────────────────────────────────────────────────────────────────────── */
type Theme = 'light' | 'dark'
type Language = string

/** Те, що реально зберігаємо у localStorage. */
interface PersistSlice {
	theme: Theme
	language: Language
}

/** Повний стан стора (persist + actions). */
interface AppState extends PersistSlice {
	setTheme: () => void
	setLanguage: (lang: Language) => void
}

/* ─── константи ─────────────────────────────────────────────────────────────────── */
const STORAGE_KEY = 'app-store'

/* ─── початкові дані (з localStorage або дефолти) ──────────────────────────────── */
const persisted: PersistSlice = getLocalStorageValue<PersistSlice>(STORAGE_KEY, {
	theme: 'light',
	language: 'ENG'
})

/* ─── zustand‑store ────────────────────────────────────────────────────────────── */
export const useAppStore = create<AppState>()(
	persist(
		set => ({
			/* state */
			theme: persisted.theme,
			language: persisted.language,

			/* actions */
			setTheme: () =>
				set(({ theme }) => ({
					theme: theme === 'dark' ? 'light' : 'dark'
				})),
			setLanguage: language => set({ language })
		}),
		{
			name: STORAGE_KEY,
			partialize: ({ theme, language }) => ({ theme, language })
		}
	)
)

/* ─── selectors (завжди стабільні) ─────────────────────────────────────────────── */
export const useTheme = () => useAppStore(s => s.theme)
export const useSetTheme = () => useAppStore(s => s.setTheme)

export const useLanguage = () => useAppStore(s => s.language)
export const useSetLanguage = () => useAppStore(s => s.setLanguage)
