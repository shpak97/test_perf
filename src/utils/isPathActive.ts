export function isPathActive(basePath: string, currentPath: string): boolean {
	const cleaned = basePath.replace(/\/$/, '')
	console.log(cleaned)
	if (cleaned === '') {
		return currentPath === '/'
	}

	const pattern = `^${cleaned}(\\/.*)?$`
	return new RegExp(pattern).test(currentPath)
}
