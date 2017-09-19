import React from 'react';

import Header from 'cart/modules/header';
import Cart from 'cart/modules/cart';
import Products from 'cart/modules/products';

export default ({ isReady, isError, error }) => {

	if (isReady) {
		return (
			<div>
				<Header />

				<div className='content'>
					<Cart />
					<Products />
				</div>
			</div>
		);
	}

	if (isError) {
		return <p>{error.message}</p>;
	}

	return <p>Loading...</p>;
};
