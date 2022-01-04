import { 
  RECEIVE_REVIEWS, 
  RECEIVE_REVIEW_ERRORS, 
  CREATE_REVIEW, 
  DELETE_REVIEW, 
  UPDATE_REVIEW, 
  REMOVE_REVIEW_ERRORS
  } 
  from "../actions/review_actions";

const ReviewErrorReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors
    case REMOVE_REVIEW_ERRORS:
      return {};
    case RECEIVE_REVIEWS:
      return {};
    case CREATE_REVIEW:
      return {};
    case DELETE_REVIEW:
      return {};
    case UPDATE_REVIEW:
      return {};

    default:
      return state;


  }
}

export default ReviewErrorReducer;