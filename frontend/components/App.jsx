import React from 'react';
import GreetingContainer from './greeting_container';
import Modal from './modal'
import {AuthRoute} from '../util/route_util';

const App = () =>(
  <div>
    <Modal />
    <header>
      <nav className="nav-bar">
        <h1 className="title">Jetsy</h1>
        <input className="search-bar" type="text" placeholder="Search for travel Items"/>
        <GreetingContainer />
      </nav>
    </header>
  </div>
)

export default App;
