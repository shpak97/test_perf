import { IS_CLIENT } from '@/constants/constants'

export function getLocalStorageValue<T>(key: string, fallback: T): T {
	if (!IS_CLIENT) return fallback

	try {
		const raw = localStorage.getItem(key)
		if (!raw) return fallback

		const parsed = JSON.parse(raw) as T
		return parsed
	} catch (err) {
		console.error(`[getLocalStorageValue] Failed to parse key "${key}":`, err)
		return fallback
	}
}
