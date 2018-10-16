import React from 'react';
import { Link } from 'react-router-dom';

class SideBarIndex extends React.Component {

  constructor(props) {
    super(props)
    this.filterProducts = this.filterProducts.bind(this);
    this.displayProducts = this.displayProducts.bind(this);
  }

  filterProducts() {
    const user = this.props.user;
    const listOfProducts = this.props.products.filter((product) => product.user_id === user.id);
    let products;
    if (listOfProducts.length > 10) {
      products = listOfProducts.slice(0, 10);
    } else {
      products = listOfProducts;
    }
    return products;
  };

  displayProducts() {
    let products = this.filterProducts();
    return( products.map(prod => <Link
      className="more-seller-link"
      to={`/products/${prod.id}`}
      key={prod.id}>
      <img className="more-seller-product" src={prod.photoUrl} />

      <h6 className="more-seller-title">{prod.product_name}</h6>
      <h6 className="more-seller-price">${prod.price}</h6>
    </Link>
    ));
  }

  render() {
    return (
      this.displayProducts()
    )};
};

export default SideBarIndex;


