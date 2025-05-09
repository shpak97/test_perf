export interface IUser {
	id: string
	email: string
	firstName: string
	lastName: string
	avatar?: string
	role: string
	paymentPlan: string
	isHold: boolean
}
