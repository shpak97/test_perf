import type { IUser } from './user.types'

export interface IOrganization {
	id: string
	name: string
	logo?: string
	owner: IUser
	role: string
	teamsCount: number
	usersCount: number
	sitesCount: number
	usedRequest: number
	remainingRequests: number
	isEditable: boolean
	isRemovable: boolean
	[key: string]: unknown
}
