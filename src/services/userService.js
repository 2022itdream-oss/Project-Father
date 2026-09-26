/**
 * User Service - Core Business Logic for Project Father
 */

function createUser({ name, email, role = "user" }) {
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    throw new Error("Invalid user name provided.");
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    throw new Error("Invalid user email address provided.");
  }

  return {
    id: `usr_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    name: name.trim(),
    email: email.toLowerCase().trim(),
    role,
    createdAt: new Date().toISOString(),
  };
}

function formatUserProfile(user) {
  if (!user || !user.id || !user.name) {
    throw new Error("Invalid user object.");
  }

  return `[User Profile] ID: ${user.id} | Name: ${user.name} | Role: ${user.role.toUpperCase()}`;
}

module.exports = {
  createUser,
  formatUserProfile,
};