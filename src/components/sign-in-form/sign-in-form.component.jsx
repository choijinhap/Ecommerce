import { useState } from 'react';
import {
	signInAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
	siginInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';
const defaultFormFields = {
	email: '',
	password: '',
};
const SignInForm = () => {
	const [formFields, setFormfields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormfields(defaultFormFields);
	};
	const signInWithGoogle = async () => {
		const { user } = await siginInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			console.log(response)
			resetFormFields();
		} catch (err) {}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormfields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-up-container'>
			<h2>아이디가 있으신가요?</h2>
			<span>로그인</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='이메일'
					name='email'
					value={email}
					onChange={handleChange}
					type='email'
					required
				/>
				<FormInput
					label='비밀번호'
					name='password'
					value={password}
					onChange={handleChange}
					type='password'
					required
				/>

				<div className='buttons-container'>
					<Button type='submit'>로그인</Button>
					<Button type='submit' buttonType='google' onClick={signInWithGoogle}>
						google 로그인
					</Button>
				</div>
			</form>
		</div>
	);
};
export default SignInForm;
