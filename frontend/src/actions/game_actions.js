import * as APIUtil from '../util/game_api_util';

export const RECEIVE_GAME_SEEDS = "RECEIVE_GAME_SEEDS";
export const RECEIVE_GAME = "RECEIVE_GAME";

export const receiveGameSeeds = (gameSeeds) => ({
  type: RECEIVE_GAME_SEEDS,
  gameSeeds
});

export const receiveGame = (game) => ({
  type: RECEIVE_GAME,
  game
});

export const gameSeeds = () => dispatch => {
  APIUtil.getSeeds().then((seeds) => {
    dispatch(receiveGameSeeds(seeds.data))
  })
};

export const fetchGame = (gameId) => dispatch => {
  APIUtil.getGame(gameId).then((res) => { 
    dispatch(receiveGame(res.data))
  })
};