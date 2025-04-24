export function isPathActive(basePath: string, currentPath: string): boolean {
	const cleaned = basePath.replace(/\/$/, '')
	console.log('basePath', basePath)
	console.log('cleaned', cleaned)
	console.log('currentPath', currentPath)
	if (cleaned === '') {
		console.log(currentPath === '/')
		return currentPath === '/'
	}

	const pattern = `^${cleaned}(\\/.*)?$`
	return new RegExp(pattern).test(currentPath)
}
