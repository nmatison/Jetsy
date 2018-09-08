import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CART_ITEMS, REMOVE_CART_ITEM } from '../actions/cart_item_actions'
import { merge } from 'lodash';

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.payload.cart;
    case RECEIVE_CART_ITEMS:
      let newState = Object.assign({}, state)
      let mergeState = merge({}, newState.cartItems, action.payload.cart_items)
      newState.cartItems = mergeState 
      return newState;
    case REMOVE_CART_ITEM:
      let newState1 = Object.assign({}, state)
      delete newState1.cartItems[action.cartItemId]
      return newState1;
    default:
      return state;
  }
}


export default cartReducer;
