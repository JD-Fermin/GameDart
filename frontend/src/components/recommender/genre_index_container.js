import { connect } from 'react-redux';
import GenreIndex from './genre_index';
import { gameSeeds, fetchGame } from '../../actions/game_actions';

const mapStateToProps = (state) => {
  return {
    genres: state.game.seeds 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gameSeeds: () => dispatch(gameSeeds()),
    fetchGame: gameId => dispatch(fetchGame(gameId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreIndex);