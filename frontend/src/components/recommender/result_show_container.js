import { connect } from 'react-redux';
import ResultShow from './result_show';
import { fetchGame } from '../../actions/game_actions';
import { withRouter } from 'react-router-dom';
import { updateBackLogGames } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.game[ownProps.match.params.gameId],
    currentUserId: state.session.user.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchGame: () => dispatch(fetchGame(ownProps.match.params.gameId)),
    updateBackLogGames: (data) => dispatch(updateBackLogGames(data))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultShow));