import React from 'react';

const ReviewFormItem = ({review, users}) => {
  const reviewer = users[review.user_id]
  return (
    <ul className="review details">
      <li className="review-reviewer">{reviewer.username}</li>
      <li className="review-rating">{review.rating}</li>
      <li className="review-title">{review.title}</li>
      <li className="review-body">{review.body}</li>
    </ul>
  )
}

export default ReviewFormItem;
