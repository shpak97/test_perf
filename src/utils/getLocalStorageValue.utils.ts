/* ───────────── utils/getLocalStorageValue.utils.ts ───────────── */
import { IS_CLIENT } from '@/constants/constants'

/**
 * Безпечно читає та десеріалізує значення з `localStorage`.
 *
 * Якщо:
 *  • коду виконується на сервері → повертає `fallback`;
 *  • ключ відсутній / `null`      → `fallback`;
 *  • JSON‑парсинг завершується помилкою → `fallback` + console.error.
 *
 * @param key       Ключ у LocalStorage
 * @param fallback  Значення за замовчуванням
 */
export function getLocalStorageValue<T>(key: string, fallback: T): T {
	if (!IS_CLIENT) return fallback

	try {
		const raw = localStorage.getItem(key)
		if (!raw) return fallback

		// оголошуємо unknown, щоб перевірити тип при потребі
		const parsed: unknown = JSON.parse(raw)

		return parsed as T
	} catch (e) {
		console.error(`[getLocalStorageValue] Failed to read "${key}":`, e)
		return fallback
	}
}
