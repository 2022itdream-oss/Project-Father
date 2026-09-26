/**
 * Global Error Handling Middleware for Project Father
 */

const { logError } = require("../utils/logger");

function errorHandler(err, req, res, next) {
  logError(`Unhandled Error: ${err.message}`);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    error: err.message || "Internal Server Error",
  });
}

module.exports = errorHandler;