import * as reviewAPIUtil from "../util/review_api_util";
import * as gameAPIUtil from "../util/game_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"


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


export const fetchReviews = (gameId) => dispatch => (
  gameAPIUtil.getGameReviews(gameId)
    .then((reviews) => dispatch(_receiveReviews(reviews)), // response
      errors => dispatch(_receiveReviewErrors(errors))
    )
)

export const deleteReview = reviewId => dispatch => (
  reviewAPIUtil.deleteReview(reviewId)
    .then((review) => dispatch(_deleteReview(review.id)),
      errors => dispatch(_receiveReviewErrors(errors)))
)

export const createReview = reviewData => dispatch => (
  reviewAPIUtil.createReview(reviewData)
    .then(review => dispatch(_createReview(review)),
      errors => dispatch(_receiveReviewErrors(errors)))
)

export const updateReview = reviewData => dispatch => (
  reviewAPIUtil.updateReview(reviewData)
    .then(review => dispatch(_updateReview(review)),
      errors => dispatch(_receiveReviewErrors(errors)))
) 