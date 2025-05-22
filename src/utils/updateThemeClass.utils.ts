/* ───────────── utils/updateThemeClass.utils.ts ───────────── */

/**
 * Додає або прибирає клас `dark` на `<html>`, щоб активувати Tailwind‑dark‑variants.
 *
 * Викликайте одразу після зміни стора `theme`.
 *
 * @param theme  'light' — видаляє клас, 'dark' — додає
 */
export const updateThemeClass = (theme: 'light' | 'dark'): void => {
	if (typeof document === 'undefined') return // SSR‑safe

	/* ⚡ маніпулюємо лише, якщо стан реально змінюється */
	document.documentElement.classList.toggle('dark', theme === 'dark')
}
