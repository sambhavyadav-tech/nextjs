import mongoose from "mongoose";

const connectMongoDB = async () => {
  if (mongoose.connection.readyState) {
    console.log("Already connected to MongoDB.");
    return;
  }

  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is not defined in your environment.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    // Handle the error as needed (retry, notify, etc.)
  }
};

export default connectMongoDB;
