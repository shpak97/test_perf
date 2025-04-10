import type { Metadata } from 'next'

import { fontPrimary, montserrat } from '../../fonts'

import './../globals.css'

export const metadata: Metadata = {
	title: 'Perfaria',
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
			<body className={'antialiased'}>{children}</body>
		</html>
	)
}
