const express = require("express");
const postsRouter = require("./posts.routes");

const router = express.Router();

/**
 * API v1 Routes
 * All routes are prefixed with /api/v1
 */
router.use("/posts", postsRouter);

module.exports = router;
