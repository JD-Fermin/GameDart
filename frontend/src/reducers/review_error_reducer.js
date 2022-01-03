import { 
  RECEIVE_REVIEWS, 
  RECEIVE_REVIEW_ERRORS, 
  CREATE_REVIEW, 
  DELETE_REVIEW, 
  UPDATE_REVIEW, 
  } 
  from "../actions/review_actions";

const ReviewErrorReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors
    case RECEIVE_REVIEWS:
      return nextState;
    case CREATE_REVIEW:
      return nextState;
    case DELETE_REVIEW:
      return nextState;
    case UPDATE_REVIEW:
      return nextState;

    default:
      return state;


  }
}

export default ReviewErrorReducer;