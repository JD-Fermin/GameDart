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

export const getGameReviews = async (gameId) => {
  const res = await axios.get(`/api/gameseeds/${gameId}/reviews`);
  return res;
}