import { mergeStates } from 'cart/helpers/reducer';
import { AUTHENTICATE_CLIENT } from 'cart/modules/login/actions';
import { ADD_PRODUCT_TO_CART } from '../actions';

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT_TO_CART:
			return mergeStates(state, { [action.productId]: action.item });
		case AUTHENTICATE_CLIENT:
			return initialState;
		default:
			return state;
	}
};
