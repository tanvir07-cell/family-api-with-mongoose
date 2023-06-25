import express from "express";
import { connectDB } from "../../../connect.js";
import { User } from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    await connectDB();
    const { name, email, password } = req.body;
    // check the use is exist or not:
    const user = await User.findOne({ email }).lean().exec();
    // if user exist then return error:
    if (user) {
      return res.status(400).json({ msg: "The email already exists." });
    }
    // if user not exist then create new user and hash the password:
    // generate salt to hash password:
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await User.create({ name, email, password: hash });
    return res.status(201).json({ msg: "User created successfully!", newUser });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    await connectDB();
    const { email, password } = req.body;
    const user = await User.findOne({ email }).lean().exec();
    // if user not exist then return error:
    if (!user) {
      return res.status(400).json({ msg: "User does not exist." });
    }
    // if user exist then compare the password:
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    // if all password and gmail ok then create a jwt token:
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "2h" }
    );
    return res.status(200).json({ token, user: user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
});

export default router;
