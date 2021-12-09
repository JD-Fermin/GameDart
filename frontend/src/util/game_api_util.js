import axios from 'axios';

export const getSeeds = () => {
  return axios.get('/api/gameseeds/');
}

export const getGame = async (gameId) => {
  if (!gameId) {
    return {}
  } else {
   const res = axios.get(`/api/gameseeds/${gameId}`);
   return res;
  }
}