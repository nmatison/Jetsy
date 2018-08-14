import React from 'react';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Link, Switch} from 'react-router-dom';
import SplashPage from './splash/splash_page';
import GreetingContainer from './splash/greeting_container';
import Modal from './splash/modal';
import ProductsIndexContainer from './products/products_index_container';
import ProductsShowContainer from './products/products_show_container';
import ProductFormContainer from './products/create_product_form_container';
import EditProductContainer from './products/edit_product_form_container';
import Footer from './footer.jsx'

const App = () =>(
  <div className= "outest-div">
      <Modal />
      <header>
          <GreetingContainer />
      </header>
      <Link to="/products">All Products</Link>
      <div className="main-div">
        <Route exact path="/" component ={SplashPage} />
        <Route exact path="/products" component={ProductsIndexContainer} />
        <Route exact path='/products/:productId' component={ProductsShowContainer} />
        <ProtectedRoute exact path='/products/new' component={ProductFormContainer} />
        <ProtectedRoute exact path='/products/:productId/edit' component={EditProductContainer} />
      </div>
      <Footer />
  </div>
)

export default App;

// <Route exact path="/" component={}></Route>
