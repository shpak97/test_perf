export interface IMenuItem {
	id: string
	href: string
	label: string
	icon?: string
	children?: IMenuItem[]
}
