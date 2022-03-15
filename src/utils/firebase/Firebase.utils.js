import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_FIREBASE,
	authDomain: 'shop-clothing-7b14d.firebaseapp.com',
	projectId: 'shop-clothing-7b14d',
	storageBucket: 'shop-clothing-7b14d.appspot.com',
	messagingSenderId: '432067087369',
	appId: '1:432067087369:web:72c612d61c7959dfc3fcd8',
}

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

// export const signInWithGoogleRedirect = () =>
// 	signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return

	const userDocRef = doc(db, 'users', userAuth.uid)

	const userSnapshot = await getDoc(userDocRef)

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			})
		} catch (error) {
			console.log('error creating the user', error.message)
		}
	}

	return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return

	return await createUserWithEmailAndPassword(auth, email, password)
}
