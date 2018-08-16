import React from 'react';
import {withRouter} from 'react-router';

class CreateEditForm extends React.Component {

  constructor(props) {
    super(props)
    this.state=this.props.review
    this.update=this.update.bind(this)
    this.handleInput=this.handle
  }

  deleteButton() {
    if (!this.state.id) return null
    return <input
      className="review-delete"
      type="submit"
      value="Delete Review"
      onClick={() => this.props.deleteReview(this.state.id).then(() => this.setState(this.props.review))} />
 }

  createUpdateButton() {
    let buttonName = ""
    let action = ""
    if (!this.state.id) {
      buttonName = "Submit Review";
      action = this.props.createReview;
    } else {
      buttonName = "Update Review";
      action = this.props.updateReview;
    }

    return <input
      className="review-create-update"
      type="submit"
      value={buttonName}
      onClick={() => action(this.state).then(()=> this.setState(this.props.review))} />
  }

 update(field){
   return (e) => {
     this.setState({[field]: e.target.value})
   }
 }

  render() {
    return (
    <form className="review-form-details">
      <ul className="review-details-list">
        <div className="review-image">
          <li className="review-reviewer">Your Review</li>
          <div className="reviewer-image"></div>
          {this.deleteButton()}
        </div>
        <div className="rating-form-title-body">
          <li className="review-form-rating">Rating: <input
            type="number"
            onChange={this.update('rating')}
            value={this.state.rating}
            min="1"
            max="5" />
          </li>
          <div className="form-title-body">
            <li className="review-form-title">Title:  <input
              type="text"
              onChange={this.update('title')}
              value={this.state.title} />
            </li>
            <li className="review-form-body">Review: <textarea
              value={this.state.body}
              onChange={this.update('body')}
              rows="5" cols="50" />
            </li>
          </div>
        </div>
        <div className="rating-date">
          <li className="review-date">Today's Date</li>
          {this.createUpdateButton()}
        </div>
      </ul>
    </form>
  )}
}
export default withRouter(CreateEditForm);
