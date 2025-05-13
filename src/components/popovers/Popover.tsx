'use client'

import { type ReactNode, createContext, memo, useContext, useRef } from 'react'

import { createPopoverStore } from '@/store/popover.store'

import { useClickOutside } from '@/hooks/useClickOutside'

/* ---------- CONTEXT ---------- */
const PopoverContext = createContext<ReturnType<typeof createPopoverStore> | null>(null)

/** Повертає zustand‑store поповера. Кидає помилку, якщо викликати поза <Popover>. */
export const usePopover = () => {
	const ctx = useContext(PopoverContext)
	if (!ctx) throw new Error('usePopover must be used within <Popover>')
	return ctx
}

/* ---------- COMPONENT ---------- */
interface PopoverProps {
	children: ReactNode
	/** Додаткові Tailwind‑класи для кореневого <div>. */
	className?: string
}

/** Обгортка‑провайдер для будь‑якого вмісту з логікою відкриття/закриття. */
export const Popover = memo(function Popover({ children, className = 'relative' }: PopoverProps) {
	/* store створюється один раз і зберігається в ref */
	const storeRef = useRef(createPopoverStore())

	/* закриваємо, якщо клік поза межами */
	const { close } = storeRef.current.getState()
	const containerRef = useClickOutside<HTMLDivElement>(close)

	return (
		<PopoverContext.Provider value={storeRef.current}>
			<div
				ref={containerRef}
				className={className}
			>
				{children}
			</div>
		</PopoverContext.Provider>
	)
})

Popover.displayName = 'Popover'
