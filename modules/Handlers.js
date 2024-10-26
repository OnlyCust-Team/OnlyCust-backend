const Rate = require("../models/Review");

const getReview = async (request, response) => {
    try {
      const reviews = await Rate.find({});
      response.status(200).json(reviews);
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Error fetching reviews" });
    }
  };
const addReview = async (request, response) => {
    const { product, review, store, price, stars, images } = request.body;
  
    if (!product || !store || !price || !stars) {
      return response.status(400).json({ message: "Fields are required" });
    }
  
    if (stars < 1 || stars > 5) {
      return response.status(400).json({ message: "Stars must be between 1 and 5" });
    }
  
    const rate = new Rate({
      product,
      rate,
      store,
      price,
      stars,
      images,
    });
  
    try {
      await review.save();
      response.status(201).json({ message: "New review created!", rate});
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Error creating review" });
    }
  };
const seedDatabase = async (request, response) => {
  await require("./seed")();
  response.status(201).json({ message: "Seed executed" });
};
const removeReview = async (request, response) => {
  try {
    const reviewId = request.query.id;
    if (!reviewId) return response.status(400).json({ message: "?id is required" });

    await Rate.deleteOne({ _id: reviewId });
    response.status(200).json({ message: "Review removed successfully" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error removing review" });
  }
};

module.exports = {
  getReview,
  addReview,
  seedDatabase,
  removeReview,
};