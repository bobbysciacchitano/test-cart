import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

let composedMiddleware;

if (window.devToolsExtension) {
	composedMiddleware = compose(applyMiddleware(thunk), window.devToolsExtension && window.devToolsExtension());
} else {
	composedMiddleware = compose(applyMiddleware(thunk));
}

export default createStore(reducer, composedMiddleware);
