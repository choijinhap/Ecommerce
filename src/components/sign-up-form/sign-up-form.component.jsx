import { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.styles.scss';
const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};
const SignUpForm = () => {
	const [formFields, setFormfields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormfields(defaultFormFields);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert('비밀번호를 확인하세요');
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			console.log(user);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (err) {
			if (err.code === 'auth/email-already-in-user') {
				alert('사용중인 메일입니다');
			} else {
				console.log('user creation encounterd an error', err);
			}
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormfields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-up-container'>
			<h2>아이디가 없으신가요?</h2>
			<h2>Sign In</h2>
			<span>회원가입</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='이름'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					type='text'
					required
				/>
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
				<FormInput
					label='비밀번호 확인'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					type='password'
					required
				/>

				<Button type='submit'>Sign up</Button>
				</form>
		</div>
	);
};
export default SignUpForm;
