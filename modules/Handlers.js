const Product = require("../models/Product");

const getReview = async (request, response) => {
  try {
    const products = await Product.find({});
    response.status(200).json(products);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error fetching reviews" });
  }
};

const getAllReviews = async (request, response) => {
  try {
    const products = await Product.find({});
    const allReviews = products.flatMap(product => product.reviews);
    response.status(200).json(allReviews);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error fetching reviews" });
  }
};
const getBrand = async (request, response) => {
  try {
    const stores = await Product.distinct('brand');
    response.status(200).json(stores);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error fetching stores" });
  }
};

const addReview = async (request, response) => {
  const { productName, brand, review, username, stars, price } = request.body;

  if (!productName || !brand || !username || !review || !stars || !price) {
    return response.status(400).json({ message: "All fields are required" });
  }
  if (stars < 1 || stars > 5) {
    return response.status(400).json({ message: "Stars must be between 1 and 5" });
  }

  try {
    const product = await Product.findOne({ name: productName, brand });
    if (!product) {
      return response.status(404).json({ message: "Product not found" });
    }

    product.reviews.push({
      username,
      review,
      stars,
      price,
      created_at: new Date()
    });

    await product.save();
    response.status(201).json({ message: "Review added successfully" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error saving review" });
  }
};

const seedDatabase = async (request, response) => {
  await require("./seed")();
  response.status(201).json({ message: "Seed executed" });
};

const removeReview = async (request, response) => {
  try {
    const { productId, reviewId } = request.query;
    if (!productId || !reviewId) {
      return response.status(400).json({ message: "Product ID and Review ID are required" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return response.status(404).json({ message: "Product not found" });
    }

    product.reviews = product.reviews.filter((review) => review._id.toString() !== reviewId);
    await product.save();
    response.status(200).json({ message: "Review removed successfully" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error removing review" });
  }
};

module.exports = {
  getReview,
  getBrand,
  addReview,
  getAllReviews,
  seedDatabase,
  removeReview,
};