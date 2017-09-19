import { createStore, compose, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

let composedMiddleware;

if (window.devToolsExtension) {
	composedMiddleware = compose(applyMiddleware(routerMiddleware(browserHistory), thunk), window.devToolsExtension && window.devToolsExtension());
} else {
	composedMiddleware = compose(applyMiddleware(routerMiddleware(browserHistory), thunk));
}

export default createStore(reducer, composedMiddleware);
