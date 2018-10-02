import React from 'react';
import { Link } from 'react-router-dom';

const SplashPageItems = () => {
  return (
    <ul className="splash-page-items">
      <Link className="splash-item" to={`/products/13`}><li className="splash1"></li></Link>
      <Link className="splash-item" to={`/products/14`}><li className="splash2"></li></Link>
      <Link className="splash-item" to={`/products/15`}><li className="splash3"></li></Link>
      <Link className="splash-item" to={`/products/16`}><li className="splash4"></li></Link>
      <Link className="splash-item" to={`/products/1`}><li className="splash5"></li></Link>
    </ul>
  );
};


export default SplashPageItems;
