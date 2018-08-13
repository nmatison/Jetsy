import React from 'react';
import {Link} from 'react-router-dom'


class ProductsIndexItem extends React.Component{

  render() {
    const product = this.props.product
    const user = this.props.user

    if (!this.props.product || !this.props.user) return null;

    return (
      <ul className="inner-product-item-list">
        <div className="product-image">Product Image Will Go Here</div>
        <div className="product-info">
          <li className="product-name"><Link to={`/products/${product.id}`}>{product.product_name}</Link></li>
          <li className="user-item">{user.username}</li>
          <li className="product-price">{`$${product.price}`}</li>
        </div>
      </ul>
    )
  }
}


export default ProductsIndexItem
