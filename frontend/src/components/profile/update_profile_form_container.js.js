import { connect } from 'react-redux';
import { userUpdate } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBio: (user) => userUpdate(user),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)();