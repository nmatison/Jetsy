import React from 'react';

const CreateEditForm = ({ formType, review }) => {
  return (
  <form className="review-form-details">
    <ul className="review-details-list">
      <div className="review-image">
        <li className="review-reviewer">Your Review</li>
        <div className="reviewer-image"></div>
      </div>
      <div className="rating-form-title-body">
        <li className="review-form-rating">Rating: <input type="text" placeholder={review.rating} /></li>
        <div className="form-title-body">
          <li className="review-form-title">Title:  <input type="text" placeholder={review.title} /></li>
          <li className="review-form-body">Review: <textarea placeholder={review.body} rows="5" cols="50" /></li>
        </div>
      </div>
      <div className="rating-date">
        <li className="review-date">Today's Date</li>
      </div>
    </ul>
  </form>
)}


export default CreateEditForm;


// <div className="rating-date">
//   <li className="review-date">{date}</li>
// </div>
