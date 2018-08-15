export const fetchReviews = (productId) => (
  $.ajax({
    method: 'get',
    url: `/api/products/${productId}/reviews`
  })
);

export const createReview = (productId, review) => {
  return $.ajax({
    method: 'post',
    url: `/api/products/${productId}/reviews`,
    data: {review}
  })
};

export const updateReview = (productId, review) => (
  $.ajax({
    method: 'patch',
    url: `/api/products/${productId}/reviews/${review.id}`,
    data: {review}
  })
);

export const deleteReview = (productId, id) => (
  $.ajax({
    method: 'delete',
    url: `/api/products/${productId}/reviews/${id}`,
  })
);
