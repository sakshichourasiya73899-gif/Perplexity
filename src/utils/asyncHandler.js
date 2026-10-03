// // Wraps an async controller so any thrown error (or rejected promise)
// // is forwarded to Express's error-handling middleware instead of
// // crashing the process or needing a try/catch in every controller.
// const asyncHandler = (requestHandler) => {
//   return (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
//   };
// };

// export { asyncHandler };