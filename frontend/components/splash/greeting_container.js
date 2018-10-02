import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { openModal} from '../../actions/modal_actions';
import { searchProducts } from '../../actions/search_actions';


const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  searchProducts: (query_string) => dispatch(searchProducts(query_string))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
