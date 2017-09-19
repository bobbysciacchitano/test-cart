import { connect } from 'react-redux';
import { fetchClients } from 'cart/modules/clients/reducer';
import { selectClient } from 'cart/modules/login/actions';
import { activeClientId } from 'cart/modules/login/reducer';
import Component from './component';

const mapStateToProps = (state) => ({
	clients: fetchClients(state),
	activeClient: activeClientId(state),
});

const mapDispatchToProps = {
	selectClient,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
