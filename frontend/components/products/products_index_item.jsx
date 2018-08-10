import React from 'react';


class ProductsIndexItem extends React.Component{

  render() {
    const product = this.props.product
    const user = this.props.product.user

    return (
      <ul className="inner-product-item-list">
        <li className="product-name">{product.product_name}</li>
        <li className="user-item">{user.username}</li>
        <li className="product-price">{`$${product.price}`}</li>
      </ul>
    )
  }
}


export default ProductsIndexItem
