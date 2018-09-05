import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.payload.cart
    default:
      return state;
  }
}


export default cartReducer;
