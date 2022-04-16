import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../button/button.component';
import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from './cart-dropdown.styles.jsx';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onClickHandler = () => {
		dispatch(setIsCartOpen(false));
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
