import {fetchProducts, fetchProduct, deleteProduct} from '../../actions/product_actions';
import ProductShow from './products_show';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchReviews, createReview, updateReview, deleteReview, removeErrors} from '../../actions/review_actions'

const mapStateToProps = (state, ownProps) => {
  return ({product: state.entities.products[ownProps.match.params.productId],
  users: state.entities.users,
  currentUserId: state.session.id,
  reviews: Object.values(state.entities.reviews).filter((review) => review.product_id == ownProps.match.params.productId),
  errors: state.errors.reviews,
  products: Object.values(state.entities.products)
  })
}

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  fetchProducts: () => dispatch(fetchProducts()),
  fetchReviews: (productId) => dispatch(fetchReviews(productId)),
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  removeErrors: () => dispatch(removeErrors())
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);
