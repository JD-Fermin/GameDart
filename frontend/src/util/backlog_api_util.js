import axios from 'axios';

export const updateBackLogGames = async (userData) => {
  const res = await axios.patch(`/api/users/${userData.id}/backLogGames`, userData);
  return res;
}

export const deleteBackLogGames = async (userData) => {
  const res = await axios.delete(`/api/users/${userData.id}/backLogGames`, userData);
  return res;
}

