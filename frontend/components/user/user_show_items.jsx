import React from 'react';
import {Link} from 'react-router-dom';

const UserShowItems = ({product}) => (
  <Link to={`/products/${product.id}`} className="seller-products-list">
    <li className="seller-product-pic"><img className="seller-product-pic" src={product.photoUrl} /></li>
    <li className="seller-product-name">{product.product_name}</li>
    <li className="seller-product-price">${product.price}</li>
  </Link>
)


export default UserShowItems;
