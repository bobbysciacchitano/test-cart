import React from 'react';
import { connect } from 'react-redux';
import { initialize } from './actions';
import { isReady, isError, error } from './reducer';
import Component from './component';

const ApplicationController = React.createClass({

	componentDidMount: function () {
		this.props.initialize();
	},

	render: function () {
		return <Component {...this.props} />;
	},

});

const mapStateToProps = (state) => ({
	isReady: isReady(state),
	isError: isError(state),
	error: error(state),
});

const mapDispatchToProps = {
	initialize,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationController);