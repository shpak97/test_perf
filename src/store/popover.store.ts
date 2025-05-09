import { create } from 'zustand'

export interface PopoverState {
	isOpen: boolean
	open: () => void
	close: () => void
	toggle: () => void
}

export const createPopoverStore = () =>
	create<PopoverState>((set, get) => ({
		isOpen: false,
		open: () => set({ isOpen: true }),
		close: () => set({ isOpen: false }),
		toggle: () => set({ isOpen: !get().isOpen })
	}))
