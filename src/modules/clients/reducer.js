import { INITIALIZE } from 'cart/modules/application/actions';

const initialState = [];

/**
 * Fetch clients by identifier.
 * 
 * @param {Object} state 
 * @param {String} clientId 
 * @return {Object}
 */
export const fetchClientById = (state, clientId) => (
	state.clients.find(({ id }) => id == clientId) || {}
);

/**
 * Returns an array of clients.
 * 
 * @param {Object} state 
 * @return {Array}
 */
export const fetchClients = (state) => (
	state.clients
);

export default (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZE:
			return action.configuration.clients;
		default:
			return state;
	}
};
