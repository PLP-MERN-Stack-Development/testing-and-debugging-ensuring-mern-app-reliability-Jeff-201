const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  getPostBySlug,
  createPost,
  updatePost,
  deletePost,
  toggleLike,
} = require('../controllers/postController');
const { authenticate, optionalAuth } = require('../middleware/auth');
const {
  createPostRules,
  updatePostRules,
  objectIdRule,
  validate,
} = require('../middleware/validator');

// Public routes
router.get('/', optionalAuth, getAllPosts);
router.get('/slug/:slug', optionalAuth, getPostBySlug);
router.get('/:id', objectIdRule, validate, optionalAuth, getPostById);

// Protected routes
router.post('/', authenticate, createPostRules, validate, createPost);
router.put('/:id', authenticate, objectIdRule, updatePostRules, validate, updatePost);
router.delete('/:id', authenticate, objectIdRule, validate, deletePost);
router.post('/:id/like', authenticate, objectIdRule, validate, toggleLike);

module.exports = router;
