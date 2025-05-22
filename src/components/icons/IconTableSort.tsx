import { type SVGProps, memo } from 'react'

interface IconTableSortProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
	/** Висота іконки, px (ширина масштабується автоматично). */
	size?: number
	/** Колір стрілки. За замовчуванням — поточний текстовий колір. */
	color?: string
}

const IconTableSort = memo(({ size = 4, color = 'currentColor', ...props }: IconTableSortProps) => {
	// Вихідний viewBox 8 × 4 → width / height = 2
	const height = size
	const width = size * 2

	return (
		<svg
			viewBox='0 0 8 4'
			width={width}
			height={height}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M0 0H8L4 4L0 0Z'
				fill={color}
			/>
		</svg>
	)
})

IconTableSort.displayName = 'IconTableSort'

export default IconTableSort
