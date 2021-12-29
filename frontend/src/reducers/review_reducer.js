import { RECEIVE_REVIEWS, CREATE_REVIEW, DELETE_REVIEW, UPDATE_REVIEW } from "../actions/review_actions";

// NOT FINISHED -- TODO -- NEED TO REWORK THIS CODE
const ReviewReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews
    case CREATE_REVIEW:
      nextState[action.review.id] = action.review
      return nextState
    case DELETE_REVIEW:
      delete nextState[action.reviewId]
      return nextState
    case UPDATE_REVIEW:
      nextState[action.review.id] = action.review
      return nextState
    default:
      return state;
  }
}

export default ReviewReducer;