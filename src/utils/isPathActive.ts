export function isPathActive(basePath: string, currentPath: string): boolean {
	const cleaned = basePath.replace(/\/$/, '')
	console.log(basePath)
	console.log(cleaned)
	console.log(currentPath)
	if (cleaned === '') {
		return currentPath === '/'
	}

	const pattern = `^${cleaned}(\\/.*)?$`
	return new RegExp(pattern).test(currentPath)
}
