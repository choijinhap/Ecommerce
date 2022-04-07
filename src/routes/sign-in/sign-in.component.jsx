import {
	siginInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await siginInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
		console.log(userDocRef);
	};
	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google</button>
		</div>
	);
};
export default SignIn;
