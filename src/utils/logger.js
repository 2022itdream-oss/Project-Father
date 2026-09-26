/**
 * Standardized logging utility for Project Father
 */

function logInfo(message) {
  const output = `[INFO] ${new Date().toISOString()}: ${message}`;
  console.log(output);
  return output;
}

function logError(message) {
  const output = `[ERROR] ${new Date().toISOString()}: ${message}`;
  console.error(output);
  return output;
}

module.exports = { logInfo, logError };