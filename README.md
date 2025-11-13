# 🧪 MERN Testing & Debugging Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)](https://nodejs.org)
[![React Version](https://img.shields.io/badge/react-18.2.0-blue.svg)](https://reactjs.org/)

A production-ready **MERN (MongoDB, Express, React, Node.js)** stack application demonstrating comprehensive testing strategies, debugging techniques, and best practices for building reliable web applications.

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Testing Strategy](#-testing-strategy)
- [Running Tests](#-running-tests)
- [Test Coverage](#-test-coverage)
- [Debugging Guide](#-debugging-guide)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

This project demonstrates a complete MERN stack application with:

- **Comprehensive Testing**: Unit, integration, and end-to-end tests
- **Advanced Debugging**: Error boundaries, logging, performance monitoring
- **Production-Ready**: Authentication, validation, error handling
- **Best Practices**: Clean code, modular architecture, documentation

## ✨ Features

### Frontend (React + Vite)
- ⚛️ React 18 with modern hooks
- 🎨 Component-based architecture
- 🛡️ Error boundaries for graceful error handling
- 🔄 Custom hooks for reusable logic
- 📱 Responsive design
- 🧪 React Testing Library for component tests
- 🎭 Cypress for E2E testing

### Backend (Node.js + Express)
- 🚀 RESTful API architecture
- 🔐 JWT-based authentication
- 🔒 Password hashing with bcrypt
- ✅ Request validation with express-validator
- 📝 Comprehensive logging system
- 🗄️ MongoDB with Mongoose ODM
- 🧪 Jest + Supertest for API testing

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 18 + Vite | UI rendering & build tool |
| **Styling** | CSS3 | Responsive design |
| **State Management** | Context API | Global state |
| **Backend** | Node.js + Express | Server & API |
| **Database** | MongoDB + Mongoose | Data persistence |
| **Authentication** | JWT + bcrypt | Secure auth |
| **Unit Testing** | Jest | Test framework |
| **Component Testing** | React Testing Library | Component tests |
| **API Testing** | Supertest | Integration tests |
| **E2E Testing** | Cypress | End-to-end tests |
| **Debugging** | VS Code Debugger, Chrome DevTools | Development tools |

## 📂 Project Structure

```
mern-testing/
├── client/                     # React frontend
│   ├── src/
│   │   ├── api/               # API client & services
│   │   ├── components/        # Reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   └── LoginForm.jsx
│   │   ├── context/           # React Context providers
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/             # Custom React hooks
│   │   │   ├── useApi.js
│   │   │   └── useForm.js
│   │   ├── pages/             # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── NotFound.jsx
│   │   ├── tests/             # Test files
│   │   │   ├── unit/          # Unit tests
│   │   │   └── integration/   # Integration tests
│   │   ├── App.jsx            # Root component
│   │   └── main.jsx           # Entry point
│   ├── cypress/               # E2E tests
│   │   ├── e2e/
│   │   └── support/
│   ├── index.html
│   ├── vite.config.js
│   ├── jest.config.js
│   └── package.json
│
├── server/                     # Express backend
│   ├── src/
│   │   ├── controllers/       # Route controllers
│   │   │   ├── authController.js
│   │   │   └── postController.js
│   │   ├── models/            # Mongoose models
│   │   │   ├── User.js
│   │   │   ├── Post.js
│   │   │   └── Category.js
│   │   ├── routes/            # API routes
│   │   │   ├── auth.js
│   │   │   └── posts.js
│   │   ├── middleware/        # Custom middleware
│   │   │   ├── auth.js
│   │   │   ├── errorHandler.js
│   │   │   └── validator.js
│   │   ├── utils/             # Utility functions
│   │   │   ├── auth.js
│   │   │   ├── validation.js
│   │   │   └── logger.js
│   │   └── app.js             # Express app
│   ├── tests/                 # Test files
│   │   ├── unit/              # Unit tests
│   │   └── integration/       # Integration tests
│   ├── server.js              # Server entry point
│   ├── jest.config.js
│   └── package.json
│
├── .vscode/                   # VS Code configurations
│   ├── launch.json            # Debug configurations
│   ├── settings.json
│   └── extensions.json
├── jest.config.js             # Root Jest config
├── package.json               # Root dependencies
├── .gitignore
├── .eslintrc.js
├── .prettierrc.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0
- MongoDB >= 4.4 (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/testing-and-debugging-ensuring-mern-app-reliability-Github-Emmi.git
   cd testing-and-debugging-ensuring-mern-app-reliability-Github-Emmi
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   
   Create `.env` file in the `server` directory:
   ```bash
   cp server/.env.example server/.env
   ```
   
   Update the values:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern-testing
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRES_IN=7d
   CLIENT_URL=http://localhost:5173
   ```

4. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   
   # Or use MongoDB Atlas cloud database
   ```

5. **Run the application**
   
   ```bash
   # Start both client and server concurrently
   npm run dev
   
   # Or start them separately:
   # Terminal 1 - Server
   npm run server
   
   # Terminal 2 - Client
   npm run client
   ```

6. **Access the application**
   - Client: http://localhost:5173
   - Server: http://localhost:5000
   - API Health Check: http://localhost:5000/health

## 🧪 Testing Strategy

This project implements a **comprehensive three-tier testing strategy**:

### 1. Unit Testing
- **What**: Individual functions, components, and modules in isolation
- **Tools**: Jest, React Testing Library
- **Coverage**: Utilities, hooks, components, middleware
- **Location**: `*/tests/unit/`

### 2. Integration Testing
- **What**: API endpoints, database operations, component interactions
- **Tools**: Jest, Supertest, MongoDB Memory Server
- **Coverage**: API routes, authentication flows, CRUD operations
- **Location**: `*/tests/integration/`

### 3. End-to-End Testing
- **What**: Complete user flows and application scenarios
- **Tools**: Cypress
- **Coverage**: Login, navigation, form submissions, user interactions
- **Location**: `client/cypress/e2e/`

## 🏃 Running Tests

### Run All Tests
```bash
npm test
```

### Server-Side Tests
```bash
# All server tests with coverage
npm run test:unit

# Integration tests only
npm run test:integration

# Watch mode
cd server && npm run test:watch
```

### Client-Side Tests
```bash
# All client tests with coverage
npm run test:client

# Watch mode
cd client && npm test:watch
```

### E2E Tests
```bash
# Interactive mode
npm run test:e2e

# Headless mode
cd client && npm run test:e2e:headless
```

## 📊 Test Coverage

The project maintains **>70% code coverage** across all modules:

### Example Coverage Report
```
🧪 Coverage Summary:
--------------------------------
File           | % Stmts | % Branch | % Funcs | % Lines
--------------------------------
All files      |   85.6  |   78.4   |   90.1  |   84.9
 Server        |   87.2  |   80.1   |   91.3  |   86.5
  Utils        |   92.4  |   85.7   |   95.2  |   91.8
  Controllers  |   85.1  |   78.3   |   88.9  |   84.3
  Middleware   |   88.7  |   82.1   |   90.5  |   87.9
 Client        |   84.2  |   76.9   |   89.0  |   83.5
  Components   |   86.5  |   79.2   |   91.2  |   85.7
  Hooks        |   90.3  |   82.5   |   93.8  |   89.6
--------------------------------
```

To generate coverage reports:
```bash
npm test -- --coverage
```

View HTML coverage report:
```bash
open coverage/index.html
```

## 🐛 Debugging Guide

### VS Code Debugging

This project includes pre-configured debug configurations in `.vscode/launch.json`:

1. **Debug Server**: Debug the Express server
2. **Debug Client**: Debug React app in Chrome
3. **Debug Server Tests**: Debug Jest tests for server
4. **Debug Client Tests**: Debug Jest tests for client
5. **Debug Cypress E2E**: Debug Cypress tests
6. **Debug Full Stack**: Debug both client and server simultaneously

**To start debugging:**
1. Open VS Code
2. Press `F5` or go to Run and Debug panel
3. Select a configuration
4. Set breakpoints and debug!

### Client-Side Debugging

**Chrome DevTools:**
- React Developer Tools for component inspection
- Network tab for API calls
- Console for error messages
- Performance tab for profiling

**Error Boundaries:**
- Implemented in `ErrorBoundary.jsx`
- Catches React component errors
- Shows user-friendly error messages
- Logs errors in development mode

### Server-Side Debugging

**Logging System:**
```javascript
import { logInfo, logError, logWarn, logDebug } from './utils/logger';

logInfo('User logged in', { userId: user.id });
logError('Database connection failed', error);
logWarn('High memory usage detected');
logDebug('Processing request', { data });
```

**Performance Monitoring:**
```javascript
const startTime = Date.now();
// ... operation
logPerformance('Database Query', startTime);
```

**Node Inspector:**
```bash
node --inspect server.js
# Then open chrome://inspect in Chrome
```

### Common Debugging Scenarios

**Problem: API request failing**
1. Check Network tab in DevTools
2. Verify request headers include auth token
3. Check server logs for error messages
4. Verify MongoDB connection

**Problem: Component not rendering**
1. Check React DevTools component tree
2. Verify props are being passed correctly
3. Check console for JavaScript errors
4. Use Error Boundary to catch errors

**Problem: Test failing**
1. Run test in watch mode
2. Add `console.log` statements
3. Use debugger with VS Code
4. Check test setup and mocks

## 📚 API Documentation

### Authentication Endpoints

#### POST `/api/auth/register`
Register a new user
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "Password123"
}
```

#### POST `/api/auth/login`
Login user
```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

#### GET `/api/auth/me`
Get current user (requires authentication)

### Posts Endpoints

#### GET `/api/posts`
Get all posts (with pagination, filtering)

Query parameters:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `status`: Filter by status
- `category`: Filter by category
- `author`: Filter by author

#### GET `/api/posts/:id`
Get single post by ID

#### POST `/api/posts`
Create new post (requires authentication)
```json
{
  "title": "My Post Title",
  "content": "Post content here...",
  "category": "categoryId",
  "tags": ["tag1", "tag2"]
}
```

#### PUT `/api/posts/:id`
Update post (requires authentication)

#### DELETE `/api/posts/:id`
Delete post (requires authentication)

#### POST `/api/posts/:id/like`
Toggle like on post (requires authentication)

## 🚢 Deployment

### Server Deployment (Render/Heroku)

1. **Set environment variables**
2. **Configure MongoDB Atlas**
3. **Deploy**
   ```bash
   git push heroku main
   ```

### Client Deployment (Vercel/Netlify)

1. **Build the client**
   ```bash
   cd client && npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   vercel deploy
   ```

### Environment Variables for Production
- `NODE_ENV=production`
- `MONGODB_URI`: MongoDB Atlas connection string
- `JWT_SECRET`: Strong secret key
- `CLIENT_URL`: Production client URL

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

**Your Name**
- GitHub: [@Github-Emmi](https://github.com/Github-Emmi)

## 🙏 Acknowledgments

- PLP MERN Stack Development Program
- React Testing Library documentation
- Jest documentation
- Cypress documentation
- MongoDB documentation

---

**Built with ❤️ for learning and demonstrating MERN stack testing best practices**
  - Sample React components with test files
  - Express routes with test files
  - Jest and testing library configurations
  - Example tests for reference

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Basic understanding of testing concepts

## Testing Tools

- Jest: JavaScript testing framework
- React Testing Library: Testing utilities for React
- Supertest: HTTP assertions for API testing
- Cypress/Playwright: End-to-end testing framework
- MongoDB Memory Server: In-memory MongoDB for testing

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required tests (unit, integration, and end-to-end)
2. Achieve at least 70% code coverage for unit tests
3. Document your testing strategy in the README.md
4. Include screenshots of your test coverage reports
5. Demonstrate debugging techniques in your code

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Cypress Documentation](https://docs.cypress.io/)
- [MongoDB Testing Best Practices](https://www.mongodb.com/blog/post/mongodb-testing-best-practices) 