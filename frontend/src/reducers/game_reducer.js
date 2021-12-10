import { RECEIVE_GAME_SEEDS, RECEIVE_GAME } from "../actions/game_actions";

const initialState = {
  seeds: {}
}

export default function(state = initialState, action) {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  
  switch(action.type) {
    case RECEIVE_GAME_SEEDS:
      nextState.seeds = action.gameSeeds;
      return nextState;
    case RECEIVE_GAME:
      nextState[action.game.id] = action.game;
      return nextState;
    default:
      return state;
  }
}