/**
 * Project Father - Core Application Entry Point
 */

const config = require("./utils/config");
const { logInfo, logError } = require("./utils/logger");
const { createUser, formatUserProfile } = require("./services/userService");

function main() {
  logInfo(`Starting ${config.appName} in [${config.environment}] mode...`);

  try {
    const newUser = createUser({
      name: "System Administrator",
      email: "admin@projectfather.internal",
      role: "admin",
    });

    logInfo(`User created successfully: ${newUser.id}`);
    logInfo(formatUserProfile(newUser));
  } catch (error) {
    logError(`Failed to process user service: ${error.message}`);
  }
}

main();