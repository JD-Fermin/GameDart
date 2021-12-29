import Backlog from "./backlog_new";
import { 
  updatePlayedGames, 
  deleteBackLogGames,
  fetchUserInfo,
  updateBackLogGames,
  deletePlayedGames
} from "../../actions/user_actions";
import { connect } from "react-redux";


const mSTP = (state) => {
  return {
    currentId: state.session.user.id,
    user: state.user[state.session.user.id]
  };
};

const mDTP = (dispatch) => {
  return {
    fetch: userId => dispatch(fetchUserInfo(userId)),
    delete: payload => dispatch(deleteBackLogGames(payload)),
    setPlayed: payload => dispatch(updatePlayedGames(payload)),
    setBackLog: payload => dispatch(updateBackLogGames(payload)),
    deletePlayed: payload => dispatch(deletePlayedGames(payload))
    // fetchGame: () => dispatch
  }
}

export default connect(
  mSTP,
  mDTP
)(Backlog);