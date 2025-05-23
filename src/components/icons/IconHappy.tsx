import { type SVGProps, memo } from 'react'

interface IconHappyProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
	/** Колір обводки. За замовчуванням — `currentColor`. */
	color?: string
	/** Розміри іконки (px). Якщо не вказати — 87 × 83. */
	size?: number
}

/** SVG‑іконка «Happy monitor» (адаптована для Tailwind `currentColor`). */
const IconHappy = memo(function IconHappy({
	color = 'var(--color-green-600)',
	size = 87,
	...rest
}: IconHappyProps) {
	/* співвідношення ширина/висота ≈ 87 / 83 */
	const width = size
	const height = Math.round((size * 83) / 87)

	return (
		<svg
			viewBox='0 0 87 83'
			width={width}
			height={height}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...rest}
		>
			<path
				d='M66.5 13.5H18.5C14.0817 13.5 10.5 17.0817 10.5 21.5V69.5C10.5 73.9183 14.0817 77.5 18.5 77.5H66.5C70.9183 77.5 74.5 73.9183 74.5 69.5V21.5C74.5 17.0817 70.9183 13.5 66.5 13.5Z'
				stroke={color}
				strokeWidth={1.5}
			/>
			<path
				d='M65 8.5V26M60 2.5V17.5M56 11V22M51 8.5V17.5'
				stroke={color}
				strokeWidth={1.5}
				strokeLinecap='round'
			/>
			<path
				d='M31.5 54C31.5 54 33 61.5 42.5 61.5C52 61.5 53.5 54 53.5 54'
				stroke={color}
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle
				cx={16.5}
				cy={3.5}
				r={3}
				stroke={color}
			/>
			<circle
				cx={2.5}
				cy={80.5}
				r={2}
				stroke={color}
			/>
			<circle
				cx={82.5}
				cy={30.5}
				r={3.75}
				stroke={color}
				strokeWidth={1.5}
			/>
			<circle
				cx={28}
				cy={41.5}
				r={3.75}
				stroke={color}
				strokeWidth={1.5}
			/>
			<circle
				cx={57}
				cy={41.5}
				r={3.75}
				stroke={color}
				strokeWidth={1.5}
			/>
		</svg>
	)
})

export default IconHappy
