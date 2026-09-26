const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const { createUser, getAllUsers, getUserById } = require("./services/userService");
const { validateUserCreation } = require("./middleware/validateUser");
const errorHandler = require("./middleware/errorHandler");
const { logInfo } = require("./utils/logger");

const app = express();
app.use(express.json());

// Swagger UI Route
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Check server health status
 *     responses:
 *       200:
 *         description: Returns health status
 */
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

/**
 * @openapi
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input payload
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Returns array of users
 */
app.post("/api/users", validateUserCreation, (req, res, next) => {
  try {
    const user = createUser(req.body);
    logInfo(`API created user: ${user.id}`);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
});

app.get("/api/users", (req, res) => {
  const users = getAllUsers();
  res.status(200).json({ success: true, count: users.length, data: users });
});

app.get("/api/users/:id", (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ success: false, error: "User not found." });
  }
  res.status(200).json({ success: true, data: user });
});

app.use(errorHandler);

module.exports = app;