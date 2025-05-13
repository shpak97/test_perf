/* ─────────────────────  store/popover.store.ts  ───────────────────── */
import { create } from 'zustand'

/* ---------- типи ---------- */
export interface PopoverState {
	isOpen: boolean
	open: () => void
	close: () => void
	toggle: () => void
}

/* ---------- фабрика стора (щоб можна було створювати декілька ізольованих popover‑store) ---------- */
export const createPopoverStore = () =>
	create<PopoverState>(set => ({
		isOpen: false,

		/* відкриває */
		open: () => set({ isOpen: true }),

		/* закриває */
		close: () => set({ isOpen: false }),

		/* перемикає */
		toggle: () =>
			set(state => ({
				isOpen: !state.isOpen
			}))
	}))
