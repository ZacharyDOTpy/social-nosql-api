const Thought = require('../models/thought');

const createThought = async (req, res) => {
  try {
    const { userId, thoughtText } = req.body;
    const thought = new Thought({ userId, thoughtText });
    const savedThought = await thought.save();

    res.status(201).json(savedThought);
  } catch (err) {
    console.error('Problem creating thought', err);
    res.status(500).json(err);
  }
};

module.exports = { createThought };