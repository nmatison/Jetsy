import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = ({currentUser, logout}) => {
  const cart = <img className="cart" src="https://png.icons8.com/ios-glyphs/50/000000/shopping-cart.png" />
  const personIcon = <img className="person-icon" src="https://png.icons8.com/cotton/50/000000/gender-neutral-user.png" />
  return (
    <span className="your-page">
      <Link to='/new-product' className="sell-link">Sell a travel item</Link>
      <Link className="you-link" to={`/users/${currentUser.id}`}>
        {personIcon}
        <span className="you-text">You</span>
      </Link>
      <input
        className="logout-input"
        type="submit"
        value="Log Out"
        onClick={logout} />
      <Link to="/cart" className="cart-div">
        {cart}
        <span className="cart-text">Cart</span>
      </Link>
    </span>
  );
};

export default personalGreeting;