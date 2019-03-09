const app = require('../app.js');
const request = require('supertest');

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/tweets')
      .expect(200, done);
  });
});
