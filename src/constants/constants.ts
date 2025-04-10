export const BASE_URL =
	process.env.NODE_ENV === 'development' ? 'http://perfarialocal.com:3000' : 'https://perfaria.com'
export const IS_CLIENT = typeof window !== 'undefined'
