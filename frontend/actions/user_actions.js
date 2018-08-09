import * as UserApiUtil from '../util/user_api_util';


const RECEIVE_USER = "RECEIVE_USER";


export const fetchUser = (id) => dispatch => (
  UserApiUtil.fetchUser(id).then(user) => dispatch(receiveUser(user))
);

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})
