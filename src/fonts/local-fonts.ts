import localFont from 'next/font/local'

// First local font
export const fontPrimary = localFont({
	src: [
		{
			path: '../../public/fonts//proximaNova/ProximaNova-Semibold.woff2',
			weight: '600',
			style: 'normal'
		},
		{
			path: '../../public/fonts//proximaNova/ProximaNova-Bold.woff2',
			weight: '700',
			style: 'normal'
		},
		{
			path: '../../public/fonts//proximaNova/ProximaNova-Extrabld.woff2',
			weight: '800',
			style: 'normal'
		}
	],
	variable: '--font-primary',
	adjustFontFallback: 'Arial',
	display: 'swap'
})

// // Second local font
// export const secondaryFont = localFont({
// 	src: '../public/fonts/SecondaryFont.woff2',
// 	variable: '--font-secondary',
// 	display: 'swap'
// })
