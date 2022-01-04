
import { connect } from 'react-redux';
import { fetchUserInfo } from "../../actions/user_actions"
import ReviewItem from './review_item';
import { removeReviewErrors } from '../../actions/review_actions';

const mapStateToProps = (state) => ({
    users: state.user,
    currentId: state.session.user.id,
    errors: state.errors.reviews
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUserInfo(userId)),
    removeReviewErrors: () => dispatch(removeReviewErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem)

// dont need for now