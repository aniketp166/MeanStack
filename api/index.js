import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to Db");
  } catch (error) {
    throw error;
  }
};

app.listen(8800, () => {
  connectMongoDb();
  console.log("Connected to backend");
});
