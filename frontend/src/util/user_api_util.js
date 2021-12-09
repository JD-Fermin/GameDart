import axios from 'axios';

export const updateUser = async (userData) => {
  const res = await axios.patch(`/api/users/${userData.id}`, userData);
  return res;
}

export const getUserInfo = (userId) => {
  return axios.get(`/api/users/${userId}`);
}