'use client'

import type { PropsWithChildren } from 'react'

import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

export function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='flex h-full'>
			<Sidebar />
			<main className='h-full flex-1 transition-all'>
				<Header />
				<div className='h-[calc(100%-72px)] flex-1 overflow-y-auto bg-gray-100 p-7.5'>
					<div className='h-[1000px]'>{children}</div>
				</div>
			</main>
		</div>
	)
}
