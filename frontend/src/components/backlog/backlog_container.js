import Backlog from "./backlog";
import { 
  updateBackLogGames, 
  deleteBackLogGames,
  fetchUserInfo 
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
    delete: user => dispatch(deleteBackLogGames(user)),
    // fetchGame: () => dispatch
  }
}

export default connect(
  mSTP,
  mDTP
)(Backlog);