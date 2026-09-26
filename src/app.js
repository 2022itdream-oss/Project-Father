const express = require("express");
const { createUser, getAllUsers, getUserById } = require("./services/userService");
const { validateUserCreation } = require("./middleware/validateUser");
const errorHandler = require("./middleware/errorHandler");
const { logInfo, logError } = require("./utils/logger");

const app = express();
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// Create user REST endpoint with validation middleware
app.post("/api/users", validateUserCreation, (req, res, next) => {
  try {
    const user = createUser(req.body);
    logInfo(`API created user: ${user.id}`);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
});

// Get all users
app.get("/api/users", (req, res) => {
  const users = getAllUsers();
  res.status(200).json({ success: true, count: users.length, data: users });
});

// Fetch user by ID endpoint
app.get("/api/users/:id", (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ success: false, error: "User not found." });
  }
  res.status(200).json({ success: true, data: user });
});

// Register global error handler
app.use(errorHandler);

module.exports = app;