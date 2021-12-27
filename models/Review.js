const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ReviewSchema = new Schema({
  gameId: {
    type: String,
    required: true,
    index: true
  },

  author: { 
    type: mongoose.Schema.Types.ObjectId, ref: 'users',
    required: true,
    index: true
  },

  body: {
    type: String,
    required: true,
    default: ''
  },

  date: {
    type: Date,
    default: Date.now
  },

  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  }
  
})

ReviewSchema.index({gameId: 1, author: -1}, {unique: true})
const Review = mongoose.model('reviews', ReviewSchema);
module.exports = Review;

