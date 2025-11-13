# Git & GitHub Setup Guide

This guide will help you initialize Git, create a repository on GitHub, and push your MERN Testing & Debugging Application.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account created
- Command line/terminal access

## 🚀 Quick Setup (Recommended)

### Step 1: Initialize Git Repository

```bash
# Navigate to project directory
cd "/Users/emmidev/Desktop/Assignment PLP/Full-Stack/testing-and-debugging-ensuring-mern-app-reliability-Github-Emmi"

# Initialize Git (if not already done)
git init

# Add all files to staging
git add .

# Make initial commit
git commit -m "Initial commit: Complete MERN Testing & Debugging Application"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in repository details:
   - **Repository name**: `mern-testing-debugging-app` (or your preferred name)
   - **Description**: "Complete MERN stack application with comprehensive testing and debugging - PLP Week 6 Assignment"
   - **Visibility**: Choose **Public** or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### Step 3: Connect Local Repository to GitHub

GitHub will show you commands. Use these:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Verify remote was added
git remote -v

# Push to GitHub (main branch)
git branch -M main
git push -u origin main
```

**Replace:**
- `YOUR-USERNAME` with your GitHub username
- `YOUR-REPO-NAME` with your repository name

### Step 4: Verify on GitHub

1. Refresh your repository page on GitHub
2. You should see all your files uploaded
3. README.md should display automatically

---

## 🔐 Alternative: Using SSH (Recommended for Frequent Use)

If you prefer SSH over HTTPS:

### 1. Generate SSH Key (if you don't have one)

```bash
# Generate new SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Start ssh-agent
eval "$(ssh-agent -s)"

# Add SSH key to agent
ssh-add ~/.ssh/id_ed25519
```

### 2. Add SSH Key to GitHub

```bash
# Copy SSH public key
cat ~/.ssh/id_ed25519.pub
# Copy the output
```

1. Go to GitHub → **Settings** → **SSH and GPG keys**
2. Click **"New SSH key"**
3. Paste your key and save

### 3. Use SSH Remote URL

```bash
# Add remote with SSH
git remote add origin git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git

# Or change existing remote to SSH
git remote set-url origin git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git

# Push
git push -u origin main
```

---

## 📝 Common Git Commands

### Making Changes

```bash
# Check status
git status

# Add specific files
git add filename.js

# Add all changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push
```

### Viewing History

```bash
# View commit history
git log

# View compact history
git log --oneline

# View changes
git diff
```

### Branching

```bash
# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# List branches
git branch

# Delete branch
git branch -d feature-name
```

### Syncing

```bash
# Fetch changes from GitHub
git fetch

# Pull changes from GitHub
git pull

# Push changes to GitHub
git push
```

---

## 🏷️ Creating a Release

After pushing your code:

### 1. Create a Tag

```bash
# Create tag for version 1.0.0
git tag -a v1.0.0 -m "Version 1.0.0 - Initial Release"

# Push tag to GitHub
git push origin v1.0.0
```

### 2. Create GitHub Release

1. Go to your repository on GitHub
2. Click **"Releases"** → **"Create a new release"**
3. Choose your tag (v1.0.0)
4. Fill in release details:
   - **Release title**: "v1.0.0 - Complete MERN Testing Application"
   - **Description**: Use content from CHANGELOG.md
5. Click **"Publish release"**

---

## ✅ Recommended First Commit Message

```bash
git commit -m "Initial commit: Complete MERN Testing & Debugging Application

Features:
- Full-stack MERN application (React + Express + MongoDB)
- Comprehensive test suite (Unit, Integration, E2E)
- VS Code debugging configurations
- CI/CD with GitHub Actions
- Complete documentation

Assignment: PLP Full-Stack Development Week 6
Coverage: 70%+ test coverage goal
Tech Stack: React 18, Express 4, MongoDB, Jest, Cypress"
```

---

## 🔍 Verify Your Push

After pushing, check that these are visible on GitHub:

- [x] README.md displays on repository homepage
- [x] All source files are present
- [x] .github/workflows/test.yml is present (enables CI/CD)
- [x] Package.json files are present
- [x] LICENSE file is present

---

## 🚨 Troubleshooting

### Problem: "Permission denied (publickey)"

**Solution**: Set up SSH keys or use HTTPS URL

### Problem: "Repository not found"

**Solution**: Check repository name and your GitHub username in the URL

### Problem: "Failed to push some refs"

**Solution**: Pull first, then push:
```bash
git pull origin main --rebase
git push origin main
```

### Problem: Large files error

**Solution**: Check .gitignore includes:
- `node_modules/`
- `dist/`
- `coverage/`
- `.env`

---

## 📊 GitHub Features to Enable

### 1. Branch Protection (Optional)

Settings → Branches → Add rule for `main`:
- [x] Require pull request reviews before merging
- [x] Require status checks to pass before merging
- [x] Include administrators

### 2. Enable GitHub Pages (Optional)

If you want to host documentation:
1. Settings → Pages
2. Source: Deploy from branch
3. Branch: main → /docs
4. Save

### 3. Enable Issues and Discussions

Settings → General:
- [x] Issues
- [x] Discussions (optional)

---

## 🎯 Submission Checklist

Before submitting your assignment:

- [ ] All code committed to Git
- [ ] Pushed to GitHub successfully
- [ ] README.md visible on GitHub
- [ ] Repository is public (if required)
- [ ] All tests are included
- [ ] Documentation is complete
- [ ] GitHub Actions workflow is present
- [ ] .env files are NOT committed (check .gitignore)
- [ ] Repository URL is ready to submit

---

## 📎 Your Repository URL

After setup, your repository URL will be:

```
https://github.com/YOUR-USERNAME/YOUR-REPO-NAME
```

**This is the URL you'll submit for the assignment.**

---

## 🎓 For Assignment Submission

When submitting:

1. **Repository Link**: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME`
2. **Branch**: `main`
3. **Documentation**: README.md contains all setup instructions
4. **Tests**: Can be run with `npm test`
5. **Coverage**: Reports available with `npm run test:coverage`

---

## 💡 Tips

1. **Commit Often**: Make small, frequent commits with clear messages
2. **Use Branches**: Create feature branches for new work
3. **Write Good Commit Messages**: Explain what and why, not just what
4. **Keep .env Secret**: Never commit environment variables
5. **Update README**: Keep documentation current
6. **Tag Releases**: Use semantic versioning (v1.0.0, v1.1.0, etc.)

---

## 📚 Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Pro Git Book](https://git-scm.com/book/en/v2)

---

**Ready to push to GitHub!** 🚀

If you encounter any issues, refer to the troubleshooting section or create an issue in your repository.
