import React from 'react';
import ProductIndexItem from './products_index_item';


class ProductIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render () {
    if (Object.values(this.props.users).length == 1) return null
    const products = this.props.products.map((product) => <ProductIndexItem product={product} users={this.props.users} key={product.id} />)

      return (
        <div className="products-index">
          <div className="items-div">
            <h1 className="travel-items">All Travel Items</h1>
            <ul className="product-index-items">{products}</ul>
          </div>
        </div>
      )}
}

export default ProductIndex;
