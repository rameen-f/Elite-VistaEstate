import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

// 1. Optimized Dynamic CORS for Vercel & Localhost
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      return callback(null, true); // Dynamically allows origin & preserves credentials
    },
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// 2. Safe MongoDB Serverless Connection Caching
let isConnected = false;

const connectDB = async () => {
  if (isConnected && mongoose.connection.readyState === 1) {
    return;
  }
  try {
    const mongoUri = process.env.MONGO ? process.env.MONGO.trim() : "";
    if (!mongoUri) {
      throw new Error("MONGO environment variable is not defined!");
    }
    const db = await mongoose.connect(mongoUri);
    isConnected = db.connections[0].readyState === 1;
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    throw err; // Pass error to Express handler instead of app crash
  }
};

// Middleware to ensure DB connection before handling API routes
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    next(error);
  }
});

// Root test endpoint
app.get("/", (req, res) => {
  res.send("Elite VistaEstate Backend API is running!");
});

// API Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// 3. Conditional Listener (Local Development vs Vercel Serverless)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
