import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import './sign-in-form.styles.scss';
import {
	emailSignInStart,
	googleSignInStart,
} from '../../store/user/user.action';

const defaultFormFields = {
	email: '',
	password: '',
};
const SignInForm = () => {
	const [formFields, setFormfields] = useState(defaultFormFields);
	const { email, password } = formFields;
	const dispatch = useDispatch();

	const resetFormFields = () => {
		setFormfields(defaultFormFields);
	};
	const signInWithGoogle = async () => {
		dispatch(googleSignInStart());
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			dispatch(emailSignInStart(email, password));
			resetFormFields();
		} catch (err) {
			switch (err.code) {
				case 'auth/user-not-found':
					alert('없는 아이디입니다');
					break;
				case 'auth/wrong-password':
					alert('비밀번호를 확인하세요');
					break;
				default:
					console.log(err);
			}
		}
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
					<Button
						type='button'
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={signInWithGoogle}
					>
						google 로그인
					</Button>
				</div>
			</form>
		</div>
	);
};
export default SignInForm;
