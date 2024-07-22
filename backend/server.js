import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const app= express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //from request .body
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
//To excract request from request .body use the middleware



//app.get("/", (req, res)=>{
    //root route http localhost:5000/
    //res.send("Hello World");
//})
//use middlewares instead of routes in the main server



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server Running on Port ${PORT}`)
});