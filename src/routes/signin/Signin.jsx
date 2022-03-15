import React, { useState } from 'react'
import Signup from '../../components/sign-up/Signup'
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/Firebase.utils'



const Signin = () => {
	

	const logUser = async () => {
		const { user } = await signInWithGooglePopup()
		const userRef = await createUserDocumentFromAuth(user)
		console.log(userRef)
	}

  

	return (
		<div>
			Signin
			<button onClick={logUser}>google</button>
			<Signup />
		</div>
	)
}

export default Signin
