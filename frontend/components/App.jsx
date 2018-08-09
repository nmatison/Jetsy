import React from 'react';
import GreetingContainer from './greeting_container';
import Modal from './modal'

const App = () =>(
  <div>
    <Modal />
    <header>
      <nav className="nav-bar">
        <h1 className="title">JETSY</h1>
        <GreetingContainer />
      </nav>
    </header>
  </div>
)

export default App;
