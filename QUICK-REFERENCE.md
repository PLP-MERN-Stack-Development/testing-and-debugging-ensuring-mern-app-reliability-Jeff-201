# Quick Reference Guide 🚀

One-page reference for common commands and workflows.

## 🏁 Getting Started (First Time)

```bash
# 1. Install dependencies
npm run install-all

# 2. Setup environment
cp server/.env.example server/.env
cp client/.env.example client/.env
# Edit server/.env with your MongoDB URI and JWT secret

# 3. Run the app
npm run dev
```

---

## 📁 Project Structure

```
/
├── server/              # Backend (Express + MongoDB)
│   ├── src/
│   │   ├── models/     # Mongoose models
│   │   ├── controllers/# Route handlers
│   │   ├── routes/     # API routes
│   │   ├── middleware/ # Custom middleware
│   │   └── utils/      # Helper functions
│   └── tests/          # Server tests
│
├── client/             # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   ├── hooks/      # Custom hooks
│   │   ├── context/    # Context providers
│   │   └── tests/      # Client tests
│   └── cypress/        # E2E tests
│
└── .vscode/            # Debug configs
```

---

## ⚡ Quick Commands

### Development

```bash
npm run dev              # Run both client & server
npm run server           # Run server only (port 5000)
npm run client           # Run client only (port 5173)
```

### Testing

```bash
npm test                 # Run all tests
npm run test:unit        # Run unit tests
npm run test:integration # Run integration tests
npm run test:e2e         # Run E2E tests (Cypress)
npm run test:coverage    # Generate coverage report
```

### Individual Testing

```bash
# Server tests
cd server
npm test                 # All server tests
npm run test:unit        # Server unit tests
npm run test:integration # Server integration tests

# Client tests
cd client
npm test                 # All client tests
npx cypress open         # Open Cypress UI
npm run test:e2e         # Run Cypress headless
```

---

## 🐛 Debugging

### VS Code Debug Configurations

Press `F5` and select:

1. **Debug Server** - Backend debugging
2. **Debug Server Tests** - Debug Jest tests (server)
3. **Debug Client (Chrome)** - Frontend debugging
4. **Debug Client Tests** - Debug Jest tests (client)
5. **Debug Cypress E2E** - Debug E2E tests
6. **Debug Full Stack** - Debug both client & server

### Manual Debugging

```bash
# Server with debugger
cd server
node --inspect src/server.js

# Client with dev tools
cd client
npm run dev
# Then open Chrome DevTools (F12)
```

---

## 🧪 Test Files Locations

### Server Tests
```
server/tests/
├── unit/
│   ├── auth.test.js
│   ├── validation.test.js
│   └── logger.test.js
└── integration/
    ├── auth.test.js
    └── posts.test.js
```

### Client Tests
```
client/src/tests/
└── unit/
    ├── Button.test.jsx
    ├── LoginForm.test.jsx
    ├── ErrorBoundary.test.jsx
    └── useForm.test.js

client/cypress/e2e/
├── login.cy.js
├── navigation.cy.js
└── user-interactions.cy.js
```

---

## 🌐 API Endpoints

### Authentication
```
POST   /api/auth/register     # Register new user
POST   /api/auth/login        # Login user
GET    /api/auth/me           # Get current user (auth)
PUT    /api/auth/profile      # Update profile (auth)
PUT    /api/auth/password     # Change password (auth)
```

### Posts
```
GET    /api/posts             # Get all posts
GET    /api/posts/:id         # Get single post
POST   /api/posts             # Create post (auth)
PUT    /api/posts/:id         # Update post (auth)
DELETE /api/posts/:id         # Delete post (auth)
POST   /api/posts/:id/like    # Toggle like (auth)
```

---

## 🔧 Environment Variables

### Server (.env)
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-app
JWT_SECRET=your_super_secret_key
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
```

### Client (.env)
```env
VITE_API_URL=http://localhost:5000/api
VITE_NODE_ENV=development
```

---

## 🔍 Common Tasks

### Add a New Component

```bash
# 1. Create component
touch client/src/components/MyComponent.jsx

# 2. Create test
touch client/src/tests/unit/MyComponent.test.jsx

