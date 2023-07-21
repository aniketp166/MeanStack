import Role from "../models/Role.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res, next) => {
  try {
    const role = await Role.find({ role: "User" });
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: hashPassword,
      roles: role,
    });
    await newUser.save();
    return res.status(200).send("User Registration Successfully");
  } catch (error) {
    return res.status(500).send("Internal server Error!");
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("User not Found");
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).send("Incorrect Password");
    }
    return res.status(200).send("Login success");
  } catch (error) {
    return res.status(500).send("Internal server Error!");
  }
};
