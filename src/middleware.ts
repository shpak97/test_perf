import { type NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	const url = request.nextUrl
	const hostname = request.headers.get('host') || ''
	const path = url.pathname

	// Check if the request is for the dashboard (app.domain.com)
	const isDashboardHost = hostname.startsWith('app.')

	// Check if someone is trying to access /dashboard directly from the main domain
	const isAccessingDashboardPath = path.startsWith('/dashboard')

	// If trying to access dashboard from main domain, redirect or block
	if (isAccessingDashboardPath && !isDashboardHost) {
		// Option 1: Return 404 Not Found
		return new NextResponse('Not Found', { status: 404 })

		// Option 2: Redirect to main domain homepage
		// return NextResponse.redirect(new URL("/", request.url))
	}

	// For dashboard subdomain, rewrite to /dashboard
	if (isDashboardHost) {
		return NextResponse.rewrite(new URL(`/dashboard${url.pathname}`, request.url))
	}

	// For main domain requests, continue as normal
	return NextResponse.next()
}

export const config = {
	matcher: [
		// Match all paths except for:
		// - API routes
		// - Static files (images, etc)
		// - favicon.ico
		'/((?!api|_next/static|_next/image|favicon.ico).*)'
	]
}
