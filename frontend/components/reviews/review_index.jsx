import React from 'react';
import ReviewFormItem from './review_form_item';
import CreateEditForm from './create_review_form';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props);
    this.renderForm = this.renderForm.bind(this);
  }

  renderForm() {
    const reviewed = this.props.reviews.find((review) => this.props.currentUserId === review.user_id)
    let review = ""
    if (!this.props.currentUserId || this.props.product.user_id === this.props.currentUserId) return null;
    if (!reviewed) {
      review = {id: null,
        user_id: this.props.currentUserId,
        product_id: this.props.product.id,
        title: "",
        body: "",
        rating: ""}
      } else {
        review = reviewed;
      }

      return <CreateEditForm
        review={review}
        createReview={this.props.createReview}
        updateReview={this.props.updateReview}
        deleteReview={this.props.deleteReview}
        errors={this.props.errors}
        />
    }

  render() {
    if (!this.props.reviews) return null;
    const reviews = this.props.reviews.reverse().map((review) => <ReviewFormItem
      review={review}
      users={this.props.users}
      currentUserId={this.props.currentUserId}
      key={review.id}
    />);


    const averageRating = () => {
      if (this.props.reviews.length === 0) return `0`
      let counter = 0;
      let total = 0;
      for (var i = 0; i < this.props.reviews.length; i++) {
        counter += this.props.reviews[i].rating;
        total += 1;
      }
      return `${(Math.round(counter / total))}`;
    }


    const numRatings = `${reviews.length}`;

    const errors = () => (
      this.props.errors.map((error, i) => <li className="review-single-error" key={i}>{error}</li>)
    );

    return (
      <div className="review-div">
        <div className="reviews-stars">
          <div className="reviews-numRatings">
            <p>Reviews ({numRatings})</p>
          </div>
          <h1>Average Rating: {averageRating()}/5</h1>
          <div className="review-many-errors">{errors()}</div>
        </div>
        {this.renderForm()}
        {reviews}
      </div>
    )
  }
}

export default ReviewIndex;
