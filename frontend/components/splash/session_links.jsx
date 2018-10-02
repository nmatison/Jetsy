import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = ({ openModal }) => {
  const cart = <img className="cart" src="https://png.icons8.com/ios-glyphs/50/000000/shopping-cart.png" />
  return (
    <nav className="login-signup">
      <button className="signup-button" onClick={() => openModal('regtocontinue')}>Sell on Jetsy</button>
      <button className="signup-button" onClick={() => openModal('signup')}>Register</button>
      <button className="login-button" onClick={() => openModal('login')}>Sign In</button>
      <Link to="/cart" className="cart-div">
        {cart}
        <span className="cart-text">Cart</span>
      </Link>
    </nav>
  );
};

export default sessionLinks;