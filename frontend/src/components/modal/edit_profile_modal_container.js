import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { userUpdate } from '../../actions/user_actions';
import EditProfileModal from './edit_profile_modal';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    updateBio: (user) => dispatch(userUpdate(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileModal)