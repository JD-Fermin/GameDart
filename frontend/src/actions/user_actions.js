import * as UserAPIUtil from '../util/user_api_util';
import * as APIUtil from '../util/session_api_util';
import { receiveErrors } from './session_actions';

export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";

export const updateCurrentUser = currentUser => ({
  type: UPDATE_CURRENT_USER,
  currentUser
});

export const userUpdate = user => dispatch => (
  UserAPIUtil.updateUser(user).then((res) => {
    dispatch(updateCurrentUser(res))
  }, err => (
    dispatch(receiveErrors(err.response.data))
  ))
);