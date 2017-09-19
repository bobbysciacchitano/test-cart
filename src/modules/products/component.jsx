import React from 'react';
import Product from './product';

export default ({ products = [], addToCart }) => (
	<div>
		{products.map((product, index) => <Product key={index} {...product} addToCart={addToCart} />)}
	</div>
);
