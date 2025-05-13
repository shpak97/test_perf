/* ───────────────────────────── store/sidebar.store.ts ───────────────────────────── */
import { create } from 'zustand'

/* ---------- типи ---------- */
interface SidebarState {
	isSidebarCollapsed: boolean
	toggleSidebarCollapsed: () => void
}

/* ---------- zustand‑store ---------- */
export const useSidebarStore = create<SidebarState>()(set => ({
	/** side‑bar спочатку розгорнутий */
	isSidebarCollapsed: false,

	/** інвертує стан */
	toggleSidebarCollapsed: () =>
		set(state => ({
			isSidebarCollapsed: !state.isSidebarCollapsed
		}))
}))

/* ---------- селектори (стабільні функції) ---------- */
export const useIsSidebarCollapsed = () => useSidebarStore(s => s.isSidebarCollapsed)
export const useToggleSidebar = () => useSidebarStore(s => s.toggleSidebarCollapsed)
