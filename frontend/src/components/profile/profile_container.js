import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchUserInfo } from '../../actions/user_actions';
import { withRouter } from 'react-router';

import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  // console.log("state", state)
  return {
    currentId: state.session.user.id,
    user: state.user[ownProps.match.params.id] || state.user[state.session.user.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(openModal('editProfile')),
    fetchUser: (userId) => dispatch(fetchUserInfo(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
// TODO: switch to line above if we have other schemas available
// export default connect(mapStateToProps, null)(Profile);
