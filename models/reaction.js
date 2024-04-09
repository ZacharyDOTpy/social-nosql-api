const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  thoughtId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thought',
    required: true,
  },

  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;