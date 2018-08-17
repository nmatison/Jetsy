import React from 'react';
import {Link} from 'react-router-dom'
import ReviewIndex from '../reviews/review_index';


class ProductShow extends React.Component {

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.productId);
    this.props.fetchProduct(this.props.match.params.productId);
  }

  editLink() {
    if (this.props.currentUserId === this.props.product.user_id){
      return <Link className="edit-link" to={`/products/${this.props.product.id}/edit`}>Edit Product</Link>
    }
  }

  quantitySelector() {
    let options = []
    for (var i = 1; i < 101; i++) {
      options.push(<option key = {i} value={`${i}`}>{`${i}`}</option>)
    }

    return (
      <select name="Quantity" className="quantity">
        {options}
      </select>
    )
  }

  clearErrors() {
    if (!this.props.errors) return null
    this.props.removeErrors()
  }


  render() {
    if (!this.props.product || !this.props.users || !this.props.reviews) return null;
    const product = this.props.product;
    const user = this.props.users[this.props.product.user_id]
    return(
      <div className="show-main" onClick={() => this.clearErrors()}>
        <div className="product-show-div">
          <div className="image-description">
            <img src={product.photoUrl} className="show-image-div" />
          </div>
          <div className="info-submit">
            <div className="product-information">
              <div className="title-price">
                <h1 className="product-title">{product.product_name}</h1>
                <h1 className="product-price">Price: ${product.price}/each</h1>
              </div>
            </div>
            <div className="user-description">
              <Link className="user-userpic"to={`/users/${user.id}`}>
                <div className="sold-text">
                  <h1 className="sold-by">Sold By:</h1>
                  <h1 className="seller-name">{user.username}</h1>
                </div>
                <div className="seller-pic">
                </div>
              </Link>
              <h1 className="product-description">Description:
                <br></br>
                <br></br>
                {product.description}
              </h1>
            </div>
            {this.editLink()}
            <div className="quantity-cart">
              <label>Quantity:
                {this.quantitySelector()}
              </label>
            </div>
            <input type="submit" className="add-cart" value="Add To Cart" />
          </div>
        </div>
        <ReviewIndex
          currentUserId={this.props.currentUserId}
          reviews={this.props.reviews}
          users={this.props.users}
          product={product}
          fetchReviews={this.props.fetchReviews}
          createReview={this.props.createReview}
          updateReview={this.props.updateReview}
          deleteReview={this.props.deleteReview}
          errors={this.props.errors} />
      </div>
    )
  }
}

export default ProductShow;
