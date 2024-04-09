const Reaction = require('../models/reaction');

const createReaction = async (req, res) => {
  try{
    const { userId, thoughtId, reactionBody } = req.body;
    const reaction = new Reaction({ userId, thoughtId, reactionBody });
    const savedReaction = await reaction.save();
    
    res.status(201).json(savedReaction);
  }catch (err) {
    console.error('Problem creating reaction', err);
    res.status(500).json(err);
  }
};

module.exports = { createReaction };