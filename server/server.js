require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');
const { logInfo, logError } = require('./src/utils/logger');

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-testing';

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logInfo('Connected to MongoDB', { uri: MONGODB_URI.replace(/\/\/.*@/, '//***@') });
  })
  .catch((error) => {
    logError('MongoDB connection error', error);
    process.exit(1);
  });

// Handle MongoDB connection events
mongoose.connection.on('disconnected', () => {
  logError('MongoDB disconnected');
});

mongoose.connection.on('error', (error) => {
  logError('MongoDB error', error);
});

// Start server
const server = app.listen(PORT, () => {
  logInfo(`Server started on port ${PORT}`, {
    environment: process.env.NODE_ENV || 'development',
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logInfo('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logInfo('HTTP server closed');
    mongoose.connection.close(false, () => {
      logInfo('MongoDB connection closed');
      process.exit(0);
    });
  });
});

process.on('SIGINT', () => {
  logInfo('SIGINT signal received: closing HTTP server');
  server.close(() => {
    logInfo('HTTP server closed');
    mongoose.connection.close(false, () => {
      logInfo('MongoDB connection closed');
      process.exit(0);
    });
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logError('Unhandled Rejection at:', { promise, reason });
  server.close(() => {
    process.exit(1);
  });
});

module.exports = server;
