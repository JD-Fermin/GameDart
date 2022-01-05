import * as reviewAPIUtil from "../util/reviews_api_util";
import * as gameAPIUtil from "../util/game_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"
export const REMOVE_REVIEW_ERRORS = "REMOVE_REVIEW_ERRORS"
export const CLEAR_REVIEWS = 'CLEAR_REVIEWS'

export const _receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
})

export const _createReview = review => ({
  type: CREATE_REVIEW,
  review
})

export const _deleteReview = reviewId => ({
  type: DELETE_REVIEW,
  reviewId
})

export const _updateReview = review => ({
  type: UPDATE_REVIEW,
  review
})

export const _receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
})

export const removeReviewErrors = () => ({
  type: REMOVE_REVIEW_ERRORS
})

export const clearReviews = () => ({
  type: CLEAR_REVIEWS
})

export const fetchReviews = (gameId) => dispatch => (
  gameAPIUtil.getGameReviews(gameId)
    .then((reviews) => dispatch(_receiveReviews(reviews.data)), // response
      errors => dispatch(_receiveReviewErrors(errors.response.data))
    )
)

export const deleteReview = reviewId => dispatch => (
  reviewAPIUtil.deleteReview(reviewId)
    .then((review) => dispatch(_deleteReview(review.data._id)),
      errors => dispatch(_receiveReviewErrors(errors.response.data)))
)

export const createReview = reviewData => dispatch => (
  reviewAPIUtil.createReview(reviewData)
    .then(review => dispatch(_createReview(review.data)),
      errors => dispatch(_receiveReviewErrors(errors.response.data)))
)

export const updateReview = reviewData => dispatch => (
  reviewAPIUtil.updateReview(reviewData)
    .then(review => dispatch(_updateReview(review.data)),
      errors => dispatch(_receiveReviewErrors(errors.response.data)))
) 

