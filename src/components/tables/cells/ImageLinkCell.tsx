import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { memo } from 'react'

const ICON_SIZE = 32

interface IImageLinkCellProps {
	href: string
	imageSrc?: string
	imageAlt: string
	fallbackIcon?: ReactNode
	text: string
	imageClassName?: string
	linkClassName?: string
}

const ImageLinkCell = memo(function ImageLinkCell({
	href,
	imageSrc,
	imageAlt,
	fallbackIcon,
	text,
	imageClassName = '',
	linkClassName = 'flex items-center gap-2.5'
}: IImageLinkCellProps) {
	return (
		<td className='px-4 py-3 first:pl-5 last:pr-5'>
			<Link
				href={href}
				className={linkClassName}
			>
				{imageSrc ? (
					<Image
						src={imageSrc}
						alt={imageAlt}
						width={ICON_SIZE}
						height={ICON_SIZE}
						className={imageClassName}
					/>
				) : (
					fallbackIcon
				)}
				<span>{text}</span>
			</Link>
		</td>
	)
})

export default ImageLinkCell
