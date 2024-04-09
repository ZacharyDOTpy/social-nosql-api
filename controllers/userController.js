const User = require('../models/user');

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = new User({ username, email });
    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (err) {
    console.error('Problem creating user', err);
    res.status(500).json(err);
  }
};

module.exports = { createUser };