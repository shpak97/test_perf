import type { Metadata } from 'next'

import { DashboardLayout } from '@/components/dashboard/layout/DashboardLayout'

import { fontPrimary, montserrat } from '../fonts'

import './globals.css'

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Perfaria description'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={`${montserrat.variable} ${fontPrimary.variable} antialiased`}
		>
			<body className='h-screen antialiased'>
				<DashboardLayout>{children}</DashboardLayout>
			</body>
		</html>
	)
}
