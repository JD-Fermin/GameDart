import { connect } from 'react-redux';
import ResultShow from './result_show';
import { fetchGame } from '../../actions/game_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.match.params.gameId)
  return {
    game: state.game[ownProps.match.params.gameId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchGame: () => dispatch(fetchGame(ownProps.match.params.gameId)),
    openModal: () => dispatch(openModal('gameCarousel'))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultShow));