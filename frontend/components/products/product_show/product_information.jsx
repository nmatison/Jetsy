import React from 'react';
import ProductCategories from './product_show_categories';
import { Link } from 'react-router-dom'

class ProductInformation extends React.Component {


  render() {
    const product = this.props.product;
    const user = this.props.user;

    return (
      <div className="product-user-information">
        <div className="product-information">
          <div className="title-price">
            <h1 className="product-title">{product.product_name}</h1>
            <h1 className="product-price">
              Price: ${product.price}
              /each
            </h1>
          </div>
        </div>
        <div className="user-description">
          <Link className="user-userpic" to={`/users/${user.id}`}>
            <div className="sold-text">
              <h1 className="sold-by">Sold By:</h1>
              <h1 className="seller-name">{user.username}</h1>
            </div>
            <div className="seller-pic" />
          </Link>
          <h1 className="product-description">
            Description:
                    <br />
            <br />
            {product.description}
          </h1>
          <ProductCategories categories={this.props.product.categories} />
        </div>
      </div>
    )
  }
}

export default ProductInformation;