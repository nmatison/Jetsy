import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CART_ITEMS, REMOVE_CART_ITEM } from '../actions/cart_item_actions'
import { RECEIVE_SEARCH_PRODUCTS } from '../actions/search_actions';
import { merge } from 'lodash';

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.payload.cart;
    case RECEIVE_CART_ITEMS:
      let newState = Object.assign({}, state);
      let mergeState = merge({}, newState.cartItems, action.payload.cart_items);
      newState.cartItems = mergeState;
      return newState;
    case REMOVE_CART_ITEM:
      let newState1 = Object.assign({}, state);
      delete newState1.cartItems[action.cartItemId];
      return newState1;
    case RECEIVE_SEARCH_PRODUCTS:
      let newState2 = Object.assign({}, state);
      if (newState2.cartItems) {
        delete newState2.cartItems
      }
      return newState2;
    default:
      return state;
  }
}


export default cartReducer;
