import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_PRODUCTS, RECEIVE_PRODUCT} from '../actions/product_actions';
import {merge} from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.currentUser.id]: action.currentUser});
    case RECEIVE_PRODUCTS:
      return merge({}, state, action.payload.users)
    case RECEIVE_PRODUCT:
      return merge({}, state, {[action.payload.user.id]: action.payload.user})
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};

export default usersReducer;
