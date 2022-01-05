import { connect } from 'react-redux';
import ResultShow from './result_show';
import { fetchGame } from '../../actions/game_actions';
import { withRouter } from 'react-router-dom';
import { updateBackLogGames } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUserInfo } from '../../actions/user_actions'; 
import {
  fetchReviews,
  deleteReview,
  createReview,
  updateReview,
  removeReviewErrors,
  clearReviews
} from '../../actions/review_actions'



const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.match.params.gameId)
  return {
    game: state.game[ownProps.match.params.gameId],
    currentUserId: state.session.user.id,
    user: state.user[state.session.user.id],
    reviews: state.review,
    errors: state.errors.reviews
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchGames: () => dispatch(fetchGame(ownProps.match.params.gameId)),
    updateBackLogGames: (data) => dispatch(updateBackLogGames(data)),
    openCarousel: () => dispatch(openModal('gameCarousel')),
    openReview: () => dispatch(openModal('reviewModal')),
    fetchUser: userId => dispatch(fetchUserInfo(userId)),
    fetchReviews: () => dispatch(fetchReviews(ownProps.match.params.gameId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    createReview: review => dispatch(createReview(review)),
    updateReview: review => dispatch(updateReview(review)),
    removeReviewErrors: () => dispatch(removeReviewErrors()),
    clearReviews: () => dispatch(clearReviews())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultShow));