import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log("Request body:", req.body);
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(400, "All fields required"));
  }

  // try {
  //   const existingUser = await User.findOne({ email });
  //   if (existingUser) {
  //     return next(errorHandler(400, "Email already in use"));
  //   }
  // } catch (error) {
  //   return next(errorHandler(500, "Error checking for existing user"));
  // }

  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log("hashed password ::", hashedPassword);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "user added to the database!" });
  } catch (error) {
    next(errorHandler(500, "Error saving new user to the database"));
  }
};
