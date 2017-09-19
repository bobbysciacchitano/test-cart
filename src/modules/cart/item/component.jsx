import React from 'react';

export default ({ product = {}, quantity, total }) => (
	<li>{quantity} x {product.name}: $ {total}</li>
);
