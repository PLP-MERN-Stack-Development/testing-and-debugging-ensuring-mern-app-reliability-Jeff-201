require('dotenv').config();
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('./src/app');
const { logInfo, logError } = require('./src/utils/logger');

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-testing';

let mongoServer;

async function connectToDatabase() {
  try {
    if (process.env.NODE_ENV === 'test') {
      // Use MongoDB Memory Server for tests
      mongoServer = await MongoMemoryServer.create();
      const mongoUri = mongoServer.getUri();
      await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      logInfo('Connected to MongoDB Memory Server for testing');
    } else if (process.env.NODE_ENV === 'development' && !process.env.MONGODB_URI) {
      // Use MongoDB Memory Server for development if no URI provided
      mongoServer = await MongoMemoryServer.create({
        instance: {
          startupTimeout: 30000, // Increase timeout to 30 seconds
        },
      });
      const mongoUri = mongoServer.getUri();
      await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      logInfo('Connected to MongoDB Memory Server for development');
    } else {
      // Use provided MongoDB URI
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      logInfo('Connected to MongoDB', { uri: MONGODB_URI.replace(/\/\/.*@/, '//***@') });
    }
  } catch (error) {
    logError('Database connection error', error);
    process.exit(1);
  }
}

// Connect to database
connectToDatabase();

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
const gracefulShutdown = async () => {
  logInfo('Graceful shutdown initiated');
  server.close(async () => {
    logInfo('HTTP server closed');
    await mongoose.connection.close(false);
    logInfo('MongoDB connection closed');

    if (mongoServer) {
      await mongoServer.stop();
      logInfo('MongoDB Memory Server stopped');
    }

    process.exit(0);
  });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logError('Unhandled Rejection at:', { promise, reason });
  server.close(() => {
    process.exit(1);
  });
});

module.exports = server;
