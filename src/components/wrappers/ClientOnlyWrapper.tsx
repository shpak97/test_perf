'use client'

import { type HTMLAttributes, type ReactNode, forwardRef, memo, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import IconHappy from '../icons/IconHappy'

interface ClientOnlyWrapperProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	children: ReactNode
	/** Текст під іконкою, поки JS ще не примонтувався (опційно). */
	placeholder?: ReactNode
	/** Кастомна fallback‑іконка (за замовчуванням `<IconHappy />`). */
	FallbackIcon?: typeof IconHappy
}

/** Рендерить `children` лише після маунту на клієнті (SSR‑safe). */
const ClientOnlyWrapper = memo(
	forwardRef<HTMLDivElement, ClientOnlyWrapperProps>(function ClientOnlyWrapper(
		{ children, className, placeholder = 'Loading…', FallbackIcon = IconHappy, ...rest },
		ref
	) {
		const [mounted, setMounted] = useState(false)

		/* після першого клієнтського рендеру показуємо контент */
		useEffect(() => setMounted(true), [])

		if (!mounted) {
			return (
				<div
					ref={ref}
					className={twMerge('flex h-full w-full items-center justify-center', className)}
					{...rest}
				>
					<div className='inline-block animate-pulse text-center'>
						<FallbackIcon />
						{placeholder && <div className='mt-4 text-sm text-green-600'>{placeholder}</div>}
					</div>
				</div>
			)
		}

		return <>{children}</>
	})
)

ClientOnlyWrapper.displayName = 'ClientOnlyWrapper'

export default ClientOnlyWrapper
