import { useContext } from 'react';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

import {CartDropdownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles.jsx';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
	const { cartItems, setIsCartOpen } = useContext(CartContext);
	const navigate = useNavigate();
	const onClickHandler = () => {
		setIsCartOpen(false);
		navigate('/checkout');
	};
	return (
		<CartDropdownContainer>
			{cartItems.length ? (
				<CartItems>
					{cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))}
				</CartItems>
			) : (
				<EmptyMessage>장바구니가 비었습니다.</EmptyMessage>
			)}

			<Button onClick={onClickHandler}>Checkout</Button>
		</CartDropdownContainer>
	);
};
export default CartDropdown;
