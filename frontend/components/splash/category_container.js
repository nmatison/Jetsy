import { connect } from 'react-redux';
import Category from './category';
import { searchProducts } from '../../actions/search_actions';

const mapDispatchToProps = dispatch => ({
  searchProducts: (queryString) => dispatch(searchProducts(queryString))
});

export default connect(
  null,
  mapDispatchToProps
)(Category);