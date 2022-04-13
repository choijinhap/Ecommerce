import { createContext, useReducer } from 'react';

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

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0,
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartTotal: 0,
});

export const CART_ACTION_TYPES = {
	SET_CART_ITEM: 'SET_CART_ITEM',
	SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

export const cartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEM:
			return {
				...state,
				...payload,
			};
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};
		default:
			throw new Error(`Unhandled type ${type}`);
	}
};
const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};
export const CartProvider = ({ children }) => {
	const [{ cartItems, isCartOpen, cartTotal, cartCount }, dispatch] =
		useReducer(cartReducer, INITIAL_STATE);
	const updateCartItemsReducer = (newCartItems) => {
		const newCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		const newTotal = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);
		dispatch({
			type: CART_ACTION_TYPES.SET_CART_ITEM,
			payload: {
				cartItems: newCartItems,
				cartCount: newCount,
				cartTotal: newTotal,
			},
		});
	};
	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemFromCart = (cartItemToRemove) => {
		const newCartItems = removeCartItem(cartItems, cartItemToRemove);
		updateCartItemsReducer(newCartItems);
	};

	const clearItemFromCart = (cartItemToClear) => {
		const newCartItems = clearCartItem(cartItems, cartItemToClear);
		updateCartItemsReducer(newCartItems);
	};
	const setIsCartOpen = (bool) => {
		dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN ,payload:bool});
	};
	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		cartCount,
		removeItemFromCart,
		clearItemFromCart,
		cartTotal,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
