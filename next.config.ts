import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,

	// Додаткові налаштування для продакшену
	output: 'standalone' // Оптимізована збірка для продакшену
}

export default nextConfig
