import express from "express";
import Role from "../models/Role.js";
import { createRole, deleteRole, getAllRoles, updateRole } from "../controllers/role.controller.js";

const router = express.Router();

// Create new Role in Db
router.post("/create", createRole );

// update role in DB
router.put("/update/:id", updateRole);

router.get("/getAll", getAllRoles);

router.delete("/delete/:id", deleteRole)

export default router;
