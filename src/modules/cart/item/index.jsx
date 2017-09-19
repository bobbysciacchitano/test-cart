import { connect } from 'react-redux';
import { fetchProductById } from 'cart/modules/products/reducer';
import Component from './component';

const mapStateToProps = (state, { productId }) => ({
	product: fetchProductById(state, productId),
});

export default connect(mapStateToProps)(Component);
