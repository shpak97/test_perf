import { create } from 'zustand'

interface SidebarState {
	isSidebarCollapsed: boolean
	toggleSidebarCollapsed: () => void
}

export const useSidebarStore = create<SidebarState>()((set, get) => ({
	isSidebarCollapsed: false,
	toggleSidebarCollapsed: () => set({ isSidebarCollapsed: !get().isSidebarCollapsed })
}))
