import React from 'react';
import { Link, withRouter } from "react-router-dom";

class CartItem extends React.Component {

 render() {
  const item = this.props.item 
  const product = this.props.product 
  const deleteCartItem = this.props.deleteCartItem
  
  return (
  <div className="inner-cart-list">
    <Link to={`products/${product.id}`} >
      <img className="cart-item-photo" src={product.photoUrl} />
    </Link>
    <div className="cart-item-details">
      <Link className="item-product-name" to={`products/${product.id}`} >{product.product_name}</Link>
      <li className="item-product-price">{`Price: $${product.price.toLocaleString()}/each`}</li>
      <li className="item-product-quantity">{`Quantity: ${item.quantity}`}</li>
      <li className="item-product-subtotal">{`Subtotal: $${(
        item.quantity * product.price
      ).toLocaleString()}`}</li>
    </div>
    <div className="remove-button">
      <button onClick={(e) => deleteCartItem(item.id).then(() => 
      {this.props.history.push("/cart")})}>
      Remove From Cart
      </button>
    </div>
  </div>
  )};

}

export default withRouter(CartItem);