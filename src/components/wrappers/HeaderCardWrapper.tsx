'use client'

import cn from 'clsx'
import { type ReactNode } from 'react'

interface HeaderCardWrapperProps {
	children: ReactNode
	className?: string
}

export function HeaderCardWrapper({ children, className }: HeaderCardWrapperProps) {
	return <div className={cn('pb-5', className)}>{children}</div>
}
