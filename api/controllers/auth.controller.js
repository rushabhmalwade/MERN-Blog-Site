import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

//signin
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields required"));
  }
  try {
    //why used findOne instead of exists menthod to check already existing user
    //For a sign-in operation, you usually need to retrieve the user’s document to verify credentials (such as password) and possibly other details. Therefore, findOne is typically more suitable for this purpose.
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(404, "Invalid password"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);

    const { password: pass, ...rest } = validUser._doc; // we removed password from whole object

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest); //instaed of sending whole object we removed password from it and sending it to client in order to avoid hackers getting access to the password
  } catch (error) {
    next(error);
  }
};
