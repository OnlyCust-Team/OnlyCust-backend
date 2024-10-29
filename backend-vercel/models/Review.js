const mongoose = require("mongoose");
const { Schema } = mongoose;

const rateSchema = new Schema({
  product: {
    type: String,
    required: true,
  },
  review: {
    type: String,
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
  images: [
    {
      type: String,
      required: false,
    }
  ],
});

const Rate = mongoose.model("Rate", rateSchema);

module.exports = Rate;