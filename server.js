"use strict";

require("dotenv").config();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const express = require("express");
const cors = require("cors");
const path = require('path');
const { getReview, addReview, seedDatabase, removeReview, getStores } = require("./modules/Handlers");

require("./database");

const app = express();
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
