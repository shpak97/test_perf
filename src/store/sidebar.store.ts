import { create } from 'zustand'

type State = {
	isSidebarCollapsed: boolean
}

type Action = {
	toggleSidebarCollapsed: () => void
}

export const useSidebarStore = create<State & Action>(set => ({
	isSidebarCollapsed: false,
	toggleSidebarCollapsed: () => set(state => ({ isSidebarCollapsed: !state.isSidebarCollapsed }))
}))
