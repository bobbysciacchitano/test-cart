import Axios from 'axios';
import { isHttpError, prepareError } from 'cart/helpers/api';

export const IS_INITIALIZING = 'IS_INITIALIZING';
export const INITIALIZE = 'INITIALIZE';
export const INITIALIZE_ERROR = 'INITIALIZE_ERROR';

/**
 * Initialize application by fetching configuration
 * 
 * @return {Void}
 */
export const initialize = () => (dispatch) => {

	dispatch({
		type: IS_INITIALIZING,
	});

	Axios.get('/environment.json').then(({ data }) => dispatch({
		type: INITIALIZE,
		configuration: data,
	})).catch((error) => isHttpError(error, () => dispatch({
		type: INITIALIZE_ERROR,
		error: prepareError('Could not load application configuration'),
	})));
};
