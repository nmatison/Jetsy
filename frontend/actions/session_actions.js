import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const REMOVE_ERRORS = "REMOVE_ERRORS"


export const login = user => dispatch => (
  SessionApiUtil.login(user).then((payload) => dispatch(receiveCurrentUser(payload)), (err) => dispatch(receiveErrors(err)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then((user) => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then((payload) => dispatch(receiveCurrentUser(payload)), err => dispatch(receiveErrors(err)))
);

const receiveCurrentUser = (payload) => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors.responseJSON
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const removeErrors = () => ({
  type: REMOVE_ERRORS
})
