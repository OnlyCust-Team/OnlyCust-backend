const mongoose = require("mongoose");

const DB_URL = process.env.DATABASE_URL

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); 
    }
};

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log("MongoDB disconnected");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); 
    }
};

module.exports = { connectDB, disconnectDB };