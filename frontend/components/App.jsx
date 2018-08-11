import React from 'react';
import {Route} from 'react-router-dom';
import GreetingContainer from './greeting_container';
import Modal from './modal';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Link, Switch} from 'react-router-dom';
import ProductsIndexContainer from './products/products_index_container';
import ProductsShowContainer from './products/products_show_container';
import ProductFormContainer from './products/create_product_form_container';
import EditProductContainer from './products/edit_product_form_container';
import Footer from './footer.jsx'

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
        <Route exact path="/products" component={ProductsIndexContainer} />
        <Route exact path='/products/:productId' component={ProductsShowContainer} />
        <ProtectedRoute exact path='/products/new' component={ProductFormContainer} />
        <Route exact path='/products/:productId/edit' component={EditProductContainer} />
      </header>
      <Footer />
  </div>
)

export default App;
