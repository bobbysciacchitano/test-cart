
/**
 * Simple helper to merge two object states and return new object.
 * 
 * @param {Object} currentState 
 * @param {Object} updatedState 
 * @return {Object}
 */
export const mergeStates = (currentState, updatedState) => (
	Object.assign({}, currentState, updatedState)
);
