import express from "express";
import { login, signup,logout } from "../controllers/auth.controller.js";
//creating a router and exporting it
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout",logout);

router.get("/signup", (req, res) => {
    res.status(200).send("This is the signup page. Please use POST to sign up.");
});

export default router;