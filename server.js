"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { getReview, addReview, seedDatabase, removeReview, resetDatabase } = require("./modules/Handlers");

require("./database");

// const Review = require("./models/Review");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/test", (request, response) => {
	response.send("test request received");
});

app.get("/review", getReview);
app.post("/addReview", addReview);
app.get("/seed", seedDatabase);
app.delete("/removeBook", removeReview);
app.delete("/reset", resetDatabase);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
console.log('We ARE LIVE')