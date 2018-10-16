import React from 'react';
import { Link } from "react-router-dom";
import SellerProductContainer from './seller_product_container';


const SideBar = ({ user }) => {
  return (  <div className="side-bar">
    <Link to={`/users/${user.id}`} className="more-from">
      <h2>More from</h2>
      <h1>{user.username}</h1>
    </Link>
    <div className="more-seller-items">
      <SellerProductContainer user={user} />
    </div>
  </div>
  )
};

export default SideBar;