import React from 'react';

const CartItem = ({ item, product }) => (
  <ul className="inner-cart-list">
    <li>
      <img className="cart-item-photo" src={product.photoUrl} />
    </li>
    <div className="cart-item-details">
      <li>{product.product_name}</li>
      <li>{`Price: $${product.price.toLocaleString()}/each`}</li>
      <li>{`Quantity: ${item.quantity}`}</li>
      <li>{`Subtotal: $${(item.quantity * product.price).toLocaleString()}`}</li>
    </div>
  </ul>
);

export default CartItem;