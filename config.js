import dotenv from "dotenv";
import mongoose from "mongoose";
const uri =
  "mongodb+srv://afsharikasra:vnqmDPWE6ySEc4bZ@cluster0.6m3s24w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

dotenv.config();

const config = {
  app_name: process.env["APP_NAME"],
  port: process.env["PORT"] ?? 3000,
  db_uri: process.env["DB_URI"] ?? uri,
  db_options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

export default config;
//vnqmDPWE6ySEc4bZ
