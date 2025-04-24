import { Profile } from './Profile'

interface Props {}

export function Header({}: Props) {
	return (
		<header className='flex shrink-0 justify-end bg-white px-7.5 py-4'>
			<Profile />
		</header>
	)
}
