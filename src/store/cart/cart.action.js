import { createAction } from '../../utils/reducer/actionCreator';
import { CART_ACTION_TYPES } from './cart.type';

const clearCartItem = (cartItems, cartItemToClear) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	const existingItem = cartItems.find(
		(item) => item.id === cartItemToRemove.id
	);

	if (existingItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const addCartItem = (cartItems, productToAdd) => {
	const existingItem = cartItems.find((item) => item.id === productToAdd.id);
	if (existingItem) {
		return cartItems.map((item) =>
			item.id === productToAdd.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM,newCartItems);
};

export const removeItemFromCart = (cartItems,cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM,newCartItems);
};

export const clearItemFromCart = (cartItems,cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM,newCartItems);
};


export const setIsCartOpen = (boolean) =>
	createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
