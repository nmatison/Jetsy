import {fetchProducts, fetchProduct, deleteProduct} from '../../actions/product_actions';
import ProductShow from './products_show';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchReviews, createReview, updateReview, deleteReview} from '../../actions/review_actions'

const mapStateToProps = (state, ownProps) => {
  return ({product: state.entities.products[ownProps.match.params.productId],
  users: state.entities.users,
  currentUserId: state.session.id,
  reviews: Object.values(state.entities.reviews).filter((review) => review.product_id == ownProps.match.params.productId),
  errors: state.errors.reviews
  })
}

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  fetchReviews: (productId) => dispatch(fetchReviews(productId)),
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  deleteProduct: (id) => dispatch(deleteProduct(id))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);
