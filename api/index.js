import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import roleRoute from "./routes/role.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import postRoute from "./routes/post.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);
app.use("/api/role", roleRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

//Response Handler middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(statusCode).json({
    success: [200, 201, 204].some((a) => a === statusCode) ? true : false,
    status: statusCode,
    message: message,
    data: err.data,
  });
});


//DB Connection
const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with an error status
  }
};
;



app.listen(8800, () => {
  connectMongoDb();
  console.log("Connected to backend");
});
