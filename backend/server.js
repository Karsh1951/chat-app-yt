import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"

const app= express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res)=>{
    //root route http localhost:5000/
    res.send("Hello World");
})
//use middlewares instead of routes in the main server
app.use("/api/auth", authRoutes)

app.listen(PORT, () => console.log(`server Running on Port ${PORT}`));