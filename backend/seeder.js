import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import blogs from "./data/blog.js";
import User from "./models/userModel.js";
import Blog from "./models/blogPostModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async (req, res) => {
  try {
    await Blog.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleBlogs = blogs.map((blog) => {
      return {
        ...blog,
        user: createdUsers[2]._id,
      };
    });

    await Blog.insertMany(sampleBlogs);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Blog.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
