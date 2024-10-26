const Review = require("../models/Review");

const getReview = async (request, response) => {
    try {
      const reviews = await Review.find({});
      response.status(200).json(reviews);
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Error fetching reviews" });
    }
  };
const addReview = async (request, response) => {
    const { product, description, store, price, stars, tags, images } = request.body;
  
    if (!product || !description || !store || !price || !stars || !tags) {
      return response.status(400).json({ message: "All fields are required" });
    }
  
    if (stars < 1 || stars > 5) {
      return response.status(400).json({ message: "Stars must be between 1 and 5" });
    }
  
    const review = new Review({
      product,
      description,
      store,
      price,
      stars,
      tags,
      images,
    });
  
    try {
      await review.save();
      response.status(201).json({ message: "New review created!", review });
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

    await Review.deleteOne({ _id: reviewId });
    response.status(200).json({ message: "Review removed successfully" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error removing review" });
  }
};
const resetDatabase = async (request, response) => {
  try {
    await Review.deleteMany({});
    response.status(200).json({ message: "Database cleared successfully." });
  } catch (error) {
    console.error("Error clearing database:", error);
    response.status(500).json({ message: "Error clearing database." });
  }
};

module.exports = {
  getReview,
  addReview,
  seedDatabase,
  removeReview,
  resetDatabase,
};