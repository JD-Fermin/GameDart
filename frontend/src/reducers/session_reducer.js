import { RECEIVE_CURRENT_USER, 
         RECEIVE_USER_LOGOUT, 
         RECEIVE_USER_SIGN_IN } from '../actions/session_actions';
import { RECEIVE_USER_INFO, UPDATE_CURRENT_USER } from "../actions/user_actions";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    // case RECEIVE_USER_INFO:
    //   if (Object.keys(state.user).length > 0 && action.user.id === state.user.id){
    //     return {
    //       ...state,
    //       isAuthenticated: !!action.user,
    //       user: action.user.data
    //     }
    //   }
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      }
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser.data
      }
    default:
      return state;
  }
}