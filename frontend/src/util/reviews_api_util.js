import axios from 'axios';

export const createReview = (reviewData) => {
  return axios.post('/api/reviews', reviewData);
};

export const updateReview = async (reviewData) => {
  const res = await axios.patch(`/api/reviews/${reviewData.id}`, reviewData);
  return res;
}

export const deleteReview = async (reviewId) => {

  return axios.delete(`/api/reviews/${reviewId}`);

}