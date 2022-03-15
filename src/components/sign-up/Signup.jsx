import React, { useState } from 'react'
import './signupForm.scss'
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/Firebase.utils'

import FormInput from '../form-input/FormInput'
import Button from '../button/Button'

const defaultFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
}
const Signup = () => {
	const [formFields, setFormFields] = useState(defaultFields)

	const { displayName, email, password, confirmPassword } = formFields

	const resetFields = () => {
		setFormFields(defaultFields)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			alert('Password does Match')
			return
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password)
			console.log(user)
			await createUserDocumentFromAuth(user, { displayName })

			resetFields()
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('user have already an account')
			}
			console.log('Could not authorize to register', error)
		}
	}

	const handleChange = (e) => {
		const { name, value } = e.target

		setFormFields((prevState) => {
			return { ...prevState, [name]: value }
		})
	}
	return (
		<div className='sign-up-container'>
			<h2>Don't have an account ?</h2>
			<span>Sign up with your email and password </span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='display Name'
					type='text'
					onChange={handleChange}
					required
					value={displayName}
					name='displayName'
				/>

				<FormInput
					label='email'
					type='email'
					onChange={handleChange}
					required
					value={email}
					name='email'
				/>

				<FormInput
					label='password'
					type='password'
					onChange={handleChange}
					required
					name='password'
					value={password}
				/>

				<FormInput
					label='confirm password'
					type='password'
					onChange={handleChange}
					required
					name='confirmPassword'
					value={confirmPassword}
				/>
				<Button buttonType={'google'} type='submit'>
					Sign up
				</Button>
			</form>
		</div>
	)
}

export default Signup
