import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CART_ITEMS } from '../actions/cart_item_actions'
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
      console.log(newState)
      return newState;
    default:
      return state;
  }
}


export default cartReducer;
