import express from  "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router= express.Router();
//creating users visible from the sidebar
router.get("/", protectRoute, getUsersForSidebar)

export default router