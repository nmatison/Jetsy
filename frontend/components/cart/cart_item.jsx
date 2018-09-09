import React from 'react';
import { Link } from "react-router-dom";

const CartItem = ({ item, product }) => (
  <Link to={`products/${product.id}`} className="inner-cart-list">
    <li>
      <img className="cart-item-photo" src={product.photoUrl} />
    </li>
    <div className="cart-item-details">
      <li>{product.product_name}</li>
      <li>{`Price: $${product.price.toLocaleString()}/each`}</li>
      <li>{`Quantity: ${item.quantity}`}</li>
      <li>{`Subtotal: $${(
        item.quantity * product.price
      ).toLocaleString()}`}</li>
    </div>
  </Link>
);

export default CartItem;