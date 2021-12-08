import { connect } from 'react-redux';
import GenreGameIndex from './genre_games_index';
import { fetchGame } from '../../actions/game_actions';

const mapStateToProps = (state) => {
  return {
    fetchedGames: state.game
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGame: gameId => dispatch(fetchGame(gameId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreGameIndex);