import React from 'react';
import {Link} from 'react-router-dom'


const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={openModal('login')}>Login</button>
      <button onClick={openModal('signup')}>Signup</button>
    </nav>
  );
  const personalGreeting = () => (
    <span className="your-page">
      <Link to={`/users/${currentUser.id}`}>You</Link>
      <input className="logout-input" type="submit" value="Log Out" onClick={logout} />
    </span>
  )

  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;
