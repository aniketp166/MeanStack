import express from "express";
import Role from "../models/Role.js";
import {
  createRole,
  deleteRole,
  getAllRoles,
  updateRole,
} from "../controllers/role.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create new Role in Db
router.post("/create", verifyAdmin, createRole);

// update role in DB
router.put("/update/:id", verifyAdmin, updateRole);

router.get("/getAll", verifyAdmin, getAllRoles);

router.delete("/delete/:id", verifyAdmin, deleteRole);

export default router;
