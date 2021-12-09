import { RECEIVE_USER_INFO, UPDATE_CURRENT_USER } from "../actions/user_actions";

export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER_INFO:
      return {
        ...state,
        [action.user.data.id]: action.user.data
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        [action.currentUser.data.id]: action.currentUser.data
      }
    default:
      return state;
  }
}