import { IS_CLIENT } from '@/constants/constants'

export function getLocalStorageValue<T>(key: string, fallback: T): T {
	if (!IS_CLIENT) {
		return fallback
	}

	try {
		const stored = localStorage.getItem(key)

		if (!stored) {
			return fallback
		}

		return JSON.parse(stored) as T
	} catch (error) {
		console.error(`Error reading localStorage key "${key}":`, error)
		return fallback
	}
}
