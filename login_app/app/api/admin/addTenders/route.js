const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Replace with your actual MongoDB connection string
const MONGO_URI = "mongodb://localhost:27017/your_database_name";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define your Tender schema (replace with your desired schema)
const TenderSchema = new mongoose.Schema({
  Tender_title: String,
  Tender_description: String,
  publish_date: Date,
  closing_date: Date,
  Tender_status: String,
  category: String,
  Tender_documents: [String], // Array to store document paths
});

const Tender = mongoose.model("Tender", TenderSchema);

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// POST endpoint to handle form submission
app.post("/", async (req, res) => {
  const newTender = new Tender(req.body);
  try {
    const savedTender = await newTender.save();
    res.status(201).json(savedTender); // Send created tender data
  } catch (error) {
    console.error("Error saving tender:", error);
    res.status(500).json({ message: "Failed to save tender" });
  }
});

module.exports = app; // Export the app for use in Next.js API routes
