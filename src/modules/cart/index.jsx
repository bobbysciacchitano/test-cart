import { connect } from 'react-redux';
import { isEmpty, fetchItems, fetchTotal } from './reducer';
import Component from './component';

const mapStateToProps = (state) => ({
	isEmpty: isEmpty(state),
	items: fetchItems(state),
	total: fetchTotal(state),
});

export default connect(mapStateToProps)(Component);
