'use client'

import cn from 'clsx'
import { type ReactNode } from 'react'

interface ContentCardWrapperProps {
	children: ReactNode
	className?: string
}

export function ContentCardWrapper({ children, className }: ContentCardWrapperProps) {
	return <div className={cn(className)}>{children}</div>
}
