import React from 'react';
import {Link} from 'react-router-dom';
import UserShowItems from './user_show_items';

class UserShow extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchProducts();
  }

  featureDiv() {
    if (this.props.sellerProducts.length < 6) return null;
    const products = this.props.sellerProducts.slice(0, 6);
    return (
      <div className="feature-outer-div">
        <ul className="all-image-links">
          <h1>Reviews</h1>
          <h1>Updates</h1>
          <h1>About</h1>
          <h1>Policies</h1>
          <h1>More</h1>
        </ul>
        <div className="everything">
          <div className="all-images">
              <Link className="featured" to={`/products/${products[0].id}`}><img className="featured-image" src={products[0].photoUrl} />
                <li className="product-name">{products[0].product_name}</li>
                <li className="product-price">${products[0].price}</li>
              </Link>
            <div className="four-images">
              <div className="first-two-items">
                <Link to={`/products/${products[1].id}`} className="single-image">
                  <img className="product-image-1" src={products[1].photoUrl} />
                    <li className="product-name">{products[1].product_name}</li>
                    <li className="product-price">${products[1].price}</li>
                  </Link>
                <Link to={`/products/${products[2].id}`} className="single-image">
                  <img className="product-image-1" src={products[2].photoUrl} />
                    <li className="product-name">{products[2].product_name}</li>
                    <li className="product-price">${products[2].price}</li>
                  </Link>
              </div>
              <div className="last-two-items">
                <Link to={`/products/${products[3].id}`} className="single-image">
                  <img className="product-image-1" src={products[3].photoUrl} />
                    <li className="product-name">{products[3].product_name}</li>
                    <li className="product-price">${products[3].price}</li>
                  </Link>
                <Link to={`/products/${products[4].id}`} className="single-image">
                  <img className="product-image-1" src={products[4].photoUrl} />
                    <li className="product-name">{products[4].product_name}</li>
                    <li className="product-price">${products[4].price}</li>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    if (!this.props.user || !this.props.sellerProducts) return null;
    const welcome = `${this.props.user.username}'s products:`
    const sellerProductItems = this.props.sellerProducts.map((product) => <UserShowItems key={product.id} product={product} />);
    const totalProducts = this.props.sellerProducts.length;

    return (
      <div className="seller-show-div">
        <div className="seller-title-and-picture">
          <div className="seller-profile-picture"></div>
          <div className="welcome-total">
            <h1 className="welcome">{welcome}</h1>
            <h1 className="total">total products: {totalProducts}</h1>
          </div>
        </div>
        {this.featureDiv()}
        <div className="product-index-items">{sellerProductItems}</div>
      </div>
    )
  }
}


export default UserShow;
