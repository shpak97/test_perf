'use client'

import { useCallback, useMemo, useState } from 'react'
import { BiBuilding } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { LuFilter } from 'react-icons/lu'

import ContentTitle from '@/components/content/ContentTitle'
import { Popover } from '@/components/popovers/Popover'
import PopoverButton from '@/components/popovers/PopoverButton'
import PopoverContent from '@/components/popovers/PopoverContent'
import PopoverItem from '@/components/popovers/PopoverItem'
import { SearchFilter } from '@/components/search'
import { OrganisationRow, Table } from '@/components/tables'
import ButtonPluss from '@/components/ui/buttons/ButtonPluss'
import HeaderTableCardWrapper from '@/components/wrappers/HeaderTableCardWrapper'

import { dashboardData } from '@/fakeData/pages/dashboard'
import type { IOrganization } from '@/types/organization.types'
import type { ITableColumn } from '@/types/table.types'

// interface CardTableOrganisationsProps {}

const CardTableOrganisations = () => {
	// Використання фейкових даних з dashboardData
	const tableData = dashboardData.organisationsTable
	const organizationsData: IOrganization[] = tableData.rows
	const tableColumns: ITableColumn[] = tableData.columns

	// Стан для відфільтрованих даних та метрик
	const [filteredData, setFilteredData] = useState<IOrganization[]>(organizationsData)
	const [searchMetrics, setSearchMetrics] = useState({
		resultCount: organizationsData.length,
		totalCount: organizationsData.length,
		isSearching: false
	})

	// Мемоізуємо поля пошуку щоб уникнути ререндеру
	const searchFields = useMemo(
		() => [
			'name', // назва організації
			'owner.firstName', // ім'я власника
			'owner.lastName', // прізвище власника
			'owner.email', // email власника
			'role' // роль
		],
		[]
	)

	// Обробка відфільтрованих даних
	const handleFilteredData = useCallback((data: IOrganization[]) => {
		setFilteredData(data)
	}, [])

	// Обробка метрик пошуку
	const handleMetricsChange = useCallback(
		(metrics: { resultCount: number; totalCount: number; isSearching: boolean }) => {
			setSearchMetrics(metrics)
		},
		[]
	)

	const renderOrganisationRow = (organization: IOrganization) => (
		<OrganisationRow
			key={organization.id}
			organization={organization}
			onEdit={(organizationId: string) => {
				console.log('Edit clicked for:', organizationId)
			}}
			onDelete={(organizationId: string) => {
				console.log('Delete clicked for:', organizationId)
			}}
		/>
	)

	return (
		<>
			<HeaderTableCardWrapper>
				<ContentTitle
					title='Organisations'
					Icon={BiBuilding}
				/>
				<div className='flex flex-1 items-center gap-7.5'>
					<SearchFilter<IOrganization>
						data={organizationsData}
						searchFields={searchFields}
						onFilteredData={handleFilteredData}
						onMetricsChange={handleMetricsChange}
						placeholder='Search by organization name'
						className='w-[540px]'
						minSearchLength={1}
					/>
					<button onClick={() => {}}>
						<ContentTitle
							title='Filter'
							Icon={LuFilter}
						/>
					</button>
				</div>
				<div className='flex items-center gap-2.5'>
					<ButtonPluss onClick={() => {}}>Add new organization</ButtonPluss>
					<Popover>
						<PopoverButton className='flex h-10.5 items-center gap-2'>
							<HiOutlineDotsVertical size={20} />
						</PopoverButton>

						<PopoverContent>
							<PopoverItem
								label='Export'
								Icon={FiLogOut}
								iconClassName='-rotate-90'
								onClick={() => console.log('Export clicked')}
							/>
						</PopoverContent>
					</Popover>
				</div>
			</HeaderTableCardWrapper>

			<Table<IOrganization>
				theadData={tableColumns}
				tbodyData={filteredData}
				renderRow={renderOrganisationRow}
				searchMetrics={searchMetrics}
			/>
		</>
	)
}

export default CardTableOrganisations
