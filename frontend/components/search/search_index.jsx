import React from 'react';
import SearchIndexItem from './search_index_item';
import {withRouter} from 'react-router-dom';

class SearchIndex extends React.Component {

  componentDidMount() {
    console.log(this.props)
    const search = this.props.location.search.slice(1).replace(/%20/g, " ")
    this.props.searchProducts({query_string: search})
  }



  render () {
    if (!this.props.products) return null;
    const query = this.props.location.search.slice(1).replace(/%20/g, " ")
    const products = this.props.products.map((product) => <SearchIndexItem
    product={product}
    users={this.props.users}
    key={product.id} />)

      return (
        <div className="products-index">
          <div className="items-div">
            <h1 className="travel-items">Displaying All "{query}" Items </h1>
            <ul className="product-index-items">{products}</ul>
          </div>
        </div>
      )}
}

export default withRouter(SearchIndex);
