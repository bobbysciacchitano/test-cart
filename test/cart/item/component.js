import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Item from 'cart/modules/cart/item/component';

test('Component is a list element', t => {
	const wrapper = shallow(<Item />);

	t.is(wrapper.type(), 'li');
});

test('Component renders as expected', t => {
	const product = {
		name: 'Test',
	};

	const wrapper = shallow(<Item product={product} quantity='5' total='50' />);

	t.is(wrapper.text(), '5 x Test: $ 50');
});
