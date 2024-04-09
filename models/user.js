const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: 'You need to provide a username!',
    trim: true
  },

  email: {
    type: String,
    unique: true,
    required: 'You need to provide an email address!',
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },

  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],

  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;