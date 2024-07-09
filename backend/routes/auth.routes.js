import express from "express";
import { login, signup,logout } from "../controllers/auth.controller.js";
//creating a router and exporting it
const router = express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)

export default router;