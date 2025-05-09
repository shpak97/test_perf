import type { PropsWithChildren } from 'react'

import { Header } from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'

export function Layout({ children }: PropsWithChildren) {
	return (
		<div className='flex h-full overflow-hidden'>
			<Sidebar />
			<div className='flex h-full flex-1 flex-col transition-all'>
				<Header />
				<main className='flex-1 overflow-y-auto p-7.5'>{children}</main>
			</div>
		</div>
	)
}
