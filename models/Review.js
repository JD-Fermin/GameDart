const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ReviewSchema = new Schema({
  gameId: {
    type: String,
    required: true
  },

  author: { 
    type: mongoose.Schema.Types.ObjectId, ref: 'users',
    required: true
  },

  body: {
    type: String,
    required: true,
    default: ''
  },

  date: {
    type: Date,
    default: Date.now
  }
  
})

const Review = mongoose.model('reviews', ReviewSchema);
module.exports = Review;

