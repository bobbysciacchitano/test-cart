import test from 'ava';
import { selectClient } from 'cart/modules/login/actions';

test('Authenticate client action expected type and clientId', t => {

	const action = selectClient(1);

	const expected = {
		type: 'AUTHENTICATE_CLIENT',
		clientId: 1,
	};

	t.deepEqual(action, expected);
});
