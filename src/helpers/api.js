
/**
 * Inspect exception to determine whether is Http/Axios error.
 * 
 * @param {Error} error
 * @param {Function} callback
 */
export const isHttpError = (error, callback) => {
	if (error.response) {
		return callback(error.response);
	}

	throw error;
};

/**
 * Simple helper to format error message objects.
 * 
 * @param {String} message
 * @return {Object}
 */
export const prepareError = (message) => (
	{ message }
);
