import { error } from "console";
import express from "express";
// import connectDB from "./config/db.js";


let app = express();

// connectDB();

app.use(express.json());
app.get("/get",(req,res,next)=>{
    next(new error("user not found....!"));
})


app.use((err,req,res,next)=>{
    res.status(404).json({
        message:err.message
    })
})

// app.use((err,req,res)=>{
//     message:err.message
// })
export default app;


