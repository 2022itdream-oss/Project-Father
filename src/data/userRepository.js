/**
 * User Repository - Data Access Layer for Project Father
 */

const users = new Map();

function save(user) {
  if (!user || !user.id) {
    throw new Error("Cannot save invalid user entity.");
  }
  users.set(user.id, { ...user });
  return { ...users.get(user.id) };
}

function findById(id) {
  const user = users.get(id);
  return user ? { ...user } : null;
}

function findAll() {
  return Array.from(users.values()).map((user) => ({ ...user }));
}

function clear() {
  users.clear();
}

module.exports = {
  save,
  findById,
  findAll,
  clear,
};