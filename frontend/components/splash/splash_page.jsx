import React from 'react';
import SplashPageItems from './splash_page_items';
import {Link} from 'react-router-dom';

const splashPage = () => {
  return (
    <div className="splash-page">
      <div className="splash-main">
        <div className="slide-show-ad">
          <Link className="slideshow" to="/products"></Link>
          <div className="slogan-image-div">
            <Link className="slogan-image" to="/products"></Link>
            <Link className="slogan-div" to="/products">
              <p> Everything you need for your next trip!</p>
            </Link>
          </div>
        </div>
        <div className="safe-jetsy">
          <div className="safe"></div>
          <div className="slogan-divs">
            <h1 className="safe-header">Jetsy keeps you safe</h1>
            <ul className="slogan-subdivs">
              <li className="slogan-subdiv">
                <h1 className="sub-div-head">Trustworthy sellers</h1>
                <p className="sub-div-text">You can read their reviews placed by other consumers like you.</p>
            </li>
              <li className="slogan-subdiv">
                <h1 className="sub-div-head">World-class security</h1>
                <p className="sub-div-text">Safeguarding your information is the top priority of our dedicated security experts</p>
            </li>
              <li className="slogan-subdiv">
                <h1 className="sub-div-head">Purchase protection</h1>
                <p className="sub-div-text">If anything goes wrong, our global support team has got your back</p>
            </li>
            </ul>
          </div>
          <div className="keys"></div>
        </div>
        <div className="our-picks">
          <h1 className="favorites">Our Current Favorites:</h1>
          <SplashPageItems />
        </div>
      </div>
    </div>
  )
}


export default splashPage;
