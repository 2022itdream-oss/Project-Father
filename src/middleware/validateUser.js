/**
 * Request Body Validation Middleware for User Creation
 */

function validateUserCreation(req, res, next) {
  const { name, email } = req.body || {};

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({
      success: false,
      error: "Field 'name' is required and must be a non-empty string.",
    });
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({
      success: false,
      error: "Field 'email' is required and must be a valid email address.",
    });
  }

  next();
}

module.exports = {
  validateUserCreation,
};