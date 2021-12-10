import Backlog from "./backlog";
import { 
  updatePlayedGames, 
  deleteBackLogGames,
  fetchUserInfo,
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
    setPlayed: payload => dispatch(updatePlayedGames(payload))
    // fetchGame: () => dispatch
  }
}

export default connect(
  mSTP,
  mDTP
)(Backlog);