import {RECEIVE_CART_ITEM, REMOVE_CART_ITEM} from '../actions/cart_item_actions';
import {RECEIVE_CART_ITEMS} from '../actions/cart_actions';
import {merge} from 'lodash';

const cartItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART_ITEMS:
      return action.payload.items
    case RECEIVE_CART_ITEM:
      return merge({}, state, {[action.cartItem.id]: action.cartItem});
    default:
      return state
  }
}

export default cartItemsReducer;
