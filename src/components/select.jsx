import React from 'react';

export default React.createClass({

	updateField: function (e) {
		const value = e.target.value;

		this.props.onChange(this.props.name, value);
	},

	componentWillMount: function () {
		if (!this.props.value && (this.props.options && this.props.options.length > 0) && !this.props.defaultValue) {
			this.props.onChange(this.props.name, this.props.options[0].id);
		}
	},

	render: function () {
		const { name, className, value = '', options = [], defaultValue = false, optionKey = 'label' } = this.props;

		return (
			<select name={name} className={className} value={value || ''} onChange={this.updateField}>
				{defaultValue && <option value=''></option>}
				{options.map((option) => <option key={option.id} value={option.id}>{option[optionKey]}</option>)}
			</select>
		);
	},

});
