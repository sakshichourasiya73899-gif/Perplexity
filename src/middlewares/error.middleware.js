// import mongoose from "mongoose";
// import { ApiError } from "../utils/ApiError.js";

// // Converts ANY thrown error - Mongoose errors, JWT errors, raw JS errors,
// // or your own ApiError - into a single consistent ApiError shape.
// const errorHandler = (err, req, res, next) => {
//   let error = err;

//   if (!(error instanceof ApiError)) {
//     let statusCode = error.statusCode || 500;
//     let message = error.message || "Something went wrong";

//     // Mongoose bad ObjectId
//     if (error instanceof mongoose.Error.CastError) {
//       statusCode = 400;
//       message = `Invalid value for field: ${error.path}`;
//     }

//     // Mongoose schema validation failure
//     else if (error instanceof mongoose.Error.ValidationError) {
//       statusCode = 400;
//       message = Object.values(error.errors)
//         .map((val) => val.message)
//         .join(", ");
//     }

//     // Mongo duplicate key (e.g. email already registered)
//     else if (error.code === 11000) {
//       statusCode = 409;
//       const field = Object.keys(error.keyValue || {})[0];
//       message = `${field} already exists`;
//     }

//     // JWT errors
//     else if (error.name === "JsonWebTokenError") {
//       statusCode = 401;
//       message = "Invalid access token";
//     } else if (error.name === "TokenExpiredError") {
//       statusCode = 401;
//       message = "Access token expired";
//     }

//     error = new ApiError(statusCode, message, error?.errors || [], err.stack);
//   }

//   const response = {
//     success: false,
//     message: error.message,
//     errors: error.errors,
//     // stack trace only in development - never leak internals in production
//     ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
//   };

//   return res.status(error.statusCode).json(response);
// };

// export { errorHandler };