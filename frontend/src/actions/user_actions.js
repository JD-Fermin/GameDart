import * as UserAPIUtil from '../util/user_api_util';
import * as BackLogGamesAPIUtil from '../util/backlog_api_util';
import * as PlayedGamesAPIUtil from '../util/played_games_api_util'


export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";
export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO";

export const updateCurrentUser = currentUser => ({
  type: UPDATE_CURRENT_USER,
  currentUser
});

export const receiveUserInfo = user => ({
  type: RECEIVE_USER_INFO,
  user
})

export const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const userUpdate = (user) => dispatch => (
  UserAPIUtil.updateUser(user).then((res) => {
    dispatch(updateCurrentUser(res))
  }, err => {
    dispatch(receiveErrors(err.response.data))
  })
);

export const fetchUserInfo = userId => dispatch => (
  UserAPIUtil.getUserInfo(userId).then((res) => {
    dispatch(receiveUserInfo(res))
  }, err => {
    dispatch(receiveErrors(err.response.data))
  })
)

export const updateBackLogGames = user => dispatch => {
  BackLogGamesAPIUtil.updateBackLogGames(user)
    .then((res) => {
      dispatch(updateCurrentUser(res))
    }, err => {
      dispatch(receiveErrors(err.response.data))
    })
}

export const deleteBackLogGames = user => dispatch => {
  BackLogGamesAPIUtil.deleteBackLogGames(user)
    .then((res) => {
      dispatch(updateCurrentUser(res))
    }, err => {
      dispatch(receiveErrors(err.response.data))
    })
}

export const updatePlayedGames = user => dispatch => {
  PlayedGamesAPIUtil.updatePlayedGames(user)
    .then((res) => {
      dispatch(updateCurrentUser(res))
    }, err => {
      dispatch(receiveErrors(err.response.data))
    })
}

export const deletePlayedGames = user => dispatch => {
  PlayedGamesAPIUtil.deletePlayedGames(user)
    .then((res) => {
      dispatch(updateCurrentUser(res))
    }, err => {
      dispatch(receiveErrors(err.response.data))
    })
}