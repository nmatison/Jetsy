export const fetchReviews = (productId) => (
  $.ajax({
    method: 'get',
    url: `/api/products/${productId}/reviews`
  })
);

export const createReview = (review) => {
  return $.ajax({
    method: 'post',
    url: `/api/products/${review.product_id}/reviews`,
    data: {review}
  })
};

export const updateReview = (review) => (
  $.ajax({
    method: 'patch',
    url: `/api/products/${review.product_id}/reviews/${review.id}`,
    data: {review}
  })
);

export const deleteReview = (reviewId) => (
  $.ajax({
    method: 'delete',
    url: `/api/reviews/${reviewId}`,
  })
);
