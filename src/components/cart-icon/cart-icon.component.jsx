import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {ShoppingIcon,CartIconContainer,ItemCount} from './cart-icon.styles.jsx';

const CartIcon = () => {
	const { setIsCartOpen, cartCount } = useContext(CartContext);
	const toggleIsCartOpen = () => {
		setIsCartOpen((cur) => !cur);
	};

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon  />
			<ItemCount >{cartCount}</ItemCount>
		</CartIconContainer>
	);
};
export default CartIcon;
