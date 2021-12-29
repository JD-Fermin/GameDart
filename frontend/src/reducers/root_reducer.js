import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import modal from './modal_reducer';
import game from './game_reducer';
import user from './users_reducer'
import review from './review_reducer'


const RootReducer = combineReducers({
  errors,
  session,
  modal,
  game,
  user,
  review,
});

export default RootReducer;