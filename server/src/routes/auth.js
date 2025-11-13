const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getMe,
  updateProfile,
  changePassword,
} = require('../controllers/authController');
const { authenticate } = require('../middleware/auth');
const {
  userRegistrationRules,
  userLoginRules,
  validate,
} = require('../middleware/validator');

// Public routes
router.post('/register', userRegistrationRules, validate, register);
router.post('/login', userLoginRules, validate, login);

// Protected routes
router.get('/me', authenticate, getMe);
router.put('/me', authenticate, updateProfile);
router.put('/change-password', authenticate, changePassword);

module.exports = router;
