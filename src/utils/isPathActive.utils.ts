/* ───────────── utils/isPathActive.utils.ts ───────────── */

/**
 * Перевіряє, чи є `currentPath` активним відносно `basePath`.
 *
 * - Корінь (`'/'`) вважається активним тільки для `'/'`.
 * - Для підшляхів достатньо, щоб `currentPath` починався з `basePath`
 *   або дорівнював йому повністю.
 *
 * Без регулярок — швидше та простіше.
 */
const isPathActive = (basePath: string, currentPath: string): boolean => {
	/* ---- нормалізація шляхів ---- */
	const norm = (p: string) => {
		if (p === '/') return '/' // root лишається root
		// гарантуємо один leading slash та відсутність trailing slash
		return '/' + p.replace(/^\/+|\/+$/g, '')
	}

	const base = norm(basePath)
	const current = norm(currentPath)

	if (base === '/') return current === '/'

	//   /settings  → активний для /settings та /settings/profile
	return current === base || current.startsWith(base + '/')
}

export default isPathActive
