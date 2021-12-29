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
  updateReview
} from '../../actions/review_actions'


const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.match.params.gameId)
  return {
    game: state.game[ownProps.match.params.gameId],
    currentUserId: state.session.user.id,
    user: state.user[state.session.user.id],
    reviews: state.review
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchGames: () => dispatch(fetchGame(ownProps.match.params.gameId)),
    updateBackLogGames: (data) => dispatch(updateBackLogGames(data)),
    openModal: () => dispatch(openModal('gameCarousel')),
    fetchUser: userId => dispatch(fetchUserInfo(userId)),
    fetchReviews: () => dispatch(fetchReviews(ownProps.match.params.gameId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    createReview: review => dispatch(createReview(review)),
    updateReview: review => dispatch(updateReview(review))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultShow));