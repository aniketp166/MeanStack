import Role from "../models/Role.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { CreateError } from "../utils/error.js";
import { CreateSuccess } from "../utils/success.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return next(CreateError(403, "Email already exists"));
    }
    const userRole = await Role.findOne({ role: "User" });

    if (!userRole) {
      return res.status(500).send("User role not found");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: hashPassword,
      roles: userRole,
    });
    await newUser.save();
    return next(CreateSuccess(200, "User Registered Successfully"));
  } catch (error) {
    return res.status(500).send("Internal server Error!");
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email }).populate(
      "roles",
      "role"
    );
    const { roles } = user;
    if (!user) {
      return next(CreateError(404, "User not Found"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return next(CreateError(400, "Incorrect Password"));
    }
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
        roles: roles,
      },
      process.env.JWT_SECRET
    );
    //  return next(CreateSuccess(200, "Login Success!"));
    res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      status: 200,
      message: "Login Success",
      data: user,
    });
  } catch (error) {
    return res.status(500).send("Internal server Error!");
  }
};
export const registerAdmin = async (req, res, next) => {
  try {
    const role = await Role.find({});
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName, 
      userName: req.body.userName,
      email: req.body.email,
      password: hashPassword,
      isAdmin: true,
      roles: role,
    });
    await newUser.save();
    return next(CreateSuccess(200, "Admin Registered Successfully"));
  } catch (error) {
    return res.status(500).send("Internal server Error!");
  }
};
 