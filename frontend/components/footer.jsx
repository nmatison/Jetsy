import React from 'react';

const Footer = () => {
  return <footer className="footer">
      <div className="footer-left">
        <p className="footer-title">Jetsy</p>
        <h1 className="footer-slogan">We make it easy for you to travel.</h1>
      </div>

      <div className="footer-right">
        <h1 className="credit">Nicholas Matison</h1>
        <a className="git-hub" target="_blank" href="https://github.com/nmatison/Jetsy" />
        <a className="linked-in" target="_blank" href="https://www.linkedin.com/in/nicholas-matison-066359108/" />
      </div>
    </footer>;
}


export default Footer;
