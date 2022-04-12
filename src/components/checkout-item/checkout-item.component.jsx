import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { addItemToCart, removeItemFromCart, clearItemFromCart } =
		useContext(CartContext);
	const clearrItemHandler = () => {
		clearItemFromCart(cartItem);
	};
	const removeItemHandelr = () => {
		removeItemFromCart(cartItem);
	};
	const addItemHandler = () => {
		addItemToCart(cartItem);
	};

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={name} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={removeItemHandelr}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={addItemHandler}>
					&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-btn' onClick={clearrItemHandler}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;