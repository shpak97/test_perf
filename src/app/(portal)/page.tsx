import Link from 'next/link'

import { DashboardLink } from '@/components/ui/DashboardLink'

export default function ImprovedPortal() {
	return (
		<div className='bg-gradient-graphic-3 flex h-14 gap-6'>
			<Link href='/about'>Про нас</Link>

			<DashboardLink href='/'>Дашборд</DashboardLink>
			<DashboardLink href='/test'>Тест</DashboardLink>
			<DashboardLink href='/users/profile'>Профіль</DashboardLink>
		</div>
	)
}
