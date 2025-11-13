# Contributing to MERN Testing & Debugging Application

Thank you for your interest in contributing to this project! This document provides guidelines for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:
- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards others

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (OS, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case**: Why is this enhancement useful?
- **Proposed solution**
- **Alternative solutions** you've considered

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Follow the code style** of the project
3. **Write tests** for your changes
4. **Ensure tests pass**: Run `npm test`
5. **Update documentation** if needed
6. **Write a clear commit message**

#### Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update tests to reflect your changes
3. Ensure all tests pass and coverage remains above 70%
4. The PR will be merged once you have approval from maintainers

### Code Style Guidelines

- Use **ESLint** and **Prettier** configurations provided
- Follow **React best practices**
- Write **clean, readable code**
- Add **comments** for complex logic
- Use **meaningful variable names**

### Testing Guidelines

- Write tests for all new features
- Maintain test coverage above 70%
- Follow the testing pattern:
  - **Unit tests**: Test individual functions/components
  - **Integration tests**: Test API endpoints and flows
  - **E2E tests**: Test complete user journeys

### Commit Message Guidelines

Follow conventional commits:

```
type(scope): subject

body

footer
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

**Examples:**
```
feat(auth): add password reset functionality
fix(posts): resolve pagination issue
docs(readme): update installation instructions
test(auth): add integration tests for login
```

## Development Setup

1. Clone the repository
2. Install dependencies: `npm run install-all`
3. Set up environment variables
4. Run tests: `npm test`
5. Start development server: `npm run dev`

## Project Structure

Please maintain the existing project structure:

```
/client     - React frontend
/server     - Express backend
/tests      - Test files
```

## Questions?

Feel free to open an issue for questions or clarifications.

Thank you for contributing! 🎉
