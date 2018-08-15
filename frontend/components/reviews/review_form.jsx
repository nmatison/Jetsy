import React from 'react';
import ReviewFormItem from './review_form_item';

class ReviewForm extends React.Component {


  render() {
    if (!this.props.reviews) return null;
    const reviews = this.props.reviews.map((review) => <ReviewFormItem
      review={review}
      users={this.props.users}
      key={review.id}
    />);

    return (
      <div className="review-div">
        <p>Hello?</p>
        {reviews}
      </div>
    )
  }
}

export default ReviewForm;
