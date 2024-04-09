const authenticateUser = (req, res, next) => {
  // Check if user is authenticated by checking for a token in the Authorization header
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next(); // Proceed to the next middleware or route handler
};

module.exports = { authenticateUser };
