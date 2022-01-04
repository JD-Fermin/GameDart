import axios from 'axios';

export const createReview = async (reviewData) => {
  const res = await axios.post('/api/reviews', reviewData);
  return res;
};

export const updateReview = async (reviewData) => {
  const res = await axios.patch(`/api/reviews/${reviewData.id}`, reviewData);
  return res;
}

export const deleteReview = async (reviewId) => {
  const res = await axios.delete(`/api/reviews/${reviewId}`);
  return res;

}