export const BASE_URL =
	process.env.NODE_ENV === 'development' ? 'perfarialocal.com:3000' : 'perfaria.com'
export const PROTOCOL = process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
export const DASHBOARD_URL = `${PROTOCOL}app.${BASE_URL}`
export const IS_CLIENT = typeof window !== 'undefined'
