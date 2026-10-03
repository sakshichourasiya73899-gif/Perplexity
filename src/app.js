import { error } from "console";
import express from "express";
// import connectDB from "./config/db.js";


let app = express();
class ErrorHandler extends Error{
    constructor(message,statuscode){
    super(message);
    this.statuscode = statuscode;
    }
}
// connectDB();

app.use(express.json());
app.get("/get",(req,res,next)=>{
    return next(new ErrorHandler("unauthorized",401));
})


app.use((err,req,res,next)=>{
    err.statuscode = err.statuscode||500,
    err.message = err.message||"Internal Server Error...!",
    res.status(err.statuscode).json({
        message:err.message
    })
})

// app.use((err,req,res)=>{
//     message:err.message
// })
export default app;


