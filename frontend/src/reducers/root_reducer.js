import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import game from './game_reducer';


const RootReducer = combineReducers({
  errors,
  session,
  game
});

export default RootReducer;