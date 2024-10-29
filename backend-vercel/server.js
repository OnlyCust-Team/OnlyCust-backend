"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./database");

const { connectDB, disconnectDB } = require("./db");
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

app.listen(PORT, () => console.log(`listening on ${PORT}`));
console.log('We ARE LIVE');

process.on("SIGINT", async () => {
	await disconnectDB();
	process.exit(0);
});


