import React from 'react';
import {Link} from 'react-router-dom'


const Greeting = ({ currentUser, logout, openModal }) => {
  const cart = <img className="cart" src="https://png.icons8.com/ios-glyphs/50/000000/shopping-cart.png" />
  const personIcon = <img className="person-icon" src="https://png.icons8.com/cotton/50/000000/gender-neutral-user.png" />

  const sessionLinks = () => (
    <nav className="login-signup">
        <button className="signup-button" onClick={() => openModal('regtocontinue')}>Sell on Jetsy</button>
      <button className="signup-button" onClick={() => openModal('signup')}>Register</button>
      <button className="login-button" onClick={() => openModal('login')}>Sign In</button>
        <Link to='/cart' className="cart-div">
          {cart}
          <span className="cart-text">Cart</span>
        </Link>
    </nav>
  );

  const personalGreeting = () => (
    <span className="your-page">
      <Link to='/products/new' className="sell-link">Sell a travel item</Link>
      <Link className="you-link" to={`/users/${currentUser.id}`}>
        {personIcon}
        <span className="you-text">You</span>
      </Link>
      <input className="logout-input" type="submit" value="Log Out" onClick={logout} />
        <Link to='/cart' className="cart-div">
          {cart}
          <span className="cart-text">Cart</span>
        </Link>
    </span>
  )

  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;
