import React from 'react';
import { Link, withRouter } from "react-router-dom";

class Category extends React.Component {



  handleClick (searchString) {
    this.props.searchProducts({query_string: searchString}).then(() => this.props.history.push({
      pathname: '/search',
      search: `${searchString}`
  }));
}

  render(){
    return (
    <div className="categories">
      <ul className="category-links">
        <Link className="category-index" to="/products">All Items</Link>
        <li onClick={() => this.handleClick("Bag")}>Bags</li>
        <li onClick={() => this.handleClick("Beach")}>Beach</li>
        <li onClick={() => this.handleClick("Comfort")}>Comfort</li>
        <li onClick={() => this.handleClick("Hiking")}>Hiking</li>
        <li onClick={() => this.handleClick("Business")}>Business</li>
      </ul>
    </div>
    )
  };

}

export default withRouter(Category);