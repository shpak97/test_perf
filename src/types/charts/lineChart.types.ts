export interface IChartSeries {
	name: string
	data: number[]
}

export interface ILineChart {
	labels: string[]
	series: IChartSeries[]
}
