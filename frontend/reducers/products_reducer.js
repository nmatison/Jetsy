import {RECEIVE_PRODUCT,
  RECEIVE_PRODUCTS,
  REMOVE_PRODUCT} from '../actions/product_actions';
import {merge} from 'lodash';

  const productsReducer = (state = {}, action) => {  
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_PRODUCTS:
        return merge({}, state, action.products)
      case RECEIVE_PRODUCT:
        return merge({}, state, {[action.products.id]: action.products})
      case REMOVE_PRODUCT:
        const newState = merge({}, state)
        delete newState[action.productId]
        return newState;
      default:
        return state;
    }
  }

export default productsReducer;
