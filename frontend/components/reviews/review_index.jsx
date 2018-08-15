import React from 'react';
import ReviewFormItem from './review_form_item';
import CreateEditForm from './create_review_form';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props);
    this.renderForm = this.renderForm.bind(this);
  }

  renderForm(type) {
    const reviewed = this.props.reviews.find((review) => this.props.currentUserId === review.user_id)
    debugger;
    if (!this.props.currentUserId) return null;
    if (!reviewed) {
      var review = {user_id: this.props.currentUserId,
        product_id: this.props.product.id,
        title: "",
        body: "",
        rating: null}
      } else {
        var review = reviewed;
      }
      return <CreateEditForm
        review={review}
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

    return (
      <div className="review-div">
        <div className="reviews-stars">
          <div className="reviews-numRatings">
            <p>Reviews ({numRatings})</p>
          </div>
          <h1>Average Rating: {averageRating()}/5</h1>
        </div>
        {this.renderForm("Add a Review")}
        {reviews}
      </div>
    )
  }
}

export default ReviewIndex;
