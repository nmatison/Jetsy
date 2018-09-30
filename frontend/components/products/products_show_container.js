import ProductShow from './products_show';
import { connect } from 'react-redux';
import { 
  fetchProducts, 
  fetchProduct, 
  deleteProduct } from '../../actions/product_actions';
import { 
  fetchReviews, removeErrors } from '../../actions/review_actions'
import { createCartItem } from '../../actions/cart_item_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return ({product: state.entities.products[ownProps.match.params.productId],
  users: state.entities.users,
  cartId: state.entities.cart.id,
  currentUserId: state.session.id,
  reviews: Object.values(state.entities.reviews).filter((review) => review.product_id == ownProps.match.params.productId),
  errors: state.errors.reviews,
  products: Object.values(state.entities.products)
  })
}

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  fetchProducts: () => dispatch(fetchProducts()),
  createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
  fetchReviews: (productId) => dispatch(fetchReviews(productId)),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  openModal: (type) => dispatch(openModal(type)),
  removeErrors: () => dispatch(removeErrors())
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);
