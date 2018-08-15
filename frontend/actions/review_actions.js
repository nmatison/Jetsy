import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_PRODUCT_REVIEWS = "RECEIVE_PRODUCT_REVIEWS";
export const RECEIVE_PRODUCT_REVIEW = "RECEIVE_PRODUCT_REVIEW";
export const REMOVE_PRODUCT_REVIEW = "REMOVE_PRODUCT_REVIEW";

export const fetchReviews = (productId) => dispatch => (
  ReviewApiUtil.fetchReviews(productId).then((payload) => dispatch(receiveProductReviews(payload)))
);

export const createReview = (review) => dispatch => (
  ReviewApiUtil.createReview(review).then((payload) => dispatch(receiveProductReview(payload)))
);

export const updateReview = (review) => dispatch => (
  ReviewApiUtil.updateReview(review).then((payload) => dispatch(receiveProductReview(payload)))
);

export const deleteReview = (reviewId) => dispatch => (
  ReviewApiUtil.deleteReview(reviewId).then((payload) => dispatch(removeProductReview(payload)))
);

const receiveProductReviews = (payload) => ({
  type: RECEIVE_PRODUCT_REVIEWS,
  payload
});

const receiveProductReview = (payload) => ({
  type: RECEIVE_PRODUCT_REVIEW,
  payload
});

const removeProductReview = (payload) => ({
  type: REMOVE_PRODUCT_REVIEW,
  reviewId: payload.review.id
});
