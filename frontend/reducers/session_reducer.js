import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const _defaultState = ({
  id: null
})

const sessionReducer = (state =_defaultState, action) => {
  Object.freeze(state);
  console.log(_defaultState);
  console.log(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {id: action.payload.user.id, cart_id: action.payload.cart.id};
    case LOGOUT_CURRENT_USER:
      return _defaultState;
    default:
      return state;
  }
};

export default sessionReducer;
