import {RECEIVE_CART} from '../actions/cart_actions';

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CART:
      return action.cart
    default:
      return state;
  }
}


export default cartReducer;
