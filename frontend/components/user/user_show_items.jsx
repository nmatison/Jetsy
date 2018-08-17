import React from 'react';
import {Link} from 'react-router-dom';

const UserShowItems = ({product}) => (
  <Link to={`/products/${product.id}`} className="inner-product-item-list">
    <img className="product-image" src={product.photoUrl} />
    <div className="product-info">
      <li className="product-name">{product.product_name}</li>
      <li className="product-price">${product.price}</li>
    </div>
  </Link>
)


export default UserShowItems;
