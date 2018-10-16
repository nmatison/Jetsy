import React from 'react';
import { Link } from 'react-router-dom';

class SellerProducts extends React.Component {

  constructor(props) {
    super(props)
    this.filterProducts = this.filterProducts.bind(this);
  }

  filterProducts() {
    console.log(this.props.products)
    const user = this.props.user;
    const listOfProducts = this.props.products.filter((product) => product.user_id === user.id)
    let products;
    if (listOfProducts.length > 8) {
      products = listOfProducts.slice(0, 8)
    } else {
      products = listOfProducts
    }
    return products
  };

  render() {
    return (this.filterProducts().map(prod => <Link
      className="more-seller-link"
      to={`/products/${prod.id}`}
      key={prod.id}>
      <img className="more-seller-product" src={prod.photoUrl} />
      <h6 className="more-seller-title">{prod.product_name}</h6>
      <h6 className="more-seller-price">${prod.price}</h6>
    </Link>
    ))
  };
};

export default SellerProducts;


