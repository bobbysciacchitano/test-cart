import { AUTHENTICATE_CLIENT } from 'cart/modules/login/actions';
import { fetchClientById } from 'cart/modules/clients/reducer';

const initialState = null;

/**
 * Fetch authenticated client Id.
 * 
 * @param {Object} state 
 * @return {String}
 */
export const activeClientId = (state) => (
	state.login
);

/**
 * Fetch authenticated client.
 * 
 * @param {Object} state 
 * @return {Object}
 */
export const fetchClient = (state) => (
	fetchClientById(state, activeClientId(state))
);

export default (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATE_CLIENT:
			return action.clientId;
		default:
			return state;
	}
};
