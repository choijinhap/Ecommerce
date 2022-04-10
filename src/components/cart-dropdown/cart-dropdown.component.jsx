import { useContext } from 'react';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
                {cartItems.map(cartItem=>(<CartItem key={cartItem.id} cartItem={cartItem}/>))}
            </div>
			<Button>Go To Checkout</Button>
		</div>
	);
};
export default CartDropdown;
