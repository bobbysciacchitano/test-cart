import test from 'ava';

import { activeClientId, fetchClient } from 'cart/modules/login/reducer';
import reducer from 'cart/modules/login/reducer';

test('Can fetch authenticated client Id', t => {

	const state = { login: 1 };

	const clientId = activeClientId(state);

	t.is(clientId, 1);
});

test('Can fetch authenticated client object', t => {

	const expected = {
		id: 1,
		name: 'Test',
	};

	const state = { login: 1, clients: [
		expected,
	] };

	const client = fetchClient(state);

	t.deepEqual(client, expected);
});

test('Can set authenticated client id', t => {

	const action = ({
		type: 'AUTHENTICATE_CLIENT',
		clientId: 1,
	});

	const state = reducer(undefined, action);

	t.is(state, 1);
});
