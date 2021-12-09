import { connect } from 'react-redux';
import ResultShow from './result_show';
import { fetchGame } from '../../actions/game_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.game[ownProps.match.params.gameId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchGame: () => dispatch(fetchGame(ownProps.match.params.gameId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultShow));