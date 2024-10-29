const Rate = require("../models/Review");
const multer = require('multer');

const getReview = async (request, response) => {
  try {
    const reviews = await Rate.find({});
    response.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error fetching reviews" });
  }
};
const getStores = async (request, response) => {
  try {
    const stores = await Rate.distinct('store'); 
    response.status(200).json(stores);
  } catch (error) {
    response.status(500).json({ message: "Error fetching stores" });
  }
};
const addReview = async (request, response) => {
  const { product, review, store, price, stars } = request.body;

  if (!product || !store || !price || !stars) {
      return response.status(400).json({ message: "Fields are required" });
  }
  if (stars < 1 || stars > 5) {
      return response.status(400).json({ message: "Stars must be between 1 and 5" });
  }

  const imagePath = request.file ? request.file.path : null;

  const rate = new Rate({
      product,
      review,
      store,
      price,
      stars,
      images: imagePath,
  });

  try {
      await rate.save();
      response.status(201).json({ message: "Review added successfully" });
  } catch (error) {
      response.status(500).json({ message: "Error saving review" });
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
  getStores,
  addReview,
  seedDatabase,
  removeReview,
};