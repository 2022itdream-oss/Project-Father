const { logInfo, logError } = require("../src/utils/logger");

describe("Logger Utility Suite", () => {
  let logSpy;
  let errorSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
    errorSpy.mockRestore();
  });

  test("logInfo should format message with [INFO] tag and log to console", () => {
    const result = logInfo("Application initialized");

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(result).toContain("[INFO]");
    expect(result).toContain("Application initialized");
  });

  test("logError should format message with [ERROR] tag and log to console.error", () => {
    const result = logError("Database connection failed");

    expect(errorSpy).toHaveBeenCalledTimes(1);
    expect(result).toContain("[ERROR]");
    expect(result).toContain("Database connection failed");
  });
});