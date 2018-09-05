import {RECEIVE_PRODUCT,
  RECEIVE_PRODUCTS,
  REMOVE_PRODUCT} from '../actions/product_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_SEARCH_PRODUCTS} from '../actions/search_actions';
import {RECEIVE_CART_ITEMS} from '../actions/cart_item_actions';
import {merge} from 'lodash';

  const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_PRODUCTS:
        return merge({}, state, action.payload.products);
      case RECEIVE_CART_ITEMS:
        return action.payload.products
      case RECEIVE_PRODUCT || RECEIVE_USER:
        return merge({}, state, {[Object.values(action.payload.product)[0].id]: Object.values(action.payload.product)[0]});
      case REMOVE_PRODUCT:
        const newState = merge({}, state)
        delete newState[action.productId]
        return newState;
      case RECEIVE_SEARCH_PRODUCTS:
        return merge({}, action.payload.products);
      default:
        return state;
    }
  }

export default productsReducer;
