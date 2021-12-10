import axios from 'axios';

export const updateBackLogGames = async (userData) => {
  const res = await axios.patch(`/api/users/${userData.id}/backLogGames`, userData);
  return res;
}

export const deleteBackLogGames = async (userData) => {
  console.log(userData)
  return axios.patch(`/api/users/${userData.id}/backLogGames/delete`, userData);
 
}

