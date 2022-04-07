import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyD3cyVsvcNLZIsIFF6Jv3brpHzVy_d9bEs',
	authDomain: 'ecommerce-9e7be.firebaseapp.com',
	projectId: 'ecommerce-9e7be',
	storageBucket: 'ecommerce-9e7be.appspot.com',
	messagingSenderId: '330930561967',
	appId: '1:330930561967:web:bf04bc182327718bc4c55a',
	measurementId: 'G-FTFG9X4C10',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const siginInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, { displayName, email, createdAt });
		} catch (err) {
			console.log('error creating the user', err.message);
		}
	}
	return userDocRef;
};
