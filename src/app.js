import express from "express";
// import connectDB from "./config/db.js";


let app = express();

// connectDB();

app.use(express.json());

export default app;