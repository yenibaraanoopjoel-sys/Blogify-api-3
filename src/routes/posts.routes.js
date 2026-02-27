const express = require("express");
const postsController = require("../controllers/posts.controller");

const router = express.Router();

/**
 * POST Routes
 */
router.get("/", postsController.getAllPosts);
router.get("/:id", postsController.getPostById);
router.post("/", postsController.createPost);
router.put("/:id", postsController.updatePost);
router.delete("/:id", postsController.deletePost);

module.exports = router;
