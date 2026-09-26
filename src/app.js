const express = require("express");
const { createUser, formatUserProfile } = require("./services/userService");
const { logInfo, logError } = require("./utils/logger");

const app = express();
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// Create user REST endpoint
app.post("/api/users", (req, res) => {
  try {
    const user = createUser(req.body);
    logInfo(`API created user: ${user.id}`);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    logError(`API error creating user: ${error.message}`);
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = app;