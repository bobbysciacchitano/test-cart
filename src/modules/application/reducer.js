import { IS_INITIALIZING, INITIALIZE, INITIALIZE_ERROR } from './actions';

const initialState = {};

/**
 * Return whether application is ready to use.
 * 
 * @param {Object} state
 * @return {Boolean}
 */
export const isReady = (state) => (
	state.application.isReady
);

/**
 * Return initial application error.
 * 
 * @param {Object} state
 * @return {Boolean}
 */
export const isError = (state) => (
	state.application.isError
);

/**
 * Get initialization error message.
 * 
 * @param {Object} state
 * @return {Object}
 */
export const error = (state) => (
	state.application.error
);

export default (state = initialState, action) => {
	switch (action.type) {
		case IS_INITIALIZING:
			return initialState;
		case INITIALIZE:
			return { isReady: true };
		case INITIALIZE_ERROR:
			return { isError: true, error: action.error };
		default:
			return state;
	}
};
