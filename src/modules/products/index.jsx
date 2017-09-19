import { connect } from 'react-redux';
import { fetchProducts } from './reducer';
import { addToCart, refreshTotal } from 'cart/modules/cart/actions';
import Component from './component';

const mapStateToProps = (state) => ({
	products: fetchProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
	addToCart: function (productId) {
		dispatch(addToCart(productId));
		dispatch(refreshTotal());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
