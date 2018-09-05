import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CART_ITEM } from '../actions/cart_item_actions';
import { merge } from 'lodash';

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.payload.cart;
    case RECEIVE_CART_ITEM:
      newState = Object.assign({}, state)
      mergeState = merge({}, newState.cartItems, {[action.cartItem.id]: action.cartItem})
      newState.cartItems = mergeState 
      return newState;
    default:
      return state;
  }
}


export default cartReducer;
