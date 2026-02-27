/**
 * 404 Not Found Middleware
 * Handles all requests that don't match any defined routes
 */
const notFoundMiddleware = (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
};

module.exports = notFoundMiddleware;
