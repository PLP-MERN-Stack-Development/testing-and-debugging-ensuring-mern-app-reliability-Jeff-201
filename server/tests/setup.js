// Test setup file for server tests
require('dotenv').config();

// Set test environment
process.env.NODE_ENV = 'test';

// Increase Jest timeout for database operations
jest.setTimeout(30000);