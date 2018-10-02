import { connect } from 'react-redux';
import ProductsIndex from './products_index'
import { fetchProducts } from '../../../actions/product_actions'

const mapStateToProps = state => ({
  products: Object.values(state.entities.products),
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsIndex);
