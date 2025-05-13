import { type SVGProps, memo } from 'react'

interface IconUnhappyProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
	/** Колір обводки. За замовчуванням — `currentColor`. */
	color?: string
	/** Базова ширина іконки (висота рахується пропорційно 83 / 87). */
	size?: number
}

/** SVG‑іконка «Unhappy monitor». */
export const IconUnhappy = memo(function IconUnhappy({
	color = 'var(--color-gray-300)',
	size = 87,
	...rest
}: IconUnhappyProps) {
	const width = size
	const height = Math.round((size * 83) / 87)

	return (
		<svg
			viewBox='0 0 87 83'
			fill='none'
			width={width}
			height={height}
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
			{/* рот — «зигзаг» */}
			<path
				d='M32 53L35.5 55.5L38.5 52.5L42 55.5L45 52.5L48.5 55.5L51.5 53'
				stroke={color}
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			{/* декоративні кружечки */}
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
			{/* очі‑хрестики */}
			<path
				d='M24.5 38L28 41.5M31.5 45L28 41.5M28 41.5L31.5 38M28 41.5L24.5 45'
				stroke={color}
				strokeWidth={1.5}
				strokeLinecap='round'
			/>
			<path
				d='M53 38L56.5 41.5M60 45L56.5 41.5M56.5 41.5L60 38M56.5 41.5L53 45'
				stroke={color}
				strokeWidth={1.5}
				strokeLinecap='round'
			/>
		</svg>
	)
})
