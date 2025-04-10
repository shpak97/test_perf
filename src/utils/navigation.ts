// Допоміжні функції для роботи з посиланнями
import { headers } from 'next/headers'
import type { NextRequest } from 'next/server'

import { BASE_URL, IS_CLIENT } from '@/constants/constants'

// Отримати URL для дашборду
export const getDashboardUrl = (path = '') => {
	const dashboardUrl = BASE_URL?.replace('perfaria', 'app.perfaria')

	// Якщо шлях починається з /, видаляємо його
	const cleanPath = path.startsWith('/') ? path.substring(1) : path

	return `${dashboardUrl}${cleanPath ? `/${cleanPath}` : ''}`
}

// Перевірити, чи поточний хост є дашбордом (для middleware)
export const isDashboardFromRequest = (request: NextRequest) => {
	const hostname = request.headers.get('host') || ''
	return hostname.startsWith('app.')
}

// Перевірити, чи поточний хост є дашбордом (для серверних компонентів)
export const isDashboardFromHeaders = async () => {
	const headersList = await headers()
	const hostname = headersList.get('host') || ''
	return hostname.startsWith('app.')
}

// Універсальна функція, яка працює і на клієнті, і на сервері
export const isDashboard = () => {
	// Перевірка, чи код виконується на клієнті
	if (IS_CLIENT) {
		return window.location.hostname.startsWith('app.')
	}

	// Для серверного рендерингу використовуємо headers()
	try {
		return isDashboardFromHeaders()
	} catch (e) {
		// Якщо headers() недоступний (наприклад, в getStaticProps)
		return false
	}
}
