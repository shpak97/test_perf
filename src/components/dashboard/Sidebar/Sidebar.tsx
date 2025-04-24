import { SiteLogo } from '@/components/ui/SiteLogo'

import { Menu } from '../Menu/Menu'
import { data } from '../Menu/menuData'

interface Props {}

export function Sidebar({}: Props) {
	return (
		<aside className='bg-gradient h-full w-74.5 p-6'>
			<SiteLogo href='/' />
			<Menu items={data} />
		</aside>
	)
}
