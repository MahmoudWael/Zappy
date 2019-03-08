const mongoose = require('mongoose');

const tweetsSchema = new mongoose.Schema({
  created_at: {
    type: String
  }
}, {
  timestamps: true
});



const Tweets = mongoose.model('Tweets', tweetsSchema);

module.exports = Tweets;