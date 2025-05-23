'use client'

import { memo } from 'react'
import { BiBuilding } from 'react-icons/bi'

import AddNewOrganisationPopupContent from './AddNewOrganisationPopupContent'
import Popup from './Popup'

/**
 * Попап для додавання нової організації
 * Використовує нову систему управління попапами
 */
const AddNewOrganisationPopupNew = memo(function AddNewOrganisationPopupNew() {
	return (
		<Popup
			id='add-organisation'
			title='Add New Organisation'
			Icon={BiBuilding}
		>
			<AddNewOrganisationPopupContent />
		</Popup>
	)
})

export default AddNewOrganisationPopupNew
