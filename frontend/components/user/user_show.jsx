import React from 'react';
import {Link} from 'react-router-dom';
import UserShowItems from './user_show_items';

class UserShow extends React.Component {

  componentDidMount(){
    this.props.fetchProducts();
    this.props.fetchUser();
  }

  render () {
    const welcome = `Welcome to ${this.props.user.username}'s store!`
    const sellerProductItems = this.props.sellerProducts.map((product) => <UserShowItems product={product} />);

    return (
      <div className = "seller-show-div">
        <div className="seller-title-and-pic">
          <h1 className="welcome">{welcome}</h1>
          <div className="seller-profile-pic"></div>
        </div>
        <div className="seller-product-items">{sellerProductItems}</div>
      </div>
    )
  }
}


export default UserShow;
