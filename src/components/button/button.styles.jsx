import styled from 'styled-components';

export const BaseButton = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	line-height: 50px;
	letter-spacing: 0.5px;
	padding: 0 35px;
	font-size: 15px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: 'Roboto Mono';
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;
export const GoogleSignInButton = styled(BaseButton)`
	background-color: #4285f4;
	columns: white;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;
export const InvertedButton = styled(BaseButton)`
	background-color: white;
	color: black;
	border: 1px solid black;
	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;
