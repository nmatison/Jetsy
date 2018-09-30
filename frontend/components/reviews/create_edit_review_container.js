import CreateEditForm from './create_review_form';
import {
  createReview,
  updateReview,
  deleteReview,
} from '../../actions/review_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateEditForm);
