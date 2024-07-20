import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router= express.Router();

router.post("/send/:id", protectRoute, sendMessage);//Takes the user id that would like to send a message

export default router