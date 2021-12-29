import { connect } from 'react-redux';
import { fetchUserInfo } from "../../actions/user_actions"
import ReviewItem from './review_item';

const mapStateToProps = (state) => ({
    users: state.user
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUserInfo(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem)

// dont need for now