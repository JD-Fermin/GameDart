import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(openModal('editProfile'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
// TODO: switch to line above if we have other schemas available
// export default connect(mapStateToProps, null)(Profile);

