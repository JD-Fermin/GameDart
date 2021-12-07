import { connect } from 'react-redux';
import { userUpdate } from '../../actions/user_actions';
import UpdateProfileForm from './update_profile_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBio: (user) => dispatch(userUpdate(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfileForm);