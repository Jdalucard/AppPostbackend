import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
mongoose.set("strictQuery", false);
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Conectado a mongo db");
  } catch (error) {
    console.error(error);
  }
}
