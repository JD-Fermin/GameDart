import axios from 'axios';

export const updateUser = (userData) => {
  return axios.patch(`/api/users/${userData.id}`, userData);
}