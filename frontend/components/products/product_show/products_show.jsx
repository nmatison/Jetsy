import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import ReviewIndex from '../../reviews/review_index';
import SideBar from './side_bar';


class ProductShow extends React.Component {
  
  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      quantity: null,
      shopping_cart_id: null,
      product_id: null
    }
  };

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.productId);
    this.props.fetchProducts();
    this.props.fetchProduct(this.props.match.params.productId);
   
  };

  editLink() {
    if (this.props.currentUserId === this.props.product.user_id){
      return <Link className="edit-link" to={`/products/${this.props.product.id}/edit`}>Edit Product</Link>
    }
  };

  quantitySelector() {
    let options = []
    for (var i = 1; i < 101; i++) {
      options.push(<option key = {i} value={i}>{`${i}`}</option>)
    };

    return (
      <select name="Quantity" defaultValue= "Select Quantity" className="quantity" onChange={(e) => this.setState({quantity: parseInt(e.target.value), product_id: this.props.product.id})}>
        <option disabled="true" value={"Select Quantity"}>{"Select Quantity"}</option>
        {options}
      </select>
    )
  };

  addToCart(e) {
    e.preventDefault()
    if (!this.props.currentUserId) {
      this.props.openModal("regtocontinue");
    } else {
      if (this.state.quantity) {
        this.state.shopping_cart_id = this.props.cartId
        this.props.createCartItem(this.state)
        window.alert(`${this.state.quantity} ${this.props.product.product_name}'s added to your cart!`)
      } else {
        window.alert("Please Select A Quantity")
      }
    };
  };

  clearErrors() {
    if (!this.props.errors) return null
    this.props.removeErrors()
  };


  render() {
    if (!this.props.product || !this.props.users[this.props.product.user_id] || !this.props.reviews || !this.props.products.length) return null;
    const user = this.props.users[this.props.product.user_id]
    const product = this.props.product;

    return (
    <div className="show-main" onClick={() => this.clearErrors()}>
        <div className="product-show-div">
          <div className="image-description">
            <img src={product.photoUrl} className="show-image-div" />
          </div>
          <div className="info-submit">
            <div className="product-information">
              <div className="title-price">
                <h1 className="product-title">{product.product_name}</h1>
                <h1 className="product-price">
                  Price: ${product.price}
                  /each
                </h1>
              </div>
            </div>
            <div className="user-description">
              <Link className="user-userpic" to={`/users/${user.id}`}>
                <div className="sold-text">
                  <h1 className="sold-by">Sold By:</h1>
                  <h1 className="seller-name">{user.username}</h1>
                </div>
                <div className="seller-pic" />
              </Link>
              <h1 className="product-description">
                Description:
                <br />
                <br />
                {product.description}
              </h1>
              <h1>
                {/* {this.props.product.categories.map(cat => {
                  return(
                    <h1>{cat.category_name}</h1>
                  )
                })} */}
              </h1>
            </div>
            {this.editLink()}
            <div className="quantity-cart">
              <label>
                Quantity:
                {this.quantitySelector()}
              </label>
            </div>
            <input type="submit" className="add-cart" value="Add To Cart" onClick={e => this.addToCart(e)} />
          </div>
        </div>
        <div className="review-more-items">
          <ReviewIndex 
            currentUserId={this.props.currentUserId} 
            reviews={this.props.reviews} 
            users={this.props.users} 
            product={product} 
            fetchReviews={this.props.fetchReviews} 
            errors={this.props.errors} />
          <SideBar user={user} />
        </div>
      </div>
    );
  };
};

export default withRouter(ProductShow);
