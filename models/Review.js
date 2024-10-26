const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  product: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  tags:{
    type: String,
    required: true,
  },
  images:{
    type: String,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;