const { successResponse, errorResponse } = require("../utils/apiResponse");

/**
 * In-memory posts store
 * In production, this would be replaced with a database
 */
let posts = [];

/**
 * GET /api/v1/posts
 * Retrieve all posts
 */
exports.getAllPosts = (req, res) => {
  return successResponse(res, 200, "Posts fetched successfully", posts);
};

/**
 * GET /api/v1/posts/:id
 * Retrieve a single post by ID
 */
exports.getPostById = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return errorResponse(res, 404, "Post not found");
  }

  return successResponse(res, 200, "Post fetched successfully", post);
};

/**
 * POST /api/v1/posts
 * Create a new post
 */
exports.createPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return errorResponse(res, 400, "Title and content are required");
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    createdAt: new Date().toISOString(),
  };

  posts.push(newPost);

  return successResponse(res, 201, "Post created successfully", newPost);
};

/**
 * PUT /api/v1/posts/:id
 * Update an existing post by ID
 */
exports.updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return errorResponse(res, 404, "Post not found");
  }

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  post.updatedAt = new Date().toISOString();

  return successResponse(res, 200, "Post updated successfully", post);
};

/**
 * DELETE /api/v1/posts/:id
 * Delete a post by ID
 */
exports.deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) {
    return errorResponse(res, 404, "Post not found");
  }

  const deletedPost = posts.splice(index, 1)[0];

  return successResponse(res, 200, "Post deleted successfully", {
    deletedId: deletedPost.id,
  });
};
