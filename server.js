"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./database");

const { connectDB, disconnectDB } = require("./database");


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();
const { getReview, addReview, seedDatabase, removeReview, getBrand, getAllReviews} = require("./modules/Handlers");

const PORT = process.env.PORT || 3001;

app.get("/test", (request, response) => {
	response.send("test request received");
});

app.get("/review", getReview);
app.get("/brands", getBrand);
app.get("/seed", seedDatabase);
app.get("/allReviews", getAllReviews)
app.post("/addReview", addReview);
app.delete("/removeReview", removeReview);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
console.log('We ARE LIVE');

process.on("SIGINT", async () => {
	await disconnectDB();
	process.exit(0);
});

