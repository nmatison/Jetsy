import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';
import configureStore from './store/store';
import {createCart} from './actions/cart_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  console.log(window.currentUser)
  if (window.currentUser) {
  const preloadedState = {
    entities: {
      users: { [window.currentUser.user.id]: window.currentUser.user },
      cart: {id: window.currentUser.cart.id}
    },
    session: { id: window.currentUser.user.id }
  };
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}

  const root = document.getElementById('root');

  window.createCart = createCart;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root)
});
