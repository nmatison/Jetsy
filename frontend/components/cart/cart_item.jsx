import React from 'react';

const CartItem = (item, product) => (
  <ul>
    <li>{product.name}</li>
    <li>{product.price}</li>
    <li>{item.quantity}</li>
  </ul>
);

export default CartItem;