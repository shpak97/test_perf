'use client'

import { type ReactNode } from 'react'
import type { IconType } from 'react-icons'

export interface PopupRegistryItem {
	id: string
	title?: string
	Icon?: IconType
	component: ReactNode
	className?: string
}

class PopupRegistryClass {
	private popups = new Map<string, PopupRegistryItem>()

	register(item: PopupRegistryItem) {
		this.popups.set(item.id, item)
	}

	unregister(id: string) {
		this.popups.delete(id)
	}

	get(id: string): PopupRegistryItem | undefined {
		return this.popups.get(id)
	}
}

export const PopupRegistry = new PopupRegistryClass()
