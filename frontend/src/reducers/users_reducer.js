import { UPDATE_CURRENT_USER } from "../actions/user_actions";

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_CURRENT_USER:
      return {
        
      };
    default:
      return state;
  }
}