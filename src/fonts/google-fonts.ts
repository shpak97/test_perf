import { Montserrat } from 'next/font/google'

// Load Montserrat with more customization
export const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['700'],
	style: ['normal'],
	variable: '--font-montserrat',
	display: 'swap'
})
