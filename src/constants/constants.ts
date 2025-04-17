export const IS_DEV_MODE = 'development' === process.env.NODE_ENV
export const BASE_URL = IS_DEV_MODE ? 'perfarialocal.com' : 'perfaria.com'
export const PORTAL_URL = IS_DEV_MODE ? `http://${BASE_URL}:3000` : `https://${BASE_URL}`

export const DASHBOARD_BASE_URL = `app.${BASE_URL}`
export const DASHBOARD_FULL_URL = IS_DEV_MODE
	? `http://app.${BASE_URL}:3000`
	: `https://app.${BASE_URL}`

export const IS_CLIENT = typeof window !== 'undefined'
