import React from 'react';

const CartItem = ({ item, product }) => (
  <ul className="inner-cart-list">
    <li>{product.product_name}</li>
    <li>{`$${product.price.toLocaleString()}`}</li>
    <li>{item.quantity}</li>
  </ul>
);

export default CartItem;