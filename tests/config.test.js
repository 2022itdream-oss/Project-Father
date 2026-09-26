describe("Configuration Utility Suite", () => {
  let config;

  beforeEach(() => {
    jest.resetModules();
    config = require("../src/utils/config");
  });

  test("should load application configuration object", () => {
    expect(config).toHaveProperty("port");
    expect(config).toHaveProperty("environment");
    expect(config).toHaveProperty("appName");
  });
});