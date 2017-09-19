import React from 'react';

export default ({ name, className = '', label }) => (
	<i className={`icon-${name} ${className}`} title={label || ''} />
);
