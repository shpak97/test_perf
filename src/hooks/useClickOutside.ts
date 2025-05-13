'use client'

import { type RefObject, useEffect, useRef } from 'react'

/**
 * Повертає `ref`, клік/тап поза яким викликає `onOutside`.
 *
 * @example
 * const ref = useClickOutside<HTMLDivElement>(() => setOpen(false))
 * return <div ref={ref}>...</div>
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
	onOutside: () => void
): RefObject<T | null> {
	const targetRef = useRef<T | null>(null)

	// тримаємо актуальний callback, щоб не перевішувати слухачі
	const cbRef = useRef(onOutside)
	cbRef.current = onOutside

	useEffect(() => {
		const handler = (e: MouseEvent | TouchEvent) => {
			const el = targetRef.current
			if (!el || el.contains(e.target as Node)) return
			cbRef.current()
		}

		document.addEventListener('mousedown', handler, true)
		document.addEventListener('touchstart', handler, true)

		return () => {
			document.removeEventListener('mousedown', handler, true)
			document.removeEventListener('touchstart', handler, true)
		}
	}, [])

	return targetRef
}
