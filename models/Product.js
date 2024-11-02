const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true,
      match: /.+@.+\..+/
  },
  review: {
      type: String,
      required: true
  },
  stars: {
      type: Number,
      required: true,
      min: 1,
      max: 5
  },
  created_at: {
      type: Date,
      default: Date.now
  }
});

const productSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  brand: {
      type: String,
      required: true
  },
  gama: {
      type: String,
      enum: ['Alta', 'Media', 'Baja'],
      required: true
  },
  price:{
    type: Number,
    required: true
  },
  image:{
    type: String,
    required: false
  },
  created_at: {
      type: Date,
      default: Date.now
  },
  reviews: [reviewSchema]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;