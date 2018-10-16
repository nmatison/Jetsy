import React from 'react';
import { Link } from "react-router-dom";
import SideBarIndexContainer from './side_bar_index_container';


const SideBar = ({ user }) => {
  return (  <div className="side-bar">
    <Link to={`/users/${user.id}`} className="more-from">
      <h2>More from</h2>
      <h1>{user.username}</h1>
    </Link>
    <div className="more-seller-items">
      <SideBarIndexContainer user={user} />
    </div>
  </div>
  )
};

export default SideBar;