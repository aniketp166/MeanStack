import express from "express";
import {
  login,
  registerAdmin,
  registerUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Register
router.post("/register", registerUser);

router.post("/login", login);

// admin register
router.post("/register-admin", registerAdmin);
    
export default router;
