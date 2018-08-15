import React from 'react';

const ReviewFormItem = ({review, users}) => {
  const reviewer = users[review.user_id]
  const splitDate = review.updated_at.slice(0, 10)
  const month =`${splitDate.slice(5, 8)}`
  const day =`${splitDate.slice(8, 10)}${splitDate.slice(4, 5)}`
  const year = `${splitDate.slice(0, 4)}`
  const date =`${month}${day}${year}`
  if (review.body === "") return null;
  return (
    <ul className="review-details">
      <div className="review-image">
        <li className="review-reviewer">Reviewed by: <br></br> {reviewer.username}</li>
        <div className="reviewer-image"></div>
      </div>
      <div className="rating-title-body">
        <li className="review-rating">Rating: {review.rating}/5</li>
        <div className="title-body">
          <li className="review-title">{review.title}</li>
          <li className="review-body">{review.body}</li>
        </div>
      </div>
      <div className="rating-date">
        <li className="review-date">{date}</li>
      </div>
    </ul>
  )
}

export default ReviewFormItem;
