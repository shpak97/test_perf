'use client'

import { type ButtonHTMLAttributes, type MouseEventHandler, forwardRef, memo } from 'react'
import { FiGlobe } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'

interface LanguageSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/** Поточна мова у вигляді лейбла (за замовчуванням 'ENG'). */
	locale?: string
	/** Callback на зміну мови. */
	onChange?: () => void
}

/** Кнопка перемикання мови (іконка + лейбл). */
const LanguageSwitcher = memo(
	forwardRef<HTMLButtonElement, LanguageSwitcherProps>(function LanguageSwitcher(
		{ locale = 'ENG', onChange, className, onClick, ...rest },
		ref
	) {
		const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
			onChange?.()
			onClick?.(e)
		}

		return (
			<button
				ref={ref}
				type='button'
				aria-label='Change language'
				onClick={handleClick}
				className={twMerge(
					'group/language flex items-center leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600',
					className
				)}
				{...rest}
			>
				<FiGlobe
					size={40}
					aria-hidden
					className='rounded-full p-2 transition-colors group-hover/language:bg-white/10 group-active/language:bg-green-700'
				/>
				<span className='ml-2 group-[.collapsed]/sidebar:hidden'>{locale}</span>
			</button>
		)
	})
)

LanguageSwitcher.displayName = 'LanguageSwitcher'

export default LanguageSwitcher
