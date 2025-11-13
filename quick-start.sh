#!/bin/bash

# MERN Testing App - Quick Start Script
# This script helps you get started quickly with the application

echo "🚀 MERN Testing & Debugging App - Quick Start"
echo "=============================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed${NC}"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}✅ Node.js $(node --version) detected${NC}"

# Check if MongoDB is running (optional check)
if command -v mongod &> /dev/null; then
    echo -e "${GREEN}✅ MongoDB is installed${NC}"
else
    echo -e "${YELLOW}⚠️  MongoDB not detected locally${NC}"
    echo "You can use MongoDB Atlas or install MongoDB locally"
fi

echo ""
echo "📦 Step 1: Installing dependencies..."
echo "-------------------------------------"
npm run install-all

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Dependencies installed successfully${NC}"
echo ""

# Setup environment files
echo "⚙️  Step 2: Setting up environment files..."
echo "-------------------------------------------"

# Server .env
if [ ! -f "server/.env" ]; then
    cp server/.env.example server/.env
    echo -e "${GREEN}✅ Created server/.env from example${NC}"
    echo -e "${YELLOW}⚠️  Please update server/.env with your MongoDB URI and JWT secret${NC}"
else
    echo -e "${YELLOW}ℹ️  server/.env already exists${NC}"
fi

# Client .env
if [ ! -f "client/.env" ]; then
    cp client/.env.example client/.env
    echo -e "${GREEN}✅ Created client/.env from example${NC}"
else
    echo -e "${YELLOW}ℹ️  client/.env already exists${NC}"
fi

echo ""
echo "🧪 Step 3: Running tests..."
echo "---------------------------"
echo "Running a quick test to verify setup..."

# Run a quick test
npm run test:unit -- --passWithNoTests 2>&1 | head -20

echo ""
echo "✨ Setup Complete!"
echo "=================="
echo ""
echo "Next steps:"
echo ""
echo "1. Configure your environment:"
echo "   ${YELLOW}Edit server/.env with your MongoDB URI and JWT secret${NC}"
echo ""
echo "2. Start the development servers:"
echo "   ${GREEN}npm run dev${NC}"
echo "   This will start both client (http://localhost:5173) and server (http://localhost:5000)"
echo ""
echo "3. Run tests:"
echo "   ${GREEN}npm test${NC}                    # Run all tests"
echo "   ${GREEN}npm run test:unit${NC}           # Run unit tests only"
echo "   ${GREEN}npm run test:integration${NC}    # Run integration tests"
echo "   ${GREEN}npm run test:e2e${NC}            # Run E2E tests with Cypress"
echo ""
echo "4. Check test coverage:"
echo "   ${GREEN}npm run test:coverage${NC}"
echo ""
echo "5. Debug the application:"
echo "   Open VS Code and use the debug configurations (F5)"
echo ""
echo "📚 For more information, see README.md"
echo ""
echo -e "${GREEN}Happy coding! 🎉${NC}"
