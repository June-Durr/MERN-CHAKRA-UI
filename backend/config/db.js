import mongoose from "mongoose";

// Function to establish a connection to the MongoDB database
export const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the Node.js process with a failure code (1) to prevent the app from running without a database connection
  }
};
