import { User } from "../model/user.js";
import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    // if token not exist in the header then return error:
    if (!authHeader) {
      return res.status(401).json({ message: "Please provide token" });
    }
    // if token exist then verify the token:
    // remove the bearer from the token using split(" ")
    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById({ _id: decode._id })
      .select("-password")
      .lean()
      .exec();
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    // if token is invalid then return error:
    return res.status(500).json({ msg: err.message });
  }
};
