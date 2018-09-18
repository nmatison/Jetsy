import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Link, Switch} from 'react-router-dom';
import SplashPage from './splash/splash_page';
import GreetingContainer from './splash/greeting_container';
import Modal from './splash/modal';
import ProductIndexContainer from './products/products_index_container';
import ProductShowContainer from './products/products_show_container';
import CreateProductFormContainer from './products/create_product_form_container';
import EditProductContainer from './products/edit_product_form_container';
import UserShowContainer from './user/user_show_container'
import SearchIndexContainer from './search/search_index_container';
import CartContainer from './cart/cart_container';
import Footer from './footer.jsx'

const App = () =>(
  <div className= "outest-div">
      <Modal />
      <header>
          <GreetingContainer />
      </header>
      <div className="main-div">
        <Route exact path="/" component ={SplashPage} />
        <Route exact path='/search' component={SearchIndexContainer} />
        <Route exact path="/products" component={ProductIndexContainer} />
        <Route exact path='/products/:productId' component={ProductShowContainer} />
        <Route exact path='/users/:userId' component={UserShowContainer} />
        <Route exact path='/cart' component={CartContainer} />
        <ProtectedRoute exact path='/new-product' component={CreateProductFormContainer} />
        <ProtectedRoute exact path='/products/:productId/edit' component={EditProductContainer} />
      </div>
      <Footer />
  </div>
)

export default App;

// <Route exact path="/" component={}></Route>
