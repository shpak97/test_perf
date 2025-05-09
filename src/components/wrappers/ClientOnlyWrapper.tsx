'use client'

import cn from 'clsx'
import { type ReactNode, useEffect, useState } from 'react'

import { IconHappy } from '../icons/IconHappy'

interface ClientOnlyWrapperProps {
	children: ReactNode
	className?: string
	placeholder?: string
}

export function ClientOnlyWrapper({ children, className, placeholder }: ClientOnlyWrapperProps) {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return (
			<div className={cn('flex h-full w-full items-center justify-center', className)}>
				<div className='inline-block animate-pulse text-center'>
					<IconHappy />
					{placeholder && <div className='mt-4 text-sm text-green-600'>{placeholder}</div>}
				</div>
			</div>
		)
	}

	return <>{children}</>
}
