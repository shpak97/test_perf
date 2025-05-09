import type { ILineChart } from '../charts/lineChart.types'
import type { IUsedData } from '../charts/usedData.types'
import type { IUser } from '../user.types'

export interface IDashboard {
	user: IUser
	limits: ILineChart
	usedRequests: IUsedData
}
