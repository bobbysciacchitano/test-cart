import React from 'react';
import Select from 'cart/components/select';

export default ({ clients, activeClient, selectClient }) => (
	<div className='header'>
		<div className='branding'>
			<h1>SEEK Shopping Cart</h1>
		</div>

		<div className='login'>
			Login As: <Select value={activeClient} options={clients} defaultValue={true} onChange={(name, value) => selectClient(value)} optionKey='name' />
		</div>
	</div>
);
