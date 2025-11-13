/**
 * Logger utility for debugging and monitoring
 */

const LOG_LEVELS = {
  ERROR: 'ERROR',
  WARN: 'WARN',
  INFO: 'INFO',
  DEBUG: 'DEBUG',
};

/**
 * Format log message with timestamp and level
 * @param {string} level - Log level
 * @param {string} message - Log message
 * @param {Object} metadata - Additional metadata
 * @returns {string} Formatted log message
 */
const formatLog = (level, message, metadata = {}) => {
  const timestamp = new Date().toISOString();
  const metaString = Object.keys(metadata).length > 0 ? JSON.stringify(metadata) : '';
  return `[${timestamp}] [${level}] ${message} ${metaString}`;
};

/**
 * Log error message
 * @param {string} message - Error message
 * @param {Error|Object} error - Error object or metadata
 */
const logError = (message, error = {}) => {
  const metadata = error instanceof Error 
    ? { message: error.message, stack: error.stack }
    : error;
  console.error(formatLog(LOG_LEVELS.ERROR, message, metadata));
};

/**
 * Log warning message
 * @param {string} message - Warning message
 * @param {Object} metadata - Additional metadata
 */
const logWarn = (message, metadata = {}) => {
  console.warn(formatLog(LOG_LEVELS.WARN, message, metadata));
};

/**
 * Log info message
 * @param {string} message - Info message
 * @param {Object} metadata - Additional metadata
 */
const logInfo = (message, metadata = {}) => {
  console.log(formatLog(LOG_LEVELS.INFO, message, metadata));
};

/**
 * Log debug message (only in development)
 * @param {string} message - Debug message
 * @param {Object} metadata - Additional metadata
 */
const logDebug = (message, metadata = {}) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(formatLog(LOG_LEVELS.DEBUG, message, metadata));
  }
};

/**
 * Log HTTP request
 * @param {Object} req - Express request object
 */
const logRequest = (req) => {
  logInfo('HTTP Request', {
    method: req.method,
    url: req.url,
    ip: req.ip,
    userAgent: req.get('user-agent'),
  });
};

/**
 * Performance logger
 * @param {string} operation - Operation name
 * @param {number} startTime - Start time in milliseconds
 */
const logPerformance = (operation, startTime) => {
  const duration = Date.now() - startTime;
  logDebug(`Performance: ${operation}`, { duration: `${duration}ms` });
};

module.exports = {
  logError,
  logWarn,
  logInfo,
  logDebug,
  logRequest,
  logPerformance,
  LOG_LEVELS,
};
