/* ─────────────────────  store/popup.store.ts  ───────────────────── */
import { create } from 'zustand'

import { IS_CLIENT } from '@/constants/constants'

/* ---------- типи ---------- */
export interface PopupData {
	id: string
	searchParams?: Record<string, string>
}

export interface PopupState {
	currentPopup: PopupData | null
	openPopup: (id: string, searchParams?: Record<string, string>) => void
	closePopup: () => void
	isPopupOpen: (id: string) => boolean
}

/* ---------- zustand‑store ---------- */
export const usePopupStore = create<PopupState>()((set, get) => ({
	currentPopup: null,

	/* відкриває попап з опціональними search params (закриває попередній якщо є) */
	openPopup: (id: string, searchParams?: Record<string, string>) => {
		const current = get().currentPopup

		// Видаляємо параметри попереднього попапа з URL якщо він був
		if (current?.searchParams && typeof window !== 'undefined') {
			try {
				const url = new URL(window.location.href)
				Object.keys(current.searchParams).forEach(key => {
					url.searchParams.delete(key)
				})
				window.history.replaceState(null, '', url.toString())
			} catch {
				// Ігноруємо помилки URL
			}
		}

		// Оновлюємо стан
		set({
			currentPopup: { id, searchParams }
		})

		// Додаємо нові параметри в URL
		if (searchParams && IS_CLIENT) {
			try {
				const url = new URL(window.location.href)
				Object.entries(searchParams).forEach(([key, value]) => {
					if (value) {
						url.searchParams.set(key, value)
					}
				})
				window.history.replaceState(null, '', url.toString())
			} catch {
				// Ігноруємо помилки URL
			}
		}
	},

	/* закриває поточний попап */
	closePopup: () => {
		const current = get().currentPopup
		console.log('closePopup called, current popup:', current)

		// Видаляємо параметри з URL якщо попап їх додавав
		if (current?.searchParams && typeof window !== 'undefined') {
			try {
				const url = new URL(window.location.href)
				Object.keys(current.searchParams).forEach(key => {
					url.searchParams.delete(key)
				})
				window.history.replaceState(null, '', url.toString())
				console.log('URL updated after close:', url.toString())
			} catch {
				// Ігноруємо помилки URL
			}
		}

		// Оновлюємо стан
		set({ currentPopup: null })
		console.log('Popup state set to null')
	},

	/* перевіряє чи відкритий конкретний попап */
	isPopupOpen: (id: string): boolean => {
		const current = get().currentPopup
		return current?.id === id
	}
}))

/* ---------- селектори (стабільні функції) ---------- */
export const useCurrentPopup = () => usePopupStore((s: PopupState) => s.currentPopup)
export const useOpenPopup = () => usePopupStore((s: PopupState) => s.openPopup)
export const useClosePopup = () => usePopupStore((s: PopupState) => s.closePopup)
export const useIsPopupOpen = () => usePopupStore((s: PopupState) => s.isPopupOpen)