# 3. Create styles (optional)
touch client/src/components/MyComponent.css
```

### Add a New API Endpoint

```bash
# 1. Create/update controller
# Edit: server/src/controllers/myController.js

# 2. Create/update route
# Edit: server/src/routes/my-route.js

# 3. Register route in app.js
# Edit: server/src/app.js

# 4. Create integration test
touch server/tests/integration/my-feature.test.js
```

### Run Specific Test File

```bash
# Server
cd server
npm test -- tests/unit/auth.test.js

# Client
cd client
npm test -- Button.test.jsx

# Cypress (specific file)
cd client
npx cypress run --spec "cypress/e2e/login.cy.js"
```

---

## 📊 Coverage Reports

### Generate Coverage

```bash
# All coverage
npm run test:coverage

# Server coverage only
cd server && npm test -- --coverage

# Client coverage only
cd client && npm test -- --coverage
```

### View Coverage Report

```bash
# Server
open server/coverage/lcov-report/index.html

# Client
open client/coverage/lcov-report/index.html
```

---

## 🚨 Troubleshooting

### Port Already in Use

```bash
# Find process using port 5000
lsof -ti:5000

# Kill process
kill -9 $(lsof -ti:5000)

# Or change port in .env
PORT=5001
```

### MongoDB Connection Issues

```bash
# Check if MongoDB is running
mongosh

# Start MongoDB (if local)
brew services start mongodb-community

# Or use MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
```

### Dependency Issues

```bash
# Clean install
rm -rf node_modules package-lock.json
rm -rf server/node_modules server/package-lock.json
rm -rf client/node_modules client/package-lock.json
npm run install-all

# Clear npm cache
npm cache clean --force
```

### Test Failures

```bash
# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- path/to/test.js

# Run with verbose output
npm test -- --verbose

# Clear Jest cache
npx jest --clearCache
```

---

## 📦 Git Commands

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

# Daily workflow
git status                    # Check status
git add .                     # Stage changes
git commit -m "message"       # Commit
git push                      # Push to GitHub
git pull                      # Pull changes

# Branching
git checkout -b feature-name  # Create branch
git checkout main             # Switch to main
git merge feature-name        # Merge branch
```

---

## 🔐 Security Checklist

Before pushing to GitHub:

- [ ] No `.env` files committed
- [ ] Secrets are in `.env` (not hardcoded)
- [ ] `.gitignore` includes `.env`
- [ ] Strong JWT_SECRET set
- [ ] MongoDB authentication enabled
- [ ] No API keys in code

---

## 📚 Documentation Files

| File | Description |
|------|-------------|
| `README.md` | Main documentation |
| `TESTING.md` | Testing strategy |
| `CONTRIBUTING.md` | How to contribute |
| `SECURITY.md` | Security guidelines |
| `CHANGELOG.md` | Version history |
| `GIT-GUIDE.md` | Git setup guide |
| `CHECKLIST.md` | Validation checklist |
| `PROJECT-SUMMARY.md` | Project overview |
| `QUICK-REFERENCE.md` | This file |

---

## 🎯 URLs

```
Local Development:
├── Client:  http://localhost:5173
├── Server:  http://localhost:5000
└── API:     http://localhost:5000/api

Production (example):
├── Client:  https://your-app.vercel.app
├── Server:  https://your-api.herokuapp.com
└── API:     https://your-api.herokuapp.com/api
```

---

## 💡 Tips

- **Use VS Code debugger** instead of console.log
- **Write tests first** (TDD approach)
- **Keep commits small** and focused
- **Update documentation** when adding features
- **Run tests before committing**
- **Use feature branches** for new work
- **Review TESTING.md** for testing patterns

---

## 🆘 Need Help?

1. Check `README.md` for detailed docs
2. Review `TESTING.md` for testing help
3. Check `CHECKLIST.md` for validation
4. Review `GIT-GUIDE.md` for Git help
5. Open an issue on GitHub

---

## 📞 Important Links

- [Node.js Docs](https://nodejs.org/docs)
- [React Docs](https://react.dev)
- [Express Docs](https://expressjs.com)
- [MongoDB Docs](https://docs.mongodb.com)
- [Jest Docs](https://jestjs.io)
- [Cypress Docs](https://docs.cypress.io)

---

**Happy Coding!** 🎉

*Keep this file open for quick reference while developing.*
