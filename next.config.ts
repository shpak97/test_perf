import type { NextConfig } from 'next'

// import { BASE_URL, DASHBOARD_BASE_URL } from './src/constants/constants'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,

	// (Опционально) для сборки "standalone"
	output: 'standalone'

	// async rewrites() {
	// 	return [
	// 		// Если Host = dashboard url, подгружаем /dashboard
	// 		{
	// 			source: '/:path*',
	// 			has: [{ type: 'host', value: DASHBOARD_BASE_URL }],
	// 			destination: '/dashboard/:path*'
	// 		},
	// 		// Если Host =  base url, подгружаем /portal
	// 		{
	// 			source: '/:path*',
	// 			has: [{ type: 'host', value: BASE_URL }],
	// 			destination: '/portal/:path*'
	// 		}
	// 	]
	// }
}

export default nextConfig
