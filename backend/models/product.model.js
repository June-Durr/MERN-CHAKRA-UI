import mongoose, { mongo } from "mongoose";

// Define the schema for a product document in the MongoDB collection
const productSchema = new mongoose.Schema(
  {
    name: {
      // Field for the product's name
      type: String, // Data type is String (text)
      required: true, // This field is mandatory and must be provided
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add 'createdAt' and 'updatedAt' timestamps to each document
  }
);

// Create a Mongoose model named 'Product' based on the productSchema
const Product = mongoose.model("Product", productSchema);

export default Product;
