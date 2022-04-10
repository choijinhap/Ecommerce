import { useContext } from 'react';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
	const { cartItems ,setIsCartOpen} = useContext(CartContext);
	const navigate = useNavigate();
	const onClickHandler = () => {
		setIsCartOpen(false);
		navigate('/checkout');
	};
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} cartItem={cartItem} />
				))}
			</div>
			<Button onClick={onClickHandler}>Go To Checkout</Button>
		</div>
	);
};
export default CartDropdown;
