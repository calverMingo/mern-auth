import bcryptjs from "bcryptjs";
import User from "../models/user.models.js";


export const signup = async (req, res, next) => {
  const { username, password, email } = req.body;

  const hashpassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, password: hashpassword, email });

  try {
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    next(err);
  }
};
