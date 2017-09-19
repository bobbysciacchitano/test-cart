export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const UPDATE_CART_TOTAL = 'UPDATE_CART_TOTAL';

import {
	updateItemQuantity,
	updateItemTotal,
	calculateTotal } from 'cart/helpers/cart';

import { fetchProductById } from 'cart/modules/products/reducer';
import { fetchItems, fetchItemById } from 'cart/modules/cart/reducer';
import { fetchClient } from 'cart/modules/login/reducer';

/**
 * Add product to cart.
 * 
 * @param {String} productId 
 * @return {Void}
 */
export const addToCart = (productId) => (dispatch, getState) => {
	const state = getState();

	const client   = fetchClient(state);
	const product  = fetchProductById(state, productId);
	const item     = fetchItemById(state, productId);

	const quantity = updateItemQuantity(item.quantity);
	const total    = updateItemTotal(client.discounts, quantity, product);

	dispatch({
		type: ADD_PRODUCT_TO_CART,
		productId,
		item: {
			productId,
			quantity,
			total,
		},
	});
};

/**
 * Recalculate order total.
 * 
 * @return {Void}
 */
export const refreshTotal = () => (dispatch, getState) => {

	const state = getState();
	const items = fetchItems(state);
	const total = calculateTotal(items);

	dispatch({
		type: UPDATE_CART_TOTAL,
		total,
	});
};
