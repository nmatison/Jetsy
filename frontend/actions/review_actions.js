import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_PRODUCT_REVIEWS = "RECEIVE_PRODUCT_REVIEWS";

export const fetchReviews = (productId) => dispatch => (
  ReviewApiUtil.fetchReviews(productId).then((payload) => dispatch(receiveProductReviews(payload)))
);

const receiveProductReviews = (payload) => ({
  type: RECEIVE_PRODUCT_REVIEWS,
  payload
})
