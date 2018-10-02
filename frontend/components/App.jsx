import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SplashPage from './splash/splash_page';
import GreetingContainer from './splash/greeting_container';
import Modal from './splash/modal';
import ProductIndexContainer from './products/product_index/products_index_container';
import ProductShowContainer from './products/product_show/products_show_container';
import CreateProductFormContainer from './products/product_form/create_product_form_container';
import EditProductContainer from './products/product_form/edit_product_form_container';
import UserShowContainer from './user/user_show_container'
import SearchIndexContainer from './search/search_index_container';
import CartContainer from './cart/cart_container';
import Footer from './footer'
import ScrollToTop from './scrollToTop';

const App = () =>(
  <div className= "outest-div">
      <Modal />
      <header>
          <GreetingContainer />
      </header>
      <div className="main-div">
      <ScrollToTop>
        <Route exact path="/" component ={SplashPage} />
        <Route exact path='/search' component={SearchIndexContainer} />
        <Route exact path="/products" component={ProductIndexContainer} />
        <Route exact path='/products/:productId' component={ProductShowContainer} />
        <Route exact path='/users/:userId' component={UserShowContainer} />
        <Route exact path='/cart' component={CartContainer} />
        <ProtectedRoute exact path='/new-product' component={CreateProductFormContainer} />
        <ProtectedRoute exact path='/products/:productId/edit' component={EditProductContainer} />
      </ScrollToTop>
      </div>
      <Footer />
  </div>
)

export default App;

