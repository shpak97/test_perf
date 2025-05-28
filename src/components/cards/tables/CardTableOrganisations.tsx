'use client'

import { BiBuilding } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { LuFilter } from 'react-icons/lu'

import ContentTitle from '@/components/content/ContentTitle'
import { Popover } from '@/components/popovers/Popover'
import PopoverButton from '@/components/popovers/PopoverButton'
import PopoverContent from '@/components/popovers/PopoverContent'
import PopoverItem from '@/components/popovers/PopoverItem'
import { OrganisationRow, Table } from '@/components/tables'
import ButtonPluss from '@/components/ui/buttons/ButtonPluss'
import HeaderTableCardWrapper from '@/components/wrappers/HeaderTableCardWrapper'

import InputSearch from '@/ui/inputs/InputSearch'

import { dashboardData } from '@/fakeData/pages/dashboard'
import type { IOrganization } from '@/types/organization.types'
import type { ITableColumn } from '@/types/table.types'

// interface CardTableOrganisationsProps {}

const CardTableOrganisations = () => {
	// Использование фейковых данных из dashboardData
	const tableData = dashboardData.organisationsTable
	const organizationsData: IOrganization[] = tableData.rows
	const tableColumns: ITableColumn[] = tableData.columns

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
				<div className='gap-7.5 flex flex-1 items-center'>
					<form
						action='search'
						className='w-[540px]'
					>
						<InputSearch />
					</form>
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
						<PopoverButton className='h-10.5 flex items-center gap-2'>
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
				tbodyData={organizationsData}
				renderRow={renderOrganisationRow}
			/>
		</>
	)
}

export default CardTableOrganisations
