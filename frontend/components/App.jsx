import React from 'react';
import GreetingContainer from './greeting_container';
import Modal from './modal'
import {AuthRoute} from '../util/route_util';
import {Link} from 'react-router-dom'

const App = () =>(
  <div>
    <Modal />
    <header>
      <nav className="nav-bar">
        <div className="title-and-search">
          <Link to="/" className="title">Jetsy</Link>
          <span className="search-span"><input className="search-bar" type="text" placeholder="Search for travel items"/></span>
          <input type="submit" className="search-submit" value="Search" />
        </div>
        <GreetingContainer />
      </nav>
    </header>
  </div>
)

export default App;
