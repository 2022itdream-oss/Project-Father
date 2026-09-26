const request = require("supertest");
const app = require("../src/app");

describe("REST API Endpoint Suite", () => {
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
});