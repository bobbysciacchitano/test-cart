export const AUTHENTICATE_CLIENT = 'AUTHENTICATE_CLIENT';

/**
 * "Authenticate" client session.
 * 
 * @param {String} clientId
 * @return {Object}
 */
export const selectClient = (clientId) => ({
	type: AUTHENTICATE_CLIENT,
	clientId,
});
