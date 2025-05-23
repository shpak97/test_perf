'use client'

import { memo } from 'react'
import { LuFilter } from 'react-icons/lu'

import FilterOrganisationsPopupContent from './FilterOrganisationsPopupContent'
import Popup from './Popup'

/**
 * Попап для фільтрації організацій
 */
const FilterOrganisationsPopup = memo(function FilterOrganisationsPopup() {
	return (
		<Popup
			id='filter-organisations'
			title='Filter Organisations'
			Icon={LuFilter}
			className='max-w-lg'
		>
			<FilterOrganisationsPopupContent />
		</Popup>
	)
})

export default FilterOrganisationsPopup
