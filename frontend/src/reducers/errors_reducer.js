import { combineReducers } from 'redux';
import ReviewErrorReducer from './review_error_reducer';
import SessionErrorsReducer from './session_errors_reducer';
import UpdateErrorsReducer from './update_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  user: UpdateErrorsReducer,
  reviews: ReviewErrorReducer
});