import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import blogRoutes from "./routes/blogRoutes.js";
dotenv.config();

const app = express();
connectDB();
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/blogs", blogRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5500;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
