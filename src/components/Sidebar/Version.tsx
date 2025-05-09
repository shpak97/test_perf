interface VersionProps {
	version: string
}

export function Version({ version }: VersionProps) {
	return (
		<span className='pb-6 pl-3 text-xs opacity-60 group-[.collapsed]/sidebar:pl-0'>
			Ver. {version}
		</span>
	)
}
