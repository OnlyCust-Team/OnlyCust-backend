const mongoose = require("mongoose");
const URL = process.env.DATABASE_URL;

async function main() {
	return await mongoose.connect(URL);
}

main().catch((err) => console.log(err));