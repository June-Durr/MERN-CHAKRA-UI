//entry point for api
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path";

dotenv.config(); // Load environment variables from the .env file

const app = express(); // Create an instance of your Express application
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); //allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req,res)=> {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});
}

app.listen(4000, () => {
  // Start the server on port 4000
  connectDB(); // Establish a connection to the database
  console.log("server started at http://localhost:" + PORT);
});
