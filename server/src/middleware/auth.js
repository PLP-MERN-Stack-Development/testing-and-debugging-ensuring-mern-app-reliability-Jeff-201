const { verifyToken, extractToken } = require('../utils/auth');
const User = require('../models/User');
const { logWarn } = require('../utils/logger');

/**
 * Middleware to authenticate user using JWT
 */
const authenticate = async (req, res, next) => {
  try {
    const token = extractToken(req.headers.authorization);
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.',
      });
    }

    const decoded = verifyToken(token);
    
    // Fetch user from database
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token. User not found.',
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: 'Account is inactive.',
      });
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (error) {
    logWarn('Authentication failed', { error: error.message });
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token.',
    });
  }
};

/**
 * Middleware to check if user has required role
 * @param {Array<string>} roles - Array of allowed roles
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required.',
      });
    }

    if (!roles.includes(req.user.role)) {
      logWarn('Authorization failed', {
        userId: req.user._id,
        userRole: req.user.role,
        requiredRoles: roles,
      });
      
      return res.status(403).json({
        success: false,
        message: 'Access denied. Insufficient permissions.',
      });
    }

    next();
  };
};

/**
 * Optional authentication middleware
 * Attaches user if token is valid, but doesn't require it
 */
const optionalAuth = async (req, res, next) => {
  try {
    const token = extractToken(req.headers.authorization);
    
    if (token) {
      const decoded = verifyToken(token);
      const user = await User.findById(decoded.id).select('-password');
      
      if (user && user.isActive) {
        req.user = user;
      }
    }
  } catch (error) {
    // Continue without user
    logWarn('Optional auth failed', { error: error.message });
  }
  
  next();
};

module.exports = {
  authenticate,
  authorize,
  optionalAuth,
};
