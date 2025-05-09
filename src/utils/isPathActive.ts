export function isPathActive(basePath: string, currentPath: string): boolean {
	const cleaned = basePath.replace(/\/$/, '') || '/'
	if (cleaned === '/') {
		return currentPath === '/'
	}

	const escaped = cleaned.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	const pattern = new RegExp(`^${escaped}(\\/.*)?$`)

	return pattern.test(currentPath)
}
