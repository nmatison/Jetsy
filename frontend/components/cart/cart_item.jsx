import React from 'react';
import { Link } from "react-router-dom";

const CartItem = ({ item, product, deleteCartItem }) => (
  <div className="inner-cart-list">
    <Link to={`products/${product.id}`} >
      <img className="cart-item-photo" src={product.photoUrl} />
    </Link>
    <div className="cart-item-details">
      <Link className="item-product-name" to={`products/${product.id}`} >{product.product_name}</Link>
      <li>{`Price: $${product.price.toLocaleString()}/each`}</li>
      <li>{`Quantity: ${item.quantity}`}</li>
      <li>{`Subtotal: $${(
        item.quantity * product.price
      ).toLocaleString()}`}</li>
    </div>
    <div className="remove-button">
      <button onClick={(e) => deleteCartItem(item.id)}>Remove From Cart</button>
    </div>
  </div>
);

export default CartItem;