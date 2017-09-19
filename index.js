import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import store from 'cart/store';

import Application from 'cart/modules/application';

ReactDom.render(
	<Provider store={store}>
		<Application />
	</Provider>, 
document.getElementById('root'));
