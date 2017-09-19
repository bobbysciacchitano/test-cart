import { combineReducers } from 'redux';
import { values } from 'lodash';

import items from './items/reducer';
import total from './total/reducer';

/**
 * Fetch item in cart by product Identifier.
 * 
 * @param {Object} state 
 * @param {String} productId 
 * @return {Object}
 */
export const fetchItemById = (state, productId) => (
	state.cart.items[productId] || {}
);

/**
 * Fetch all items in cart.
 * 
 * @param {Object} state 
 * @return {Array}
 */
export const fetchItems = (state) => (
	values(state.cart.items)
);

/**
 * Return cart total.
 * 
 * @param {Object} state
 * @return {Number}
 */
export const fetchTotal = (state) => (
	state.cart.total
);

/**
 * Return whether the cart is currently empty.
 * 
 * @param {Object} state 
 * @return {Boolean}
 */
export const isEmpty = (state) => (
	values(state.cart.items).length == 0
);

export default combineReducers({
	items,
	total,
});
