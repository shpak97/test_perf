'use client'

import { type PropsWithChildren, memo } from 'react'
import { twMerge } from 'tailwind-merge'

import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

interface LayoutProps extends PropsWithChildren {
	/** Додаткові класи для внутрішнього `<main>` контейнера. */
	mainClassName?: string
}

/** Базове двоколонкове компонування app‑router. */
const Layout = memo(function Layout({ children, mainClassName }: LayoutProps) {
	return (
		<div className='flex h-full overflow-hidden bg-gray-50 dark:bg-green-950'>
			<Sidebar />

			<div className='flex h-full flex-1 flex-col'>
				<Header />

				<main className={twMerge('flex-1 overflow-y-auto p-7.5', mainClassName)}>{children}</main>
			</div>
		</div>
	)
})
export default Layout
