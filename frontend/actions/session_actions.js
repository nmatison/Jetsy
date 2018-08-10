import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const REMOVE_ERRORS = "REMOVE_ERRORS"


export const login = user => dispatch => (
  SessionApiUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)), (err) => dispatch(receiveErrors(err)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then((user) => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err)))
);

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
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
