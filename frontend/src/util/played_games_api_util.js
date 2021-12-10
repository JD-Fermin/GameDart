import axios from 'axios';

export const updatePlayedGames = async (userData) => {
  const res = await axios.patch(`/api/users/${userData.id}/playedGames`, userData);
  return res;
}

export const deletePlayedGames = async (userData) => {
  
  return axios.patch(`/api/users/${userData.id}/playedGames/delete`, userData);

}

