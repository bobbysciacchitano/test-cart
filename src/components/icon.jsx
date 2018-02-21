import React from 'react';

const Icon = ({ name, className = '', label }) => (
	<i className={`icon-${name} ${className}`} title={label || ''} />
);

export default Icon;