'use client'

import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

interface VersionProps {
	version: string
	className?: string
}

/** Невеликий текст із номером поточної версії продукту. */
const Version = memo(function Version({ version, className }: VersionProps) {
	return (
		<span
			aria-label={`Application version ${version}`}
			className={twMerge('pb-6 pl-3 text-xs opacity-60 group-[.collapsed]/sidebar:pl-0', className)}
		>
			Ver.&nbsp;{version}
		</span>
	)
})

Version.displayName = 'Version'

export default Version
