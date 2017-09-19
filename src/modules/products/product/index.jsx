import React from 'react';

export default ({ id, name, description, price, addToCart }) => (
	<div className='product'>
		<h3>{name} $ {price}</h3>

		<p>{description}</p>

		<p><button onClick={() => addToCart(id)}>Add To Cart</button></p>
	</div>
);
