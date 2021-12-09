import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { userUpdate } from '../../actions/user_actions';
import EditProfileModal from './edit_profile_modal';
import { fetchUserInfo } from '../../actions/user_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return {
    user: state.user[state.session.user.id],
    errors: state.errors.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    updateBio: (user) => dispatch(userUpdate(user)),
    fetchUser: (userId) => dispatch(fetchUserInfo(userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfileModal));