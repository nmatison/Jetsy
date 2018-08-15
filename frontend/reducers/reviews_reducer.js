import {RECEIVE_PRODUCT_REVIEWS, RECEIVE_PRODUCT_REVIEW, REMOVE_PRODUCT_REVIEW} from '../actions/review_actions';
import {merge} from 'lodash';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PRODUCT_REVIEWS:
      return merge({}, state, action.payload.reviews);
    case RECEIVE_PRODUCT_REVIEW:
      return merge({}, state, [action.payload.review.id]: action.payload.review);
    case REMOVE_PRODUCT_REVIEW:
      const newState = merge({}, state);
      delete newState[action.payload.reviewId]
      return newState;
    default:
    return state
  }
}

export default reviewsReducer;
