import { INITIALIZE } from 'cart/modules/application/actions';

const initialState = [];

/**
 * Fetch product from store by identifier.
 * 
 * @param {Object} state 
 * @param {String} productId 
 * @return {Object}
 */
export const fetchProductById = (state, productId) => (
	state.products.find(({ id }) => id == productId)
);

/**
 * Returns an array of products.
 * 
 * @param {Object} state 
 * @return {Array}
 */
export const fetchProducts = (state) => (
	state.products
);

export default (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZE:
			return action.configuration.products;
		default:
			return state;
	}
};
