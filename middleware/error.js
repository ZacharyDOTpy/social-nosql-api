// Initialize the error handler middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error

  // Respond with an appropriate error status and message
  res.status(500).json({ error: 'Internal server error' });
};

module.exports = { errorHandler };
