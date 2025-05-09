import type { ElementType } from 'react'

export interface IMenuItem {
	id: string
	level: number
	href: string
	label: string
	Icon?: ElementType
	hasChildren?: boolean
}
