import {RECEIVE_PRODUCT,
  RECEIVE_PRODUCTS,
  REMOVE_PRODUCT} from '../actions/product_actions';
import {merge} from 'lodash';

  const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_PRODUCTS:
        return merge({}, state, action.payload.products)
      case RECEIVE_PRODUCT:
      debugger
        return merge({}, state, {[Object.values(action.payload.product)[0].id]: Object.values(action.payload.product)[0]})
      case REMOVE_PRODUCT:
        const newState = merge({}, state)
        delete newState[action.payload.product][action.payload.productId]
        return newState;
      default:
        return state;
    }
  }

export default productsReducer;
