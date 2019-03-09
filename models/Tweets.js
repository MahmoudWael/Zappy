const mongoose = require('mongoose');
const filterParams = require('../util/tweetsObj').filterParams;

const tweetsSchema = new mongoose.Schema({
  created_at: {
    type: String
  },
  id_str: {
    type: String,
    unique: true
  },
  text: {
    type: String
  }
}, {
  timestamps: true
});

const Tweets = mongoose.model('Tweets', tweetsSchema);

Tweets.saveTweets = function (tweetsObj) {
  tweetsObj = filterParams(tweetsObj);
  console.log('inside saveTweets', tweetsObj);
};

module.exports = Tweets;