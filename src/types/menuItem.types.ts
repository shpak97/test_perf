export interface IMenuItem {
	id: string
	level: number
	href: string
	label: string
	icon?: string
	hasChildren?: boolean
}
