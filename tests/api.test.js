const request = require("supertest");
const app = require("../src/app");
const userRepository = require("../src/data/userRepository");

describe("REST API Endpoint Suite", () => {
  beforeEach(() => {
    userRepository.clear();
  });

  test("GET /api/health should return status 200 OK", async () => {
    const response = await request(app).get("/api/health");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("status", "ok");
  });

  test("POST /api/users should create a user and return 201 Created", async () => {
    const response = await request(app)
      .post("/api/users")
      .send({ name: "Alice Smith", email: "alice@example.com" });

    expect(response.statusCode).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.name).toBe("Alice Smith");
  });

  test("POST /api/users should return 400 Bad Request when email is invalid", async () => {
    const response = await request(app)
      .post("/api/users")
      .send({ name: "Bob", email: "invalid-email" });

    expect(response.statusCode).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.error).toContain("valid email address");
  });

  test("GET /api/users/:id should return 404 for non-existent user", async () => {
    const response = await request(app).get("/api/users/usr_missing");
    expect(response.statusCode).toBe(404);
    expect(response.body.success).toBe(false);
  });
});