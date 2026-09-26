const app = require("./app");
const config = require("./utils/config");
const { logInfo } = require("./utils/logger");

const PORT = config.port || 3000;

app.listen(PORT, () => {
  logInfo(`${config.appName} HTTP server running on port ${PORT}`);
});