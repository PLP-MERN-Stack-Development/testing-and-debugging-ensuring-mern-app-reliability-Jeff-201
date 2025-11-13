const Post = require('../models/Post');
const { asyncHandler } = require('../middleware/errorHandler');
const { logInfo } = require('../utils/logger');

/**
 * @desc    Get all posts
 * @route   GET /api/posts
 * @access  Public
 */
const getAllPosts = asyncHandler(async (req, res) => {
  const { status, category, author, page = 1, limit = 10, sort = '-createdAt' } = req.query;

  // Build filter
  const filter = {};
  if (status) filter.status = status;
  if (category) filter.category = category;
  if (author) filter.author = author;

  // Calculate pagination
  const skip = (page - 1) * limit;

  // Execute query
  const posts = await Post.find(filter)
    .populate('author', 'username email firstName lastName avatar')
    .populate('category', 'name slug')
    .sort(sort)
    .skip(skip)
    .limit(parseInt(limit));

  const total = await Post.countDocuments(filter);

  res.json({
    success: true,
    data: {
      posts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    },
  });
});

/**
 * @desc    Get single post by ID
 * @route   GET /api/posts/:id
 * @access  Public
 */
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
    .populate('author', 'username email firstName lastName avatar')
    .populate('category', 'name slug');

  if (!post) {
    return res.status(404).json({
      success: false,
      message: 'Post not found',
    });
  }

  // Increment views
  await post.incrementViews();

  res.json({
    success: true,
    data: {
      post,
    },
  });
});

/**
 * @desc    Get post by slug
 * @route   GET /api/posts/slug/:slug
 * @access  Public
 */
const getPostBySlug = asyncHandler(async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug })
    .populate('author', 'username email firstName lastName avatar')
    .populate('category', 'name slug');

  if (!post) {
    return res.status(404).json({
      success: false,
      message: 'Post not found',
    });
  }

  // Increment views
  await post.incrementViews();

  res.json({
    success: true,
    data: {
      post,
    },
  });
});

/**
 * @desc    Create new post
 * @route   POST /api/posts
 * @access  Private
 */
const createPost = asyncHandler(async (req, res) => {
  const { title, content, category, tags, featuredImage } = req.body;

  const post = await Post.create({
    title,
    content,
    category,
    tags,
    featuredImage,
    author: req.user._id,
  });

  await post.populate('author', 'username email firstName lastName avatar');
  await post.populate('category', 'name slug');

  logInfo('Post created', { postId: post._id, userId: req.user._id });

  res.status(201).json({
    success: true,
    message: 'Post created successfully',
    data: {
      post,
    },
  });
});

/**
 * @desc    Update post
 * @route   PUT /api/posts/:id
 * @access  Private
 */
const updatePost = asyncHandler(async (req, res) => {
  let post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: 'Post not found',
    });
  }

  // Check if user is the author or admin
  if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Not authorized to update this post',
    });
  }

  const { title, content, category, tags, status, featuredImage } = req.body;

  post = await Post.findByIdAndUpdate(
    req.params.id,
    { title, content, category, tags, status, featuredImage },
    { new: true, runValidators: true }
  )
    .populate('author', 'username email firstName lastName avatar')
    .populate('category', 'name slug');

  logInfo('Post updated', { postId: post._id, userId: req.user._id });

  res.json({
    success: true,
    message: 'Post updated successfully',
    data: {
      post,
    },
  });
});

/**
 * @desc    Delete post
 * @route   DELETE /api/posts/:id
 * @access  Private
 */
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: 'Post not found',
    });
  }

  // Check if user is the author or admin
  if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Not authorized to delete this post',
    });
  }

  await post.deleteOne();

  logInfo('Post deleted', { postId: post._id, userId: req.user._id });

  res.json({
    success: true,
    message: 'Post deleted successfully',
  });
});

/**
 * @desc    Toggle like on post
 * @route   POST /api/posts/:id/like
 * @access  Private
 */
const toggleLike = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: 'Post not found',
    });
  }

  await post.toggleLike(req.user._id);

  res.json({
    success: true,
    message: 'Like toggled successfully',
    data: {
      likes: post.likes.length,
      isLiked: post.likes.includes(req.user._id),
    },
  });
});

module.exports = {
  getAllPosts,
  getPostById,
  getPostBySlug,
  createPost,
  updatePost,
  deletePost,
  toggleLike,
};
