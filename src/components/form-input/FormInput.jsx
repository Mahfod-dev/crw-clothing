import React from 'react'
import './form-input.style.scss'

const FormInput = ({ label, ...otherProps }) => {
	const shrinkStyle = `${
		otherProps.value.length ? 'shrink' : ''
	}form-input-label`

	return (
		<div className='group'>
			<input className='form-input' {...otherProps} />
			{label && <label className={shrinkStyle}>{label}</label>}
		</div>
	)
}

export default FormInput
