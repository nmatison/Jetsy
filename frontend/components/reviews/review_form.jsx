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

    const averageRating = () => {
      let counter = 0;
      let total = 0;
      for (var i = 0; i < reviews.length; i++) {
        counter += this.props.reviews[i].rating
        total += 1
      }
      return `${(Math.floor(counter / total))}`
    }
    const numRatings = `${reviews.length}`

    return (
      <div className="review-div">
        <div className="reviews-stars">
          <p>Reviews ({numRatings})</p>
          <h1>Average Rating: {averageRating()}/5</h1>
        </div>
        {reviews}
      </div>
    )
  }
}

export default ReviewForm;
