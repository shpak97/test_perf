'use client'

import { createContext, useContext, useRef } from 'react'
import type { ReactNode } from 'react'

import { createPopoverStore } from '@/store/popover.store'

import { useClickOutside } from '@/hooks/useClickOutside'

const PopoverContext = createContext<ReturnType<typeof createPopoverStore> | null>(null)

export function usePopover() {
	const context = useContext(PopoverContext)
	if (!context) {
		throw new Error('usePopover must be used within a <Popover> component')
	}
	return context
}

interface PopoverProps {
	children: ReactNode
}

export function Popover({ children }: PopoverProps) {
	const storeRef = useRef(createPopoverStore())
	const { close } = storeRef.current.getState()
	const ref = useClickOutside<HTMLDivElement>(close)

	return (
		<PopoverContext.Provider value={storeRef.current}>
			<div
				ref={ref}
				className='relative'
			>
				{children}
			</div>
		</PopoverContext.Provider>
	)
}
