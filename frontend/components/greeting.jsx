import React from 'react';
import {Link} from 'react-router-dom'


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Sign up!</Link>
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
