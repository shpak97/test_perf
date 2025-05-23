'use client'

import { memo } from 'react'
import { FiSettings, FiUser } from 'react-icons/fi'

import { usePopup } from '@/hooks/usePopup'

import Popup from './Popup'

/**
 * Приклад контенту для тестового попапа
 */
const TestPopupContent = memo(function TestPopupContent() {
	const { close, searchParams } = usePopup('test-popup')

	return (
		<div className='space-y-4'>
			<p>Це тестовий попап для демонстрації можливостей системи.</p>

			{Object.keys(searchParams).length > 0 && (
				<div className='rounded bg-blue-50 p-3'>
					<h4 className='font-medium text-blue-900'>Search Parameters:</h4>
					<pre className='mt-2 text-sm text-blue-700'>{JSON.stringify(searchParams, null, 2)}</pre>
				</div>
			)}

			<div className='flex justify-end gap-2'>
				<button
					onClick={close}
					className='rounded bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200'
				>
					Close
				</button>
			</div>
		</div>
	)
})

/**
 * Приклад контенту для попапа налаштувань
 */
const SettingsPopupContent = memo(function SettingsPopupContent() {
	const { close } = usePopup('settings-popup')

	return (
		<div className='space-y-4'>
			<p>Settings popup content goes here.</p>

			<div className='space-y-2'>
				<label className='block'>
					<span className='text-sm font-medium'>Setting 1:</span>
					<input
						type='text'
						className='mt-1 w-full rounded border px-3 py-2'
					/>
				</label>
				<label className='block'>
					<span className='text-sm font-medium'>Setting 2:</span>
					<input
						type='text'
						className='mt-1 w-full rounded border px-3 py-2'
					/>
				</label>
			</div>

			<div className='flex justify-end gap-2'>
				<button
					onClick={close}
					className='rounded bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200'
				>
					Cancel
				</button>
				<button
					onClick={() => {
						alert('Settings saved!')
						close()
					}}
					className='rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700'
				>
					Save
				</button>
			</div>
		</div>
	)
})

/**
 * Компонент для тестування системи попапів
 */
const TestPopupExample = memo(function TestPopupExample() {
	const testPopup = usePopup('test-popup')
	const settingsPopup = usePopup('settings-popup')

	return (
		<div className='space-y-4 p-6'>
			<h3 className='text-lg font-semibold'>Test Popup System</h3>

			<div className='flex flex-wrap gap-2'>
				<button
					onClick={() => testPopup.open()}
					className='rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'
				>
					Open Test Popup
				</button>

				<button
					onClick={() =>
						testPopup.open({
							source: 'button',
							timestamp: Date.now().toString(),
							user: 'test-user'
						})
					}
					className='rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700'
				>
					Open with Params
				</button>

				<button
					onClick={() => settingsPopup.open()}
					className='rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700'
				>
					Open Settings
				</button>
			</div>

			<div className='text-sm text-gray-600'>
				<p>Test Popup Open: {testPopup.isOpen ? 'Yes' : 'No'}</p>
				<p>Settings Popup Open: {settingsPopup.isOpen ? 'Yes' : 'No'}</p>
				<p className='mt-2 font-medium'>
					💡 Відкрийте попап з параметрами та подивіться на URL браузера!
				</p>
				<p className='text-xs'>
					Search params автоматично додаються в URL при відкритті та видаляються при закритті.
				</p>
			</div>

			{/* Реєстрація попапів */}
			<Popup
				id='test-popup'
				title='Test Popup'
				Icon={FiUser}
			>
				<TestPopupContent />
			</Popup>

			<Popup
				id='settings-popup'
				title='Settings'
				Icon={FiSettings}
				className='max-w-lg'
			>
				<SettingsPopupContent />
			</Popup>
		</div>
	)
})

export default TestPopupExample
