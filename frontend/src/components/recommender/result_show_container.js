import { connect } from 'react-redux';
import ResultShow from './result_show';
import { fetchGame } from '../../actions/game_actions';
import { withRouter } from 'react-router-dom';
import { updateBackLogGames } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUserInfo } from '../../actions/user_actions'; 


const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.match.params.gameId)
  return {
    game: state.game[ownProps.match.params.gameId],
    currentUserId: state.session.user.id,
    user: state.user[state.session.user.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchGames: () => dispatch(fetchGame(ownProps.match.params.gameId)),
    updateBackLogGames: (data) => dispatch(updateBackLogGames(data)),
    openModal: () => dispatch(openModal('gameCarousel')),
    fetchUser: userId => dispatch(fetchUserInfo(userId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultShow));