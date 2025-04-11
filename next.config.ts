import type { NextConfig } from 'next'

const BASE_URL = process.env.NODE_ENV === 'development' ? 'perfarialocal.com' : 'perfaria.com'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,

	// (Опционально) для сборки "standalone"
	output: 'standalone',

	// Разрешаем Dev-серверу обрабатывать запросы с этих доменов:
	allowedDevOrigins: [`http://perfarialocal.com:3000`, `http://app.perfarialocal.com:3000`],

	async rewrites() {
		return [
			// Если Host = 'app.localhost', подгружаем /dashboard
			{
				source: '/:path*',
				has: [{ type: 'host', value: `app.${BASE_URL}` }],
				destination: '/dashboard/:path*'
			},
			// Если Host = 'localhost', подгружаем /portal
			{
				source: '/:path*',
				has: [{ type: 'host', value: `${BASE_URL}` }],
				destination: '/portal/:path*'
			}
		]
	}
}

export default nextConfig
