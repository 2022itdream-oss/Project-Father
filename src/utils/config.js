require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || "development",
  logLevel: process.env.LOG_LEVEL || "info",
  appName: process.env.APP_NAME || "Project Father",
};

module.exports = config;