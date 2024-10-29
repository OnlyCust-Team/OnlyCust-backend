"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require('path');

require("./database");

const { connectDB, disconnectDB } = require("./database");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


const app = express();

app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();
const { getReview, addReview, seedDatabase, removeReview, getStores } = require("./modules/Handlers");

const PORT = process.env.PORT || 3001;

app.get("/test", (request, response) => {
	response.send("test request received");
});

app.get("/review", getReview);
app.get("/stores", getStores);
app.post("/addReview", upload.single('images'), addReview);
app.get("/seed", seedDatabase);
app.delete("/removeReview", removeReview);

process.on("SIGINT", async () => {
	await disconnectDB();
	process.exit(0);
});


