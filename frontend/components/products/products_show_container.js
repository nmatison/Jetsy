import {fetchProducts, fetchProduct, deleteProduct} from '../../actions/product_actions';
import ProductShow from './products_show';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return ({product: state.entities.products[ownProps.match.params.productId],
  user: Object.values(state.entities.users)[0]})
}

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  deleteProduct: (id) => dispatch(deleteProduct(id))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);
