import React from 'react';
import ProductIndexItem from './products_index_item';


class ProductIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render () {
    const products = this.props.products.map((product) => <ProductIndexItem product={product} user={this.props.user} key={product.id} />)
    console.log(this.props.user)
      return (
        <div className="items-div">
          <h1 className="travel-items">All Travel Items</h1>
          <ul className="product-index-items">{products}</ul>
        </div>
      )}
}

export default ProductIndex;
