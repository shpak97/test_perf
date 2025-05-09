import { Profile } from './Profile'
import { FAKE_USER } from '@/fakeData/user'

export function Header() {
	return (
		<header className='flex shrink-0 justify-end border-b border-gray-100 bg-white px-7.5 pt-4 pb-3.75 dark:border-green-800 dark:bg-green-900'>
			<Profile user={FAKE_USER} />
		</header>
	)
}
