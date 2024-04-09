const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },

  reactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reaction',
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => {
      return createdAtVal.toISOString();
    },
  },
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;