const { expect } = require('chai');
const sinon = require('sinon');
require('sinon-mongoose');

const Tweets = require('../models/Tweets');

describe('Tweets Model', () => {
  it('should create a new tweet', function (done) {
    const TweetMock = sinon.mock(new Tweets({
      id_str: Math.floor(100000000 + Math.random() * 900000000).toString(),
      text: 'Test Tweet',
    }));
    const tweet = TweetMock.object;

    // tweet
    //   .expects('save')
    //   .yields(null);

    tweet.save((err) => {
      tweet.verify();
      tweet.restore();
      expect(err).to.be.null;
      done();
    });
  });

  it('should return error if tweet is not created');

});