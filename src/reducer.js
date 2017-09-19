import { combineReducers } from 'redux';

import application from 'cart/modules/application/reducer';
import cart from 'cart/modules/cart/reducer';
import clients from 'cart/modules/clients/reducer';
import login from 'cart/modules/login/reducer';
import products from 'cart/modules/products/reducer';

export default combineReducers({
	application,
	cart,
	clients,
	login,
	products,
});
