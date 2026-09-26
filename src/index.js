/**
 * Project Father - Core Application Entry Point
 */

const config = require("./utils/config");
const { logInfo, logError } = require("./utils/logger");

function main() {
  logInfo(`Starting ${config.appName} in [${config.environment}] mode...`);
  logInfo(`Server initialized on port ${config.port}`);
}

main();