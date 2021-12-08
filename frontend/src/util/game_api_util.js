import axios from 'axios';

export const getSeeds = () => {
  return axios.get('/api/gameseeds/');
}

export const getGame = (gameId) => {
  return axios.get(`/api/gameseeds/${gameId}`);
}