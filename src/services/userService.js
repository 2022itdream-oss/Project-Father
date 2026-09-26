const userRepository = require("../data/userRepository");

function createUser({ name, email, role = "user" }) {
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    throw new Error("Invalid user name provided.");
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    throw new Error("Invalid user email address provided.");
  }

  const newUser = {
    id: `usr_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    name: name.trim(),
    email: email.toLowerCase().trim(),
    role,
    createdAt: new Date().toISOString(),
  };

  return userRepository.save(newUser);
}

function getUserById(id) {
  return userRepository.findById(id);
}

function getAllUsers() {
  return userRepository.findAll();
}

function formatUserProfile(user) {
  if (!user || !user.id || !user.name) {
    throw new Error("Invalid user object.");
  }

  return `[User Profile] ID: ${user.id} | Name: ${user.name} | Role: ${user.role.toUpperCase()}`;
}

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  formatUserProfile,
};