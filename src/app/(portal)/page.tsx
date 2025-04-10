import Link from 'next/link'

export default function Portal() {
	return (
		<div className='bg-gradient-graphic-3 h-14'>
			<Link href='/dashboard'>Wrong</Link>
			<Link href='app.perfaria.com'>Right</Link>
		</div>
	)
}
