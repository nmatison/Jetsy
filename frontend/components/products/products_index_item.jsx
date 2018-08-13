import React from 'react';
import {Link} from 'react-router-dom'


class ProductsIndexItem extends React.Component{

  render() {
    const product = this.props.product
    const user = this.props.user

    if (!this.props.product || !this.props.user) return null;

    return (
      <Link className="inner-product-item-list" to={`/products/${product.id}`}>
        <img src={product.photoUrl} className="product-image"/>
        <div className="product-info">
          <li className="product-name">{product.product_name}</li>
          <li className="user-item">{user.username}</li>
          <li className="product-index-price">{`$${product.price}`}</li>
        </div>
      </Link>
    )
  }
}


export default ProductsIndexItem
