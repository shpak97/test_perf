import type { Metadata } from 'next'

import { Layout } from '@/components/layout/Layout'

import { fontGilroy, fontPrimary, montserrat } from '../fonts'

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
			className={`${montserrat.variable} ${fontPrimary.variable} ${fontGilroy.variable} antialiased`}
		>
			<body className='h-dvh antialiased'>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
