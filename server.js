"use strict";

const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

require("./database");

const { connectDB, disconnectDB } = require("./database");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();
const { getReview, addProduct, addReview, seedDatabase, removeReview, getBrand } = require("./modules/Handlers");

const PORT = process.env.PORT || 3001;

app.get("/test", (request, response) => {
	response.send("test request received");
});

app.get("/review", getReview);
app.get("/brands", getBrand);
app.get("/seed", seedDatabase);
app.post("/addProduct", addProduct)
app.post("/addReview", addReview);
app.delete("/removeReview", removeReview);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
console.log('We ARE LIVE');

process.on("SIGINT", async () => {
	await disconnectDB();
	process.exit(0);
});

