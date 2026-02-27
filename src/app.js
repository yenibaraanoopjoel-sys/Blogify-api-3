const express = require("express");
const apiRouter = require("./routes");
const notFoundMiddleware = require("./middleware/notFound.middleware");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

/**
 * Global Middleware
 */
app.use(express.json());

/**
 * API Routes
 * All routes are prefixed with /api/v1
 */
app.use("/api/v1", apiRouter);

/**
 * Error Handling Middleware
 * Must come after all other routes and middleware
 */
app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
