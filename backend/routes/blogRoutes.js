import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Blog from "../models/blogPostModel.js";

// @desc    Fetch all blogs
// @route   GET /api/blogs
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const blogs = await Blog.find({});

    res.json(blogs);
  })
);

// @desc    Fetch single blog
// @route   GET /api/blogs/:id
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (blog) {
      res.json(blog);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
