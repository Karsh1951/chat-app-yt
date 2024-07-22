import express from "express";
import { sendMessage,getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router= express.Router();

router.post("/send/:id", protectRoute, sendMessage);//Takes the user id that would like to send a message
//get messages bwten 2 users(/) with the user id passed
router.get("/:id", protectRoute, getMessages);
export default router