const { createUser, formatUserProfile } = require("../src/services/userService");

describe("User Service Business Logic Suite", () => {
  test("should successfully create a structured user object", () => {
    const input = { name: "  John Doe  ", email: "JOHN@EXAMPLE.COM" };
    const user = createUser(input);

    expect(user).toHaveProperty("id");
    expect(user.name).toBe("John Doe");
    expect(user.email).toBe("john@example.com");
    expect(user.role).toBe("user");
    expect(user).toHaveProperty("createdAt");
  });

  test("should throw an error if user name is missing or invalid", () => {
    expect(() => createUser({ name: "", email: "test@example.com" })).toThrow(
      "Invalid user name provided."
    );
  });

  test("should throw an error if email is missing or invalid", () => {
    expect(() => createUser({ name: "Jane Doe", email: "invalid-email" })).toThrow(
      "Invalid user email address provided."
    );
  });

  test("should format user profile correctly", () => {
    const dummyUser = { id: "usr_123", name: "Alice", role: "admin" };
    const profile = formatUserProfile(dummyUser);

    expect(profile).toBe("[User Profile] ID: usr_123 | Name: Alice | Role: ADMIN");
  });
});