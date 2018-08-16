import SearchIndex from './search_index';
import {connect} from 'react-redux';
import {searchProducts} from '../../actions/search_actions';

const mapStateToProps = state => ({
  products: Object.values(state.entities.products),
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  searchProducts: (query_string) => dispatch(searchProducts(query_string))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
