import { UPDATE_CART_TOTAL } from '../actions';
import { AUTHENTICATE_CLIENT } from 'cart/modules/login/actions';

const initialState = 0;

export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_CART_TOTAL:
			return action.total;
		case AUTHENTICATE_CLIENT:
			return initialState;
		default:
			return state;
	}
};
