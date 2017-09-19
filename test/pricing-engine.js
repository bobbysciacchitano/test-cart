import test from 'ava';

import {
	updateItemQuantity,
	updateItemTotal,
	calculateTotal } from 'cart/helpers/cart';

test('Update item quantity increments value', t => {

	const quantity = 1;

	const updated = updateItemQuantity(quantity);
	
	t.is(updated, 2);
});

test('Can decrement value from item quantity', t => {

	const quantity = 2;

	const updated = updateItemQuantity(quantity, -1);
	
	t.is(updated, 1);
});

test('Can calculate grand total from items', t => {

	const items = [
		{ total: 50 },
		{ total: 50 },
	];

	const total = calculateTotal(items);
	
	t.is(total, 100);
});

test('Calculate item total when product does not have a rule', t => {
	const rules    = {};
	const quantity = 2;
	const product  = { price: 50 };

	const total = updateItemTotal(rules, quantity, product);
	
	t.is(total, 100);
});

test('Calculate item total when product has a price substitution rule', t => {
	const rules = {
		'test': {
			'type': 'price',
			'price': 25,
		},
	};

	const quantity = 2;

	const product = {
		id: 'test',
		price: 50,
	};

	const total = updateItemTotal(rules, quantity, product);
	
	t.is(total, 50);
});

test('Calculate item total when product has volume discount rule', t => {
	const rules = {
		'test': {
			type: 'reduction',
			order: 3,
			price: 25,
		},
	};

	const quantity = 3;

	const product = {
		id: 'test',
		price: 50,
	};

	const total = updateItemTotal(rules, quantity, product);
	
	t.is(total, 75);
});

test('Calculate item total when product has volume free rule', t => {
	const rules = {
		'test': {
			type: 'free',
			order: 3,
			free: 1,
		},
	};

	const quantity = 3;

	const product = {
		id: 'test',
		price: 50,
	};

	const total = updateItemTotal(rules, quantity, product);
	
	t.is(total, 100);
});
