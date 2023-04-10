import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import reviewRouter from "./routes/review.route.js";
import orderRouter from "./routes/order.route.js";
import gigRouter from "./routes/gig.route.js";
import conversationRouter from "./routes/conversation.route.js";
import messageRouter from "./routes/message.route.js";

import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

const PORT = 3033;

mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected To MongoDB!");
  } catch (error) {
    console.log(error);
  }
};

// has been blocked by CORS policy --> To Overcome
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
);

// To Take Inputs from Client ---> In JSON Format
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/gigs", gigRouter);
app.use("/api/review", reviewRouter);
app.use("/api/order", orderRouter);
app.use("/api/conversation", conversationRouter);
app.use("/api/message", messageRouter);

// Error Handler Middleware

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something Went Wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(PORT, () => {
  connect(), console.log(`Connected To ${PORT} Server`);
});
