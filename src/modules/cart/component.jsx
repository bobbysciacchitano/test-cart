import React from 'react';
import Item from './item';
import Total from './total';

const Content = ({ isEmpty, items = [], total }) => {

	if (!isEmpty) {
		return (
			<div>
				<ul>
					{items.map((item, index) => <Item key={index} {...item} />)}
				</ul>

				<Total total={total} />
			</div>
		);
	}

	return <p>Your cart is empty</p>;
};

export default (props) => (
	<div className='cart'>
		<h3>Cart</h3>

		<Content {...props} />
	</div>
);
