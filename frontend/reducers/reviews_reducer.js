import {RECEIVE_PRODUCT_REVIEWS} from '../actions/review_actions';
import {merge} from 'lodash';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PRODUCT_REVIEWS:
    debugger
    return merge({}, state, action.payload.reviews)
    default:
    return state
  }
}

export default reviewsReducer;
